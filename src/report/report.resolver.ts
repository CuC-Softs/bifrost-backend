import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReportService } from './report.service';
import { Report } from './entities/report.entity';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';

@Resolver(() => Report)
export class ReportResolver {
  constructor(private readonly reportService: ReportService) {
    return;
  }

  @Mutation(() => Report)
  createReport(
    @Args('createReportInput') createReportInput: CreateReportInput,
  ) {
    return this.reportService.create(createReportInput);
  }

  @Query(() => [Report], { name: 'report' })
  findAll() {
    return this.reportService.findAll();
  }

  @Query(() => Report, { name: 'report' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reportService.findOne(id);
  }

  @Mutation(() => Report)
  updateReport(
    @Args('id') id: number,
    @Args('updateReportInput') updateReportInput: UpdateReportInput,
  ) {
    return this.reportService.update(id, updateReportInput);
  }

  @Mutation(() => Report)
  removeReport(@Args('id', { type: () => Int }) id: number) {
    return this.reportService.remove(id);
  }
}
