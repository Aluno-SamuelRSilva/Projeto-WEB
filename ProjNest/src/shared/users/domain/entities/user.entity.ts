import { Entity } from "@//shared/domain/entities/entity"


export type UserProps = {
    name: string
    email: string
    password: string
    CreatAt?: Date
}

export class UserEntity extends Entity<UserProps>{
    constructor(public readonly props: UserProps, id?: string) {
        super(props, id)
        this.props.CreatAt = this.props.CreatAt ?? new Date ()
    }

    get name(): string {
        return this.props.name
    }

    private set name(value: string){
        this.props.name = value
    }

    private set password(value: string){
        this.props.password = value
    }

    get email(): string {
        return this.props.email
    }

    get password(): string {
        return this.props.password
    }

    get CreateAt(): Date{
        return this.props.CreatAt
    }

    update(value: string): void{
        this.name = value
    }

    updatePassword(value: string): void{
        this.password = value
    }
}

