import {Test, TestingModule} from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

describe('UsersController', () => {
    let controller: UsersController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService]
        }).compile()

        controller = module.get<UsersController>(UsersService)

    })

    it('Should be defined', () => {
        expect(controller).toBeDefined
    })
})

