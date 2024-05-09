import { UserProps } from "../../entities/user.entity";
import {faker} from '@faker-js/faker'

export function UserDataBuilder(): UserProps {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        CreatAt: new Date()
    }
}