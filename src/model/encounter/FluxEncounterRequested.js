import EncounterRequested from '../shr/encounter/EncounterRequested';
import FluxEncounter from './FluxEncounter';
import Timing from '../shr/core/Timing';

class FluxEncounterRequested extends FluxEncounter {
    constructor(json) {
        super(json);
        this._encounterRequested = EncounterRequested.fromJSON(json);
    }

    /**
     * @returns {EncounterRequested}
     */
    get encounter() {
        return this._encounterRequested;
    }

    /**
     * @returns {(dateTime|date|TimePeriod)}
     */
    _actualEncounterTime() {
        if (this.encounter.actionContext.expectedPerformanceTime instanceof Timing) {
            throw new Error('Timing is unsupported.');
        }
        return this.encounter.actionContext.expectedPerformanceTime ? this.encounter.actionContext.expectedPerformanceTime.value : null;
    }
}

export default FluxEncounterRequested;
