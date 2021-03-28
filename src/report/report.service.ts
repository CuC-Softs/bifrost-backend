import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {
    return;
  }

  async create(createReportInput: CreateReportInput) {
    const report = this.reportRepository.create(createReportInput);
    const saved = await this.reportRepository.save(report);
    return saved;
  }

  async findAll() {
    const reports = await this.reportRepository.find();
    return reports;
  }

  async findOne(id: number) {
    try {
      const report = await this.reportRepository.findOneOrFail(id);
      return report;
    } catch (err) {
      throw new BadRequestException('Report not found');
    }
  }

  async update(id: number, updateReportInput: UpdateReportInput) {
    try {
      const report = await this.reportRepository.findOneOrFail(id);
      Object.assign(Report, updateReportInput);
      const saved = await this.reportRepository.save(report);
      return saved;
    } catch (error) {
      throw new BadRequestException('Report not found');
    }
  }

  async remove(id: number) {
    try {
      const report = await this.reportRepository.findOneOrFail(id);
      await this.reportRepository.remove(report);
    } catch (error) {
      throw new BadRequestException('Report not found');
    }
  }

  async findByUserId(userId: string): Promise<Report[]> {
    return await this.reportRepository.find({
      where: { user_id: userId },
    });
  }
}
