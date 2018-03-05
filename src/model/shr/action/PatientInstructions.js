import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.PatientInstructions.
 */
class PatientInstructions {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {PatientInstructions} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {PatientInstructions} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PatientInstructions class.
   * The JSON must be valid against the PatientInstructions JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PatientInstructions} An instance of PatientInstructions populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PatientInstructions();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PatientInstructions class to a JSON object.
   * The JSON is expected to be valid against the PatientInstructions JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/action/PatientInstructions' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default PatientInstructions;
