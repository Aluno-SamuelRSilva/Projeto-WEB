import { UserProps } from '../../../entities/user.entity'
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder'
import {
    UserRules,
    UserValidator,
    UserValidatorFactory
} from '../../user.validator'

let sut: UserValidator
let props: UserProps

describe('UserValidator unit tests ', () =>{
    beforeEach(() =>{
        sut = UserValidatorFactory.create()
        props = UserDataBuilder({})
    })

    it('Valid case for user validator class', () =>{
        const isValid = sut.validate(props)
        expect(isValid).toBeTruthy()
        expect(sut.validatedData).toStrictEqual(new UserRules(props))
    })


    describe('Name field', () => {
        it('Name field is null', () =>{
            const isValid = sut.validate(null as any)
            expect(isValid).toBeFalsy()
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
                'name must be a string',
                'name must be shorter than or equal to 255 characters'
            ])
        })
    })

    it('Name field is empty - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            name: ''
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['name']).toStrictEqual([
            'name should not be empty'
        ])
    })

    it('Name field is a number - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            name: 10 as any,
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['name']).toStrictEqual([
            'name must be a string',
            'name must be shorter than or equal to 255 characters'
        ])
    })


    it('Name field exceeds maximum length - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            name: 'a'.repeat(256) as any,
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['name']).toStrictEqual([
            'name must be shorter than or equal to 255 characters'
        ])
    })



    //email


    describe('Email field', () => {
        it('Email field is null', () =>{
            const isValid = sut.validate(null as any)
            expect(isValid).toBeFalsy()
            expect(sut.errors['email']).toStrictEqual([
                'email should not be empty',
                'email must be an email',
                'email must be a string',
                'email must be shorter than or equal to 255 characters'
            ])
        })
    })

    it('Email field is empty - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            email: ''
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['email']).toStrictEqual([
            'email should not be empty',
            'email must be an email'
        ])
    })

    it('Email field is a number - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            email: 10 as any,
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['email']).toStrictEqual([
            'email must be an email',
            'email must be a string',
            'email must be shorter than or equal to 255 characters'
        ])
    })


    it('Email field exceeds maximum length - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            email: 'a'.repeat(256) as any,
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['email']).toStrictEqual([
            'email must be an email',
            'email must be shorter than or equal to 255 characters'
        ])
    })

    //password

    describe('Password field', () => {
        it('Password field is null', () =>{
            const isValid = sut.validate(null as any)
            expect(isValid).toBeFalsy()
            expect(sut.errors['password']).toStrictEqual([
                'password should not be empty',
                'password must be a string',
                'password must be shorter than or equal to 100 characters'
            ])
        })
    })

    it('Password field is empty - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            password: ''
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['password']).toStrictEqual([
            'password should not be empty'
        ])
    })

    it('Password field is a number - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            password: 10 as any,
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['password']).toStrictEqual([
            'password must be a string',
            'password must be shorter than or equal to 100 characters'
        ])
    })


    it('Password field exceeds maximum length - error', () =>{
        const isValid = sut.validate({
            ...UserDataBuilder({}),
            password: 'a'.repeat(101) as any
        })
        expect(isValid).toBeFalsy()
        expect(sut.errors['password']).toStrictEqual([
            'password must be shorter than or equal to 100 characters'
        ])
    })


    //createdAT

    describe('CratedAt field', () => {
        it('CreatedAt field', () =>{
            const isValid = sut.validate({
                ...props,
                createdAt: '2024' as any,
            })
            expect(isValid).toBeFalsy()
            console.log(sut.errors)

            expect(sut.errors['createdAt']).toStrictEqual([
                'createdAt must be a Date instance'
            ])
        })
    })



})

/*
    {        
      name: [
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters'
      ],
      email: [
        'email should not be empty',
        'email must be an email',
        'email must be a string',
        'email must be shorter than or equal to 255 characters'
      ],
      password: [
        'password should not be empty',
        'password must be a string',
        'password must be shorter than or equal to 100 characters'       
      ]
    }
*/