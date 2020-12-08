import React from 'react';
import { Process } from '../core';

const defaultProps: Process = {
    title: 'Default Title',
    percent: 0
}

function ProcessBar(props: Process) {
    const styleName = { width: props.percent + '%' }

    return (
        <div className="process-bar items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 ml-5 mr-5 mt-5">
            <div className="flex">
                <h3 className="font-mono font-bold text-base">{props.title}</h3>
            </div>
            <div className="shadow w-full bg-gray-200 mt-2 rounded-md flex">
                <div className="bg-green-500 text-xs leading-none py-1 text-center text-white rounded-md" style={styleName}>{props.percent}%</div>
            </div>
        </div>
    );
}

// Set default props
ProcessBar.defaultProps = defaultProps;

export default ProcessBar;