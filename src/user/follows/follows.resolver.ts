import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../user.entity';
import { UserService } from '../user.service';
import { FollowsService } from './follows.service';

@Resolver(() => User)
export class FollowsResolver {
  constructor(
    private userService: UserService,
    private followService: FollowsService,
  ) {
    return;
  }
  @ResolveField(() => Number)
  async followersCount(@Parent() user: User): Promise<number> {
    return await this.followService.getFollowersCount(user.uid);
  }

  @ResolveField(() => [User])
  async followedUsers(@Parent() user: User): Promise<User[]> {
    return await this.followService.getFollowers(user.uid);
  }

  @Mutation(() => Boolean)
  async followUser(
    @Args('id') id: string,
    @Args('target') target: string,
  ): Promise<boolean> {
    return await this.followService.followUser(id, target);
  }
}
