export default class User {

    constructor({userId, name, email}) {
        this._userId = userId
        this._name = name
        this._email = email
    }


    get userId() {
        return this._userId;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }


    set name(value) {
        this._name = value;
    }

    set email(value) {
        this._email = value;
    }
}