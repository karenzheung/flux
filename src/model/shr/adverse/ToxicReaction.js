import { setPropertiesFromJSON } from '../../json-helper';

import AdverseEvent from './AdverseEvent';

/**
 * Generated class for shr.adverse.ToxicReaction.
 * @extends AdverseEvent
 */
class ToxicReaction extends AdverseEvent {

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
   * @returns {ToxicReaction} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the AdverseEventGrade.
   * @returns {AdverseEventGrade} The shr.adverse.AdverseEventGrade
   */
  get adverseEventGrade() {
    return this._adverseEventGrade;
  }

  /**
   * Set the AdverseEventGrade.
   * This field/value is required.
   * @param {AdverseEventGrade} adverseEventGrade - The shr.adverse.AdverseEventGrade
   */
  set adverseEventGrade(adverseEventGrade) {
    this._adverseEventGrade = adverseEventGrade;
  }

  /**
   * Set the AdverseEventGrade and return 'this' for chaining.
   * This field/value is required.
   * @param {AdverseEventGrade} adverseEventGrade - The shr.adverse.AdverseEventGrade
   * @returns {ToxicReaction} this.
   */
  withAdverseEventGrade(adverseEventGrade) {
    this.adverseEventGrade = adverseEventGrade; return this;
  }

  // Ommitting getter/setter for TBD: PatternOfEvent

  /**
   * Get the CauseCategory.
   * @returns {CauseCategory} The shr.adverse.CauseCategory
   */
  get causeCategory() {
    return this._causeCategory;
  }

  /**
   * Set the CauseCategory.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The shr.adverse.CauseCategory
   */
  set causeCategory(causeCategory) {
    this._causeCategory = causeCategory;
  }

  /**
   * Set the CauseCategory and return 'this' for chaining.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The shr.adverse.CauseCategory
   * @returns {ToxicReaction} this.
   */
  withCauseCategory(causeCategory) {
    this.causeCategory = causeCategory; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ToxicReaction class.
   * The JSON must be valid against the ToxicReaction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ToxicReaction} An instance of ToxicReaction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ToxicReaction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ToxicReaction class to a JSON object.
   * The JSON is expected to be valid against the ToxicReaction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['shr.base.EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/adverse/ToxicReaction' };
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
    if (this.details != null) {
      inst['shr.core.Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.occurrenceTime != null) {
      inst['shr.core.OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    if (this.adverseEventGrade != null) {
      inst['shr.adverse.AdverseEventGrade'] = typeof this.adverseEventGrade.toJSON === 'function' ? this.adverseEventGrade.toJSON() : this.adverseEventGrade;
    }
    if (this.seriousAdverseEvent != null) {
      inst['shr.adverse.SeriousAdverseEvent'] = typeof this.seriousAdverseEvent.toJSON === 'function' ? this.seriousAdverseEvent.toJSON() : this.seriousAdverseEvent;
    }
    if (this.outcome != null) {
      inst['shr.action.Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.associatedStudy != null) {
      inst['shr.procedure.AssociatedStudy'] = typeof this.associatedStudy.toJSON === 'function' ? this.associatedStudy.toJSON() : this.associatedStudy;
    }
    if (this.causeCategory != null) {
      inst['shr.adverse.CauseCategory'] = typeof this.causeCategory.toJSON === 'function' ? this.causeCategory.toJSON() : this.causeCategory;
    }
    if (this.adverseEventAttribution != null) {
      inst['shr.adverse.AdverseEventAttribution'] = this.adverseEventAttribution.map(f => f.toJSON());
    }
    if (this.actionTaken != null) {
      inst['shr.adverse.ActionTaken'] = this.actionTaken.map(f => f.toJSON());
    }
    return inst;
  }
}
export default ToxicReaction;
