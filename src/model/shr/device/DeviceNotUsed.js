import { setPropertiesFromJSON } from '../../json-helper';

import DeviceAction from './DeviceAction';

/**
 * Generated class for shr.device.DeviceNotUsed.
 * @extends DeviceAction
 */
class DeviceNotUsed extends DeviceAction {

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
   * @returns {DeviceNotUsed} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the NotPerformedContext.
   * @returns {NotPerformedContext} The shr.action.NotPerformedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the NotPerformedContext.
   * This field/value is required.
   * @param {NotPerformedContext} actionContext - The shr.action.NotPerformedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the NotPerformedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {NotPerformedContext} actionContext - The shr.action.NotPerformedContext
   * @returns {DeviceNotUsed} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DeviceNotUsed class.
   * The JSON must be valid against the DeviceNotUsed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DeviceNotUsed} An instance of DeviceNotUsed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DeviceNotUsed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DeviceNotUsed class to a JSON object.
   * The JSON is expected to be valid against the DeviceNotUsed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/device/DeviceNotUsed' };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.actionContext != null) {
      inst['ActionContext'] = typeof this.actionContext.toJSON === 'function' ? this.actionContext.toJSON() : this.actionContext;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.implanted != null) {
      inst['Implanted'] = typeof this.implanted.toJSON === 'function' ? this.implanted.toJSON() : this.implanted;
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    return inst;
  }
}
export default DeviceNotUsed;
