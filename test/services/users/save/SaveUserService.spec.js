import {describe, beforeEach, it} from "mocha"
import {expect} from "chai"
import sinon from "sinon"
import UserFactory from "../../../../src/model/users/UserFactory"
import UserRepository from "../../../../src/model/users/UserRepository"
import User from "../../../../src/model/users/User"
import SaveUserService from "../../../../src/services/users/save/SaveUserService"


describe('SaveUserService', () => {
    let saveUserService, userFactory, userRepository, user

    beforeEach(() => {
        userFactory = sinon.createStubInstance(UserFactory)
        userRepository = sinon.createStubInstance(UserRepository)
        user = new User({userId: 'test', name: 'unit', email: 'test@email.com'})
        saveUserService = new SaveUserService({userFactory, userRepository})
    })

    it('should save an user when a request to save profile information is given', () => {
        userFactory.getUser.returns(user)
        userRepository.save.returns(user)

        const userRequest = {
            userId: 'test',
            name: 'unit',
            email: 'email@test.com'
        }

        expect(saveUserService.execute({userRequest})).to.equal(user)
        expect(userFactory.getUser).to.have.been.calledOnce
        expect(userRepository.save).to.have.been.calledOnce
    })
})