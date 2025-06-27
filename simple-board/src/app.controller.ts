import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IP } from './decorators/ip.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@IP() ip: string): string {
    console.log(ip);
    return this.appService.getHello();
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `Hong ${name}`;
  }
}
