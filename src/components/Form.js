import { useState } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      title:'',
      description:''
    });

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    props.handleAdd(formState);
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="title"
          placeholder="Wish Title"
          type="text"
          value={formState.title}
          id="title"
         />
        <Input
          handleChange={handleChange}
          name="description"
          placeholder="Wish Description"
          type="text"
          value={formState.description}
          id="description"
       />
       <input type="submit" value="Add a Wish"/>
      </form>
    );
  }

export default Form;
