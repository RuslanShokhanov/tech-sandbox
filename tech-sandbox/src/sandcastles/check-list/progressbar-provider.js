import React, { useEffect } from 'react';

const ProgressBarProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = React.useState(valueStart);
    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};

export default ProgressBarProvider;
