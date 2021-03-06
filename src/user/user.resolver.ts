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
import { LogBook } from 'src/log-book/entities/log-book.entity';
import { LogBookService } from 'src/log-book/log-book.service';
import Media from 'src/media/media.entity';
import { MediaService } from 'src/media/media.service';
import { Recommendation } from 'src/recommendation/entities/recommendation.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { RecommendationService } from 'src/recommendation/recommendation.service';
import { CommentService } from 'src/comment/comment.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { FollowsService } from './follows/follows.service';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private logBookService: LogBookService,
    private mediaService: MediaService,
    private recommendationService: RecommendationService,
    private commentService: CommentService,
  ) {
    return;
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await this.userService.indexUsers();
    return users;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string): Promise<User> {
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

  @ResolveField(() => LogBook)
  async logBooks(@Parent() user: User): Promise<LogBook[]> {
    return this.logBookService.findByUserId(user.uid);
  }

  @ResolveField(() => Recommendation)
  async recommendations(@Parent() user: User): Promise<Recommendation[]> {
    return this.recommendationService.findByUserId(user.uid);
  }

  @ResolveField(() => Comment)
  async comments(@Parent() user: User): Promise<Comment[]> {
    return this.commentService.findByUserId(user.uid);
  }
}
