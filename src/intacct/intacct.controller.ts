import { Controller, Get } from '@nestjs/common';
import { IntacctService } from './intacct.service';

@Controller('api/intacct')
export class IntacctController {
    constructor(private readonly intacctService: IntacctService) {}
    
    @Get()
    async executeFunction() {
        return await this.intacctService.executeFunction();
    }
}
