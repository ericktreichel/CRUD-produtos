import React from "react";

const Form = (props) => {
    return (
        <div>
            {props.Items.map((item, index) => (
                <input
                    name={item.name}
                    placeholder={item.description}
                    data-type={item.dtype}
                    data-group={item.group}
                    onChange={(e) => props.onChangeText(e)}
                    key={index}
                />
            ))}
        </div>
    );
};
export default Form;
