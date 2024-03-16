import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = (props) => {
    return (
        <div style={{ padding: '10px' }}> {/* Adding padding */}
            <ProgressBar animated now={props.percent} label={props.skill} />
        </div>
    );
}
export default Progress