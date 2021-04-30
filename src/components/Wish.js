import {useState} from 'react'
import Form from './Form'

function Wish({ wish, handleDelete, handleUpdate }) {

  const [editFormVisible, setEditFormVisible] = useState(false)

  function toggleForm() {
    setEditFormVisible(!editFormVisible)
  }

    return (
      <>
        {
          editFormVisible ? 
          <Form 
            editFormVisible={editFormVisible}
            toggleForm={toggleForm}
            handleUpdate={handleUpdate}  
            wish={wish}
          />
          :
      <div className="wish">
         <h3>{wish.title}</h3>
         <p>{wish.description}</p>
         <button onClick={() => handleDelete(wish.id)}>X</button>
         <button onClick={toggleForm}>Edit</button>
       </div>
        }
      </>
    );
}

export default Wish;