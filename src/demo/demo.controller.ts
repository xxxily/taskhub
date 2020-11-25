import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { DemoService } from './demo.service';
import { Request } from 'express';
import { AjaxSettings } from '../../types/demo';

export interface JsonMsg {
  code: number;
  data: any;
  content?: string;
  msg?: string;
  error?: Error;
}

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get()
  getHello(): string {
    return this.demoService.getHello();
  }

  @Get('test')
  assignPath(): string {
    return '指定路径';
  }

  @Get('find')
  @HttpCode(200)
  find(@Req() request: Request): JsonMsg {
    const json: JsonMsg = {
      code: 0,
      data: {},
      msg: 'This action returns all find',
    };

    return json;
  }

  @Get('find/one')
  findOne(@Req() request: Request): AjaxSettings {
    const json: AjaxSettings = {
      data: {},
      aaa: '',
    };

    return json;
  }
}
