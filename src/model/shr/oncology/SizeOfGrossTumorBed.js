import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.SizeOfGrossTumorBed.
 * @extends ObservationComponent
 */
class SizeOfGrossTumorBed extends ObservationComponent {

  /**
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Set the value (aliases quantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   * @returns {SizeOfGrossTumorBed} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Set the Quantity and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   * @returns {SizeOfGrossTumorBed} this.
   */
  withQuantity(quantity) {
    this.quantity = quantity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SizeOfGrossTumorBed class.
   * The JSON must be valid against the SizeOfGrossTumorBed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SizeOfGrossTumorBed} An instance of SizeOfGrossTumorBed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SizeOfGrossTumorBed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SizeOfGrossTumorBed class to a JSON object.
   * The JSON is expected to be valid against the SizeOfGrossTumorBed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/SizeOfGrossTumorBed' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.valueAbsentReason != null) {
      inst['shr.finding.ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['shr.finding.ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.interpretation != null) {
      inst['shr.finding.Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.referenceRange != null) {
      inst['shr.finding.ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    return inst;
  }
}
export default SizeOfGrossTumorBed;
