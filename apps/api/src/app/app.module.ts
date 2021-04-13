import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiLib1Module } from '@myorg/api/lib1';
import { ApiLib2Module } from '@myorg/api/lib2';
import { ApiLib3Module } from '@myorg/api/lib3';
import { ApiLib4Module } from '@myorg/api/lib4';
import { ApiLib5Module } from '@myorg/api/lib5';

@Module({
  imports: [
    ApiLib1Module,
    ApiLib2Module,
    ApiLib3Module,
    ApiLib4Module,
    ApiLib5Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
