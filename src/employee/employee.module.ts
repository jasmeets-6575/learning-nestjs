import { Get, Module } from '@nestjs/common';

@Module({})
export class EmployeeModule {
  @Get()
  getEmployee() {
    return 'Employee data fetched successfully';
  }
}
