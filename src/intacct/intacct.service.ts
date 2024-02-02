import { Injectable } from '@nestjs/common';
import { OnlineClient, ClientConfig, SessionProvider } from '@intacct/intacct-sdk';
import { CredentialsService } from '../credentials/credentials.service';

@Injectable()
export class IntacctService {
    private client: OnlineClient;

    constructor(private readonly credentialsService: CredentialsService) {
        const credentials = this.credentialsService.getSenderId()

        const config: ClientConfig = new ClientConfig();
        config.senderId = credentials[0];
        config.senderPassword = credentials[1];
        config.companyId = credentials[2];
        config.userId = credentials[3];
        config.userPassword = credentials[4];
        config.entityId = credentials[5];
        config.sessionId = 'your_session_id'
        config.endpointUrl = "https://api.intacct.com/ia/xml/xmlgw.phtml";

        this.client = new OnlineClient(config);
    }

    async executeFunction() {
        try {
            console.log('Client',this.client.config);
            let sessionConfig = await SessionProvider.factory(this.client.config);
            console.log('Session Connect', sessionConfig);
        } catch (ex) {
            console.log('Fallo', ex);
            throw ex;
        }
    }
}
