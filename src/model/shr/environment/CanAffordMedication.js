import { setPropertiesFromJSON } from '../../json-helper';

import QuestionAnswer from '../finding/QuestionAnswer';

/**
 * Generated class for shr.environment.CanAffordMedication.
 * @extends QuestionAnswer
 */
class CanAffordMedication extends QuestionAnswer {

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
   * @returns {CanAffordMedication} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {CanAffordMedication} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {CanAffordMedication} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
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
   * @returns {CanAffordMedication} this.
   */
  withObservationCode(observationCode) {
    this.observationCode = observationCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CanAffordMedication class.
   * The JSON must be valid against the CanAffordMedication JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CanAffordMedication} An instance of CanAffordMedication populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CanAffordMedication();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CanAffordMedication class to a JSON object.
   * The JSON is expected to be valid against the CanAffordMedication JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['shr.base.EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/environment/CanAffordMedication' };
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
export default CanAffordMedication;
