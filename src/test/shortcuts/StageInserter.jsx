import InserterShortcut from './InserterShortcut';
import Lang from 'lodash';

export default class StageInserter extends InserterShortcut {
	determineText(contextManager) {		
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		let staging = this.parentContext.getValueObject();
		return staging.value.coding.displayText;
	}
	
	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#staging")) {
			errors.push("Staging T values invalid without #staging. Use #staging to add a new staging to your narrative.");
		}
		return errors;
	}
	
    getShortcutType() { 
        return "@stage";
    }
	
	static getTriggers() {
		return [ "@stage" ];
	}
}