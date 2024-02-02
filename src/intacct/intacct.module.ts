import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IntacctController } from './intacct.controller';
import { IntacctService } from './intacct.service';
import { CredentialsService } from '../credentials/credentials.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [IntacctController],
  providers: [IntacctService, CredentialsService],
})
export class IntacctModule {}
