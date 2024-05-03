import { Injectable } from '@nestjs/common'
import { EnvConfig } from './env-config.interface'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnvConfigService implements EnvConfig{
    constructor (private configServie: ConfigService){}
    getAppPort(): number{
        return Number(this.configServie.get<number>('PORT'))
    }
    getNodeEnv(): string {
        return this.configServie.get<string>('NODE_ENV')
    }
}