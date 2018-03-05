import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.NegationFlag.
 */
class NegationFlag {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * This field/value is required.
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Set the value (aliases boolean) and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} value - The boolean
   * @returns {NegationFlag} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Set the boolean and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   * @returns {NegationFlag} this.
   */
  withBoolean(boolean) {
    this.boolean = boolean; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NegationFlag class.
   * The JSON must be valid against the NegationFlag JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NegationFlag} An instance of NegationFlag populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NegationFlag();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NegationFlag class to a JSON object.
   * The JSON is expected to be valid against the NegationFlag JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/NegationFlag' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default NegationFlag;
