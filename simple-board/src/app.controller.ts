import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { IP } from './decorators/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  // private readonly logger = new Logger();

  @Get()
  getHello(@IP() ip: string): string {
    // this.logger.log(ip);
    // this.logger.debug(ip);
    // this.logger.error(ip);
    // this.logger.verbose(ip);
    // this.logger.warn(ip);
    // console.log(ip);
    this.configService.get<string>('ENVIRONMENT');
    return this.appService.getHello();
    // throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `Hong ${name}`;
  }
}
