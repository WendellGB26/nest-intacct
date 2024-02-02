import { Module } from '@nestjs/common';
import { IntacctModule } from './intacct/intacct.module';
import { ConfigModule } from '@nestjs/config';
import { CredentialsModule } from './credentials/credentials.module';

@Module({
  imports: [
    IntacctModule,
    ConfigModule.forRoot(),
    CredentialsModule
  ]
})
export class AppModule {}
