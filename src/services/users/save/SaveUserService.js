export default class SaveUserService {

    constructor({userFactory, userRepository}) {
        this._userFactory = userFactory
        this._userRepository = userRepository
    }

    execute({userRequest}) {
        return this._userRepository.save(this._userFactory.getUser({
            userId: userRequest.userId,
            name: userRequest.name,
            email: userRequest.email
        }))
    }
}