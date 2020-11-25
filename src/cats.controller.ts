import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('find')
  @HttpCode(200)
  find(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats find find find';
  }
}
