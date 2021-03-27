import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import Media from 'src/media/media.entity';
import { MediaService } from 'src/media/media.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { FollowsService } from './follows/follows.service';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private mediaService: MediaService,
  ) {
    return;
  }

  @Query(() => [User])
  async indexUsers(): Promise<User[]> {
    const users = await this.userService.indexUsers();
    return users;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { nullable: true })
  async getUser(@Args('id') id: string): Promise<User> {
    const user = await this.userService.getUser(id);
    return user;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    const user = await this.userService.createUser(data);
    return user;
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userService.updateUser(id, data);
    return user;
  }

  @Mutation(() => String)
  async deleteUser(@Args('id') id: string): Promise<string> {
    await this.userService.deleteUser(id);
    return 'user succefully deleted';
  }

  @ResolveField(() => Media, { nullable: true })
  async cover(@Parent() user: User): Promise<Media> {
    try {
      const media = await this.mediaService.findMedia(user.coverMedia);
      return media;
    } catch (err) {
      return null;
    }
  }
}
