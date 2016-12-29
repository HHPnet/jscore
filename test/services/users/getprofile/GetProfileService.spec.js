import {describe, beforeEach, it} from "mocha"
import {expect} from "chai"
import sinon from "sinon"
import UserRepository from "../../../../src/model/users/UserRepository"
import User from "../../../../src/model/users/User"
import GetProfileService from "../../../../src/services/users/getprofile/GetProfileService"


describe('GetProfileService', () => {
    let getProfileService, userRepository, user

    beforeEach(() => {
        userRepository = sinon.createStubInstance(UserRepository)
        user = new User({userId: null, name: 'unit', email: 'test@email.com'})
        getProfileService = new GetProfileService({userRepository})
    })

    it('should return a new user when profile is requested', () => {
        userRepository.getProfile.returns(user)

        const userRequest = {
            userId: 'test'
        }

        expect(getProfileService.execute({userRequest})).to.equal(user)
        expect(userRepository.getProfile).to.have.been.calledOnce
    })
})