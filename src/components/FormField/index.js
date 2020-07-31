import React from 'react';

function FormField(props) {
    return (
        <div>
            <label>
                {props.label}
                <input
                    type={props.type}
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}
                />
            </label>
        </div>
    );
}

export default FormField;
