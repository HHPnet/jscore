import {describe, beforeEach, it} from "mocha"
import {expect} from "chai"
import sinon from "sinon"
import UserFactory from "../../../../src/model/users/UserFactory"
import UserRepository from "../../../../src/model/users/UserRepository"
import User from "../../../../src/model/users/User"
import CreateUserService from "../../../../src/services/users/create/CreateUserService"


describe('CreateUserService', () => {
    let createUserService, userFactory, userRepository, user

    beforeEach(() => {
        userFactory = sinon.createStubInstance(UserFactory)
        userRepository = sinon.createStubInstance(UserRepository)
        user = new User({userId: null, name: 'unit', email: 'test@email.com'})
        createUserService = new CreateUserService({userFactory, userRepository})
    })

    it('should create a new getUser when a request to create a new one is given', () => {
        userFactory.getUser.returns(user)
        userRepository.save.returns(user)

        const userRequest = {
            userId: null,
            name: 'unit',
            email: 'email@test.com'
        }

        expect(createUserService.execute({userRequest})).to.equal(user)
        expect(userFactory.getUser).to.have.been.calledOnce
        expect(userRepository.save).to.have.been.calledOnce
    })
})