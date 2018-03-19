import EncounterPerformed from '../shr/encounter/EncounterPerformed';
import FluxEncounter from './FluxEncounter'

class FluxEncounterPerformed extends FluxEncounter {
    constructor(json) {
        super(json);
        this._encounterPerformed = EncounterPerformed.fromJSON(json);
    }

    /**
     * @returns {EncounterPerformed}
     */
    get encounter() {
        return this._encounterPerformed;
    }

    /**
     * @returns {(dateTime|date|TimePeriod)}
     */
    _actualEncounterTime() {
        return this.encounter.actionContext.occurrenceTimeOrPeriod ? this.encounter.actionContext.occurrenceTimeOrPeriod.value : null;
    }
}

export default FluxEncounterPerformed;
