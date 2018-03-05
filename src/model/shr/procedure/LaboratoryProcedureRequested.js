import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryProcedure from './LaboratoryProcedure';

/**
 * Generated class for shr.procedure.LaboratoryProcedureRequested.
 * @extends LaboratoryProcedure
 */
class LaboratoryProcedureRequested extends LaboratoryProcedure {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {LaboratoryProcedureRequested} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the RequestedContext.
   * @returns {RequestedContext} The shr.action.RequestedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the RequestedContext.
   * This field/value is required.
   * @param {RequestedContext} actionContext - The shr.action.RequestedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the RequestedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestedContext} actionContext - The shr.action.RequestedContext
   * @returns {LaboratoryProcedureRequested} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LaboratoryProcedureRequested class.
   * The JSON must be valid against the LaboratoryProcedureRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryProcedureRequested} An instance of LaboratoryProcedureRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LaboratoryProcedureRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the LaboratoryProcedureRequested class to a JSON object.
   * The JSON is expected to be valid against the LaboratoryProcedureRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['shr.base.EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/LaboratoryProcedureRequested' };
    if (this.relatedEncounter != null) {
      inst['shr.base.RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['shr.base.Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['shr.base.Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['shr.entity.Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.category != null) {
      inst['shr.core.Category'] = this.category.map(f => f.toJSON());
    }
    if (this.actionContext != null) {
      inst['shr.action.ActionContext'] = typeof this.actionContext.toJSON === 'function' ? this.actionContext.toJSON() : this.actionContext;
    }
    if (this.subject != null) {
      inst['shr.base.Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.bodySite != null) {
      inst['shr.entity.BodySite'] = this.bodySite.map(f => f.toJSON());
    }
    if (this.associatedStudy != null) {
      inst['shr.procedure.AssociatedStudy'] = typeof this.associatedStudy.toJSON === 'function' ? this.associatedStudy.toJSON() : this.associatedStudy;
    }
    if (this.partOf != null) {
      inst['shr.entity.PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['shr.core.Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.specimen != null) {
      inst['shr.entity.Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.device != null) {
      inst['shr.device.Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    return inst;
  }
}
export default LaboratoryProcedureRequested;
