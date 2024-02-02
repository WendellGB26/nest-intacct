import { Controller, Get } from '@nestjs/common';
import { CredentialsService } from './credentials.service';

@Controller('api/credentials')
export class CredentialsController {
    constructor(private readonly intacctCredentialsService: CredentialsService) {}

    @Get('sender-id')
    getSenderId(): string[] {
      return this.intacctCredentialsService.getSenderId();
    }
}
