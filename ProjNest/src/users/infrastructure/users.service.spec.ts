import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'

describe('UsersService', () => {
    let service: UsersService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService]
        }).compile();

        service = module.get<UsersService>(UsersService);
    })

    it('Should be define', () => {
        expect(service).toBeDefined()
    })
})