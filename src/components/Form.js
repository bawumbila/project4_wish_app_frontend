import { useState, useEffect } from 'react';
import Input from './Input.js';


function Form(props) {
    const [formState, setFormState] = useState({
      title:'',
      description:''
    });

    useEffect(() => {
      if(props.editFormVisible) {
        const {title, description, id} = props.wish;
        setFormState({
          title,
          description,
          id
        });
      }
    }, [props.editFormVisible, props.wish]);


  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }
  
  
  function handleSubmit(event){
    event.preventDefault();
    if(props.editFormVisible) {
      props.handleUpdate(formState);
      props.toggleForm();
    } else {
    props.handleAdd(formState);
    }
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


       {/* <input type="submit" value="Add a Wish"/> */}
       <input type="submit" value={props.editFormVisible ? 'Update' : 'Add'} />
      </form>
    );
  }

export default Form;
