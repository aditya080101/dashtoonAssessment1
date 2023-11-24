import React from "react";
export default function Input({ objValue, onChange, index, deleteField, addField }) {
  const { label, type, value } = objValue;
  return (
    <div className="scene">
      
      <p>Scene: {index+1}</p>
      <div className="prompt">
        <input
          type={type || "text"}
          placeholder= "Scene Prompt"
          id={label}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
        />
        <button class="delete-prompt" onClick={(e) => deleteField(e, index)}><i className="material-icons">delete</i></button>
        <button class="new-prompt" onClick={(e) => addField(e, index)}><i className="material-icons">add</i></button>
      </div>
    </div>
  );
}