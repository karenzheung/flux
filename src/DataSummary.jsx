// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
// Flexbox
import { Row, Col } from 'react-flexbox-grid';

// Styling
import './DataSummary.css';

class DataSummary extends Component {

    patient = {
        photo: "./DebraHernandez672.jpg",
        name: "Debra Hernandez672",
        dateOfBirth: "05 APR 1966",
        administrativeSex: "Female",
        city: "Boston",
        state: "MA"
    };

     missingInfoString = '';

    constructor(props) {
        super(props);

        this.handleHER2StatusChange = this.handleHER2StatusChange.bind(this)
        this.handleERStatusChange   = this.handleERStatusChange.bind(this)
        this.handlePRStatusChange   = this.handlePRStatusChange.bind(this)
    }

    handleHER2StatusChange (newStatus) {
      this.props.onHER2StatusChange(newStatus);
    }

    handleERStatusChange (newStatus) {
      this.props.onERStatusChange(newStatus);
    }

    handlePRStatusChange (newStatus) {
      this.props.onPRStatusChange(newStatus);
    }
    
    handleItemSelected(e, itemString, subItemString) {
        if (subItemString) {
            this.props.onSummaryItemSelected(itemString, subItemString);
        } else {
            this.props.onSummaryItemSelected(itemString, "");
        }
    }

    render() {

        // Current Staging

        const StageString = `Prognostic Stage: ${this.props.stage}`;
        const StageSubElementsString = `T: ${this.props.tumorSize}, N: ${this.props.nodeSize}, M: ${this.props.metastasis}`;
        const showMissingString = this.props.hasStagingData;

        if (showMissingString) {
            this.missingInfoString = '';
        } else {
            this.missingInfoString = '*Missing Information';
        }

        // Pathology Results
        const HGAString = 'HGA: HG2';
        const HER2StatusString = `HER2 Status: ${this.props.HER2Status}`;
        const ERStatusString = `ER Status: ${this.props.ERStatus}`;
        const PRStatusString = `PR Status: ${this.props.PRStatus}`;

        // Event Dates
        const DiagnosisDateString = 'Diagnosis: 05/16/2012';
        const DiagnosisString = 'Breast Cancer - Stage IIA';
        const SurgeryDateString = 'Surgery: 06/20/2012';
        const SurgeryString = 'Lumpectomy/sentinel/lymph node biopsy';
        const RadiationDateString = 'Radiation: 07/12/2012 - 08/16/2012';
        const TamoxifenDateString = 'Tamoxifen: 09/01/2012 - 07/01/2014';
        const RecurrenceDateString = 'Recurrence: 08/02/2015';

        return (
            <div id="data-summary">
                <Paper zDepth={1} className={this.props.className}>
                    <div id="summary-heading">
                        <Row center="xs">
                            <Col xs={6}>
                                <Avatar
                                    src={this.patient.photo}
                                    size={70}
                                />
                                <h1>{this.patient.name}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <p className="summary-heading-detail-name">DOB</p>
                                <p className="summary-heading-detail-value">{this.patient.dateOfBirth} ({calculateAge(this.patient.dateOfBirth)})</p>
                            </Col>
                            <Col xs={4}>
                                <p className="summary-heading-detail-name">Administrative Sex:</p>
                                <p className="summary-heading-detail-value">{this.patient.administrativeSex}</p>
                            </Col>
                            <Col xs={4}>
                                <p className="summary-heading-detail-name">Location</p>
                                <p className="summary-heading-detail-value">{this.patient.city}, {this.patient.state}</p>
                            </Col>
                        </Row>
                    </div>
                    <Row center="xs">
                        <Col xs={11}>
                            <Divider />
                        </Col>
                    </Row>

                    <div id="summary-condition-details">
                        <Row>
                            <Col xs={6}>
                                <h3>Current Staging</h3>
                                <ul className="summary-section" id="summary-staging">
                                    <div className="summary-details">
                                        <li>
                                            <span onClick={(e) => this.handleItemSelected(e, StageString, StageSubElementsString)}>{StageString}</span>
                                        </li>
                                        <li className="sub-list">
                                            <span onClick={(e) => this.handleItemSelected(e, StageString, StageSubElementsString)}>{StageSubElementsString}</span>
                                        </li>
                                    </div>
                                    <span id="staging-missing-warning">{this.missingInfoString}</span>
                                </ul>
                            </Col>
                            <Col xs={6}>
                                <h3>Pathology Results</h3>
                                <ul className="summary-section" id="summary-pathology">
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, HGAString)}>{HGAString}</span>
                                    </li>
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, HER2StatusString)}>{HER2StatusString}</span>
                                    </li>
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, ERStatusString)}>{ERStatusString}</span>
                                    </li>
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, PRStatusString)}>{PRStatusString}</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h3>Event Dates</h3>
                                <ul className="summary-section" id="summary-dates">
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, DiagnosisDateString, DiagnosisString)}>{DiagnosisDateString}</span>
                                    </li>
                                    <li className="sub-list" >
                                       <span onClick={(e) => this.handleItemSelected(e, DiagnosisDateString, DiagnosisString)}>{DiagnosisString}</span>
                                    </li>
                                    <li>
                                       <span onClick={(e) => this.handleItemSelected(e, SurgeryDateString, SurgeryString)}>{SurgeryDateString}</span>
                                    </li>
                                    <li className="sub-list" >
                                       <span onClick={(e) => this.handleItemSelected(e, SurgeryDateString, SurgeryString)}>{SurgeryString}</span>
                                    </li>
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, RadiationDateString)}>{RadiationDateString}</span>
                                    </li>
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, TamoxifenDateString)}>{TamoxifenDateString}</span>
                                    </li>
                                    <li>
                                        <span onClick={(e) => this.handleItemSelected(e, RecurrenceDateString)}>{RecurrenceDateString}</span>}
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Paper>
            </div>
        );
    }
}
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

DataSummary.propTypes = {
    StageStatus: PropTypes.string,
    HGAStatus: PropTypes.string,
    HER2Status: PropTypes.string,
    ERStatus: PropTypes.string,
    PRStatus: PropTypes.string,
    onHER2StatusChange: PropTypes.func.isRequired,
    onERStatusChange: PropTypes.func.isRequired,
    onPRStatusChange: PropTypes.func.isRequired,
    DiagnosisStatus: PropTypes.string,
    SurgeryStatus: PropTypes.string,
    RadiationStatus: PropTypes.string,
    TamoxifenStatus: PropTypes.string,
    RecurrenceStatus: PropTypes.string,
    onSummaryItemSelected: PropTypes.func.isRequired
}

export default DataSummary;