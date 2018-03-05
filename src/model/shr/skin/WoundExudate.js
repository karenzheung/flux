import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.skin.WoundExudate.
 * @extends Observation
 */
class WoundExudate extends Observation {

  /**
   * Get the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @returns {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @param {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity and return 'this' for chaining.
   * @param {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   * @returns {WoundExudate} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundExudate class.
   * The JSON must be valid against the WoundExudate JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundExudate} An instance of WoundExudate populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundExudate();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the WoundExudate class to a JSON object.
   * The JSON is expected to be valid against the WoundExudate JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/skin/WoundExudate' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['shr.base.RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['shr.base.Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['shr.base.Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['shr.base.Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['shr.finding.FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['shr.finding.FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['shr.finding.FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['shr.finding.FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['shr.finding.Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.valueAbsentReason != null) {
      inst['shr.finding.ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['shr.finding.ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.clinicallyRelevantTime != null) {
      inst['shr.finding.ClinicallyRelevantTime'] = typeof this.clinicallyRelevantTime.toJSON === 'function' ? this.clinicallyRelevantTime.toJSON() : this.clinicallyRelevantTime;
    }
    if (this.category != null) {
      inst['shr.core.Category'] = this.category.map(f => f.toJSON());
    }
    if (this.bodySite != null) {
      inst['shr.entity.BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.changeFlag != null) {
      inst['shr.finding.ChangeFlag'] = typeof this.changeFlag.toJSON === 'function' ? this.changeFlag.toJSON() : this.changeFlag;
    }
    if (this.details != null) {
      inst['shr.core.Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.interpretation != null) {
      inst['shr.finding.Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.observationQualifier != null) {
      inst['shr.finding.ObservationQualifier'] = this.observationQualifier.map(f => f.toJSON());
    }
    if (this.specimen != null) {
      inst['shr.entity.Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.device != null) {
      inst['shr.device.Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.referenceRange != null) {
      inst['shr.finding.ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.observationComponent != null) {
      inst['shr.finding.ObservationComponent'] = this.observationComponent.map(f => f.toJSON());
    }
    if (this.members != null) {
      inst['shr.finding.Members'] = typeof this.members.toJSON === 'function' ? this.members.toJSON() : this.members;
    }
    return inst;
  }
}
export default WoundExudate;
