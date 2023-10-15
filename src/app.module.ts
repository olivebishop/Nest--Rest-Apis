import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/Prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
 
})
export class AppModule {}
