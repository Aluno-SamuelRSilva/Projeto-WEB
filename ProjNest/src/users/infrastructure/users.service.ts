import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'


@Injectable()
export class UsersService {
    create(CreateUserDto: CreateUserDto){
        return 'this action as a new user'
    }

    findAll(){
        return 'This action returns all users'
    }

    findOne(id: string){
        return `This action return a #${id} user`
    }

    update(id: string, UpdateUserDto: UpdateUserDto){
        return `This action updates a #${id} user`
    }

    remove(id: string){
        return `This action remove a #${id} user`
    }
}