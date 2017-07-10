// React imports
import React, {Component} from 'react';

// material-ui
import Paper from 'material-ui/Paper';
// Styling
import './ShortcutViewer.css';

class ShortcutViewer extends Component {

    render() {
        let string = "";

        if (this.props.currentDataItem == null) {
            string = "Choose a template from the left panel";
        }
        else {
            if(this.props.currentDataItem.shortcut) {
                string = this.props.currentDataItem.shortcut;
            }
        }
        return (
            <div id="shortcut-viewer" className="dashboard-panel">
                <Paper className="panel-content trio">
                    <div>
                        {string}
                    </div>
                </Paper>
            </div>
        )
    }
}

export default ShortcutViewer;
