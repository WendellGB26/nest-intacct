import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CredentialsService {
    constructor(private readonly configService: ConfigService) {}

    getSenderId(): string[] {
        const senderId = this.configService.get<string>('SAGE_SENDER_ID');
        const senderPassword = this.configService.get<string>('SAGE_SENDER_PASSWORD');
        const companyId = this.configService.get<string>('SAGE_COMPANY_ID');
        const userId = this.configService.get<string>('SAGE_USER_ID');
        const userPassword = this.configService.get<string>('SAGE_USER_PASSWORD');
        const entityId = this.configService.get<string>('SAGE_ENTITY_ID');
    
        return [senderId, senderPassword, companyId, userId, userPassword, entityId];
    }
}
