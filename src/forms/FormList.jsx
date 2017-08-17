import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import './FormList.css';

class FormList extends Component {

    constructor(props) {
        super(props);
        this._newShortcut = this._newShortcut.bind(this);
        this.state = {
            disabledElement: "Overview"
        }
    }

    _newShortcut(e, index, shortcutName) {
        e.preventDefault();

        if (shortcutName !== "Overview") {
            this.props.changeShortcut(this.props.shortcuts[index]);
        }
        else {
            this.props.changeShortcut(null);
        }
    }

    _onTouchTap(event, shortcutName) {
        this.setState({
            disabledElement: shortcutName
        });
    }

    render() {
        return (
            <div id="list-panel">
                <List style={{padding: "0px"}}>
                    {this.props.shortcuts.map((shortcutName, i) => {
                        let classValue = "list-element";
                        let primaryText = shortcutName;

                        if (shortcutName === "Overview") {
                            classValue += " overview";
                        }
                        if (this.state.disabledElement === shortcutName) {
                            classValue += " selected";

                        } else {
                            classValue += " unselected";
                        }
                        return (
                            <ListItem
                                key={i}
                                id={shortcutName}
                                primaryText={primaryText}
                                className={classValue}
                                onTouchTap={ (e) => {
                                    this._onTouchTap(e, shortcutName)
                                    this._newShortcut(e, i, shortcutName)
                                }
                                }
                            />
                        );
                    })}
                </List>
            </div>
        )
    }
}

export default FormList;
