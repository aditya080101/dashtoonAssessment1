import { useState } from "react";
import Input from "./Input";
import "../App.css";

export default function Form({setPrompts}) {
  const [formValues, setFormValues] = useState([{
    label: "Scene 1",
    value: "",
  }]);

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleDeleteField = (e, index) => {
    const values = [...formValues];

    if(values.length>1){
        values.splice(index, 1);
        setFormValues(values);
    }
    else{
        window.alert("Atleast one scene is required");
    }
  };

  const addBtnClick = (e,index) => {
    e.preventDefault();
    const values = [...formValues];

    const newobj = {
        label: `Scene ${index+2}`,
        value: ""
    }
    values.splice(index+1,0,newobj);
    setFormValues(values);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const togenerate = formValues.map(obj => obj.value);
    setPrompts(togenerate)
    
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="story">
          {formValues.map((obj, index) => (
            <Input
              key={index}
              objValue={obj}
              onChange={handleChange}
              index={index}
              deleteField={handleDeleteField}
              addField = {addBtnClick}
            />
          ))}
        </div>
        <hr/>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}