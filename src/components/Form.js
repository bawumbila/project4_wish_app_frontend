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
    // props.handleAdd(formState);
    handleAdd(formState);
  }
  // Moved handle add function from app.js
  async function handleAdd(formInputs) {
    const wish = await fetch('http://project4-wish.herokuapp.com/wishes', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(formInputs)
    }).then(res => res.json())
    // load wishes after you add them
    props.getWishes()
    // Sets state to empty to clear rthe field
    setFormState(prevState => ({
      title:'',
      description:''
    }));
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
       <input type="submit" value="Add a Wish" className='submitButton'/>
      </form>
    );
  }

export default Form;
