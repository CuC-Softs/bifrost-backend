import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthInstagramService } from './auth-instagram/auth-instagram.service';
import { InstagramGqlAuthGuard } from './auth.guard';

@Controller('auth/instagram')
export class InstagramController {
  constructor(private instagramAuthService: AuthInstagramService) { }
  @Get()
  @UseGuards(AuthGuard('instagram'))
  async googleAuth(@Req() req: Request) { }

  @Get('callback')
  @UseGuards(AuthGuard('instagram'))
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const user = JSON.stringify(req.user);
    const script = `
    <script>
        if (window.opener) {
            window.opener.focus();
            window.opener.postMessage(${user}, 'http://localhost:3000');
        } else {
            alert("deu ruin");
        }
        window.close();
    </script>
    `;
    res.send(script);
  }
}
