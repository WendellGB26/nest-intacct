import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CredentialsController } from './credentials.controller';
import { CredentialsService } from './credentials.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CredentialsController],
  providers: [CredentialsService],
  exports: [CredentialsService],
})
export class CredentialsModule {}
