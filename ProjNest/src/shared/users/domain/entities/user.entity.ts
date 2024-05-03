export type UserProps = {
    name: string
    email: string
    password: string
    CreatAt?: Date
}

export class UserEntity {
    constructor(public readonly props: UserProps) {
        this.props.CreatAt = this.props.CreatAt ?? new Date ()
    }
}