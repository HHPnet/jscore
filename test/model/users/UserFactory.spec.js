import {describe, it, beforeEach} from "mocha"
import {expect} from "chai"
import UserFactory from "../../../src/model/users/UserFactory"
import User from "../../../src/model/users/User"


describe('UserFactory', () => {
    let userFactory

    beforeEach(() => {
        userFactory = new UserFactory()
    })

    it('should generate a new getUser entity when userId is not given', () => {
        const user = userFactory.getUser({name: 'unit', email: 'email@test.com'});
        expect(user).to.be.an.instanceof(User)
        expect(user.userId).to.be.undefined
        expect(user.name).to.equal('unit')
        expect(user.email).to.equal('email@test.com')
    })

    it('should generate a new getUser entity when userId is given', () => {
        const user = userFactory.getUser({userId: 'test', name: 'unit', email: 'email@test.com'});
        expect(user).to.be.an.instanceof(User)
        expect(user.userId).to.equal('test')
        expect(user.name).to.equal('unit')
        expect(user.email).to.equal('email@test.com')
    })
})