import Person from "../shr/entity/Person";

class FluxPerson {
    constructor(json) {
        this._person = Person.fromJSON(json);
    }

    get entryInfo() {
        return this._person.entryInfo;
    }

    get name() {
        if (!this._person.humanName || (this._person.humanName.length < 1)) {
            return null;
        }
        // TODO: Do we just assume that the first human name is the "correct" one?
        const humanName = this._person.humanName[0];
        let ret = [];
        if (humanName.givenName && humanName.givenName.length) {
            ret = humanName.givenName.map(gn => gn.value);
        }
        if (humanName.familyName) {
            ret.push(humanName.familyName.value);
        }
        return ret.length ? ret.join(' ') : null;
    }

    get dateOfBirth() {
        return this._person.dateOfBirth;
    }

    get address() {
        if (!this._person.address || (this._person.address.length < 1)) {
            return null;
        } else {
            return this._person.address[0];
        }
    }

    get headshot() {
        return this._person.headshot.attachment.resourceLocation.uri;
    }
}

export default FluxPerson;