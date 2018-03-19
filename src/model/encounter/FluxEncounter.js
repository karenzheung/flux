import TimePeriod from "../shr/core/TimePeriod";

/**
 * @abstract
 */
class FluxEncounter {
    /**
     * @abstract
     * @returns {Encounter}
     */
    get encounter() {
        throw new Error('Implement me!');
    }

    /**
     *
     * @returns {Entry}
     */
    get entryInfo() {
        return this.encounter.entryInfo;
    }

    /**
     *
     * @returns {?Reason[]}
     */
    get reasons() {
        return this.encounter.actionContext.reason;
    }

    /**
     * @returns {string} the start of the encounter as a dateTime string.
     */
    get encounterTime() {
        const timeObj = this._actualEncounterTime();
        if (!timeObj) {
            return null;
        }
        if (timeObj instanceof TimePeriod) {
            if (timeObj.timePeriodStart) {
                return timeObj.timePeriodStart.value;
            } else if (timeObj.timePeriodEnd) {
                return timeObj.timePeriodEnd.value;
            } else {
                return null;
            }
        } else {
            return timeObj;
        }
    }

    /**
     * @abstract
     * @returns {(dateTime|date|TimePeriod)}
     */
    _actualEncounterTime() {
        throw new Error('Implement me!');
    }
}

export default FluxEncounter;
