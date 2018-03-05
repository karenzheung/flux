import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.AverageHER2SignalsPerCell.
 * @extends ObservationComponent
 */
class AverageHER2SignalsPerCell extends ObservationComponent {

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
   * @returns {AverageHER2SignalsPerCell} this.
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
   * @returns {AverageHER2SignalsPerCell} this.
   */
  withQuantity(quantity) {
    this.quantity = quantity; return this;
  }

  /**
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Set the ObservationCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   * @returns {AverageHER2SignalsPerCell} this.
   */
  withObservationCode(observationCode) {
    this.observationCode = observationCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AverageHER2SignalsPerCell class.
   * The JSON must be valid against the AverageHER2SignalsPerCell JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AverageHER2SignalsPerCell} An instance of AverageHER2SignalsPerCell populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AverageHER2SignalsPerCell();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AverageHER2SignalsPerCell class to a JSON object.
   * The JSON is expected to be valid against the AverageHER2SignalsPerCell JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/AverageHER2SignalsPerCell' } };
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
export default AverageHER2SignalsPerCell;
