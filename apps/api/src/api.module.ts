import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import apiConfig from '../config/api.config';
import swaggerConfig from '../config/swagger.config';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [apiConfig, swaggerConfig],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
