import React from "react";
import { useFormContext } from "react-hook-form";


function InputField({ label, name, type, value, onChange,register,error }) {
    
  return (
    <div className="form-outline mb-4">
       <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        value={value}
        {...register(name)}
        onChange={onChange}
      />
     
      {error && <div className="invalid-feedback">{error}</div>}

    </div>
  );
}

export default InputField;
