import { Controller, Get } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class AppController {
  constructor(private readonly demoService: DemoService) {}

  @Get()
  getHello(): string {
    return this.demoService.getHello();
  }
}
