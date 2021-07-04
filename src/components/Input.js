import React from 'react';

const Input = ({type},ref) => {
    return (
        <div>
            <input type={type} ref={ref} />
        </div>
    );
};



export default React.forwardRef(Input);