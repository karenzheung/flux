import { setPropertiesFromJSON } from '../../json-helper';

import Condition from './Condition';

/**
 * Generated class for shr.condition.MentalHealthCondition.
 * @extends Condition
 */
class MentalHealthCondition extends Condition {

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
   * @returns {MentalHealthCondition} this.
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
   * @returns {MentalHealthCondition} this.
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
   * @returns {MentalHealthCondition} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MentalHealthCondition class.
   * The JSON must be valid against the MentalHealthCondition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MentalHealthCondition} An instance of MentalHealthCondition populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MentalHealthCondition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MentalHealthCondition class to a JSON object.
   * The JSON is expected to be valid against the MentalHealthCondition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/condition/MentalHealthCondition' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.bodySiteOrCode != null) {
      inst['BodySiteOrCode'] = this.bodySiteOrCode.map(f => f.toJSON());
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    if (this.whenClinicallyRecognized != null) {
      inst['WhenClinicallyRecognized'] = typeof this.whenClinicallyRecognized.toJSON === 'function' ? this.whenClinicallyRecognized.toJSON() : this.whenClinicallyRecognized;
    }
    if (this.preexisting != null) {
      inst['Preexisting'] = typeof this.preexisting.toJSON === 'function' ? this.preexisting.toJSON() : this.preexisting;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.stage != null) {
      inst['Stage'] = typeof this.stage.toJSON === 'function' ? this.stage.toJSON() : this.stage;
    }
    return inst;
  }
}
export default MentalHealthCondition;
