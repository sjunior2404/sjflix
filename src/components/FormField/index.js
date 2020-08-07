import React from "react";

function FormField( {label, type, name, values, onChange} ){
    return(
        <div>
            <label>
                {label}:
                <input
                    type={type}
                    value = {values} 
                    name = {name} 
                    onChange = {onChange}
                />
            </label>
        </div>
    )
}

export default FormField;