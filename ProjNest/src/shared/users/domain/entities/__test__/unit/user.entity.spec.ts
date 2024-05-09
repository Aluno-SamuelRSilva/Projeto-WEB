import { UserEntity,UserProps } from '../../user.entity'
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder'
import { before } from 'node:test'
describe('UserEntity Unit Test', () =>{
    let props: UserProps
    let sut: UserEntity
    beforeEach(()=> {
        props = UserDataBuilder()
        sut = new UserEntity(props)
    })

    it ('Constructor method', () => {
        expect(sut.props.name).toEqual(props.name)
        expect(sut.props.email).toEqual(props.email)
        expect(sut.props.password).toEqual(props.password)
        expect(sut.props.CreatAt).toBeInstanceOf(Date)
    })
    
    it('Gatter of me field', () => {
        expect(sut.props.name).toBeDefined()
        expect(typeof sut.props.name).toBe('string')
        expect(sut.props.name).toEqual(props.name)
    })

    it('Gatter of email field', () => {
        expect(sut.props.email).toBeDefined()
        expect(typeof sut.props.email).toBe('string')
        expect(sut.props.email).toEqual(props.email)
    })

    it('Gatter of password field', () => {
        expect(sut.props.password).toBeDefined()
        expect(typeof sut.props.password).toBe('string')
        expect(sut.props.password).toEqual(props.password)
    })

    it('Gatter of CreatAt field', () => {
        expect(sut.props.CreatAt).toBeDefined()
        expect(sut.props.CreatAt).toBeInstanceOf(Date)
    })
})