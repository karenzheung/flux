import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.encounter.ReferralDate.
 */
class ReferralDate {

  /**
   * Get the value (aliases date).
   * @returns {date} The date
   */
  get value() {
    return this._date;
  }

  /**
   * Set the value (aliases date).
   * This field/value is required.
   * @param {date} value - The date
   */
  set value(value) {
    this._date = value;
  }

  /**
   * Set the value (aliases date) and return 'this' for chaining.
   * This field/value is required.
   * @param {date} value - The date
   * @returns {ReferralDate} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the date.
   * @returns {date} The date
   */
  get date() {
    return this._date;
  }

  /**
   * Set the date.
   * This field/value is required.
   * @param {date} date - The date
   */
  set date(date) {
    this._date = date;
  }

  /**
   * Set the date and return 'this' for chaining.
   * This field/value is required.
   * @param {date} date - The date
   * @returns {ReferralDate} this.
   */
  withDate(date) {
    this.date = date; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ReferralDate class.
   * The JSON must be valid against the ReferralDate JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReferralDate} An instance of ReferralDate populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ReferralDate();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ReferralDate class to a JSON object.
   * The JSON is expected to be valid against the ReferralDate JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/encounter/ReferralDate' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default ReferralDate;
