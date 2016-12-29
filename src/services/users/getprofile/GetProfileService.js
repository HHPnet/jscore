export default class GetProfileService {

    constructor({userRepository}) {
        this._userRepository = userRepository
    }

    execute({userRequest}) {
        return this._userRepository.getProfile(userRequest.userId)
    }
}