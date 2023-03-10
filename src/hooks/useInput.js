import { useState } from 'react';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        setValue(e);
    };

    return [value, onChange, setValue];
};
export default useInput;
