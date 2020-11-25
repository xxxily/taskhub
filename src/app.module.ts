import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { TaskhubModule } from './taskhub/taskhub.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [DemoModule, TaskhubModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
