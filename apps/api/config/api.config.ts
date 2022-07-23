import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  port: Number(process.env.PORT) || 3000,
  environment: process.env.NODE_ENV,
}));
