import { getNamespaceAndName } from '../json-helper';
import ShrEncounterObjectFactory from '../shr/encounter/ShrEncounterObjectFactory';
import FluxEncounterPerformed from './FluxEncounterPerformed';
import FluxEncounterRequested from './FluxEncounterRequested';

export default class FluxEncounterObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.encounter') {
            throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrEncounterObjectFactory
        switch (elementName) {
            case 'EncounterPerformed': return new FluxEncounterPerformed(json);
            case 'EncounterRequested': return new FluxEncounterRequested(json);
            default: return ShrEncounterObjectFactory.createInstance(json, type);
        }
    }
}
