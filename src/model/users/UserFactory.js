import User from "./User";

export default class UserFactory {
    getUser({userId, name, email}) {
        return new User({userId, name, email})
    }
}