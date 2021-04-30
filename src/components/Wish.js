import { useState } from 'react';
import Form from './Form';


function Wish({ wish, handleDelete, handleUpdate }) {

  const [editFormVisible, setEditFormVisible] = useState(false);

  function toggleForm() {
    setEditFormVisible(!editFormVisible);
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
            <h3 className='titleCard'>{wish.title}</h3>
            <div className='descriptionCard'>{wish.description}
            <button onClick={() => handleDelete(wish.id)} className='deleteButton'>X</button>
            <button onClick={toggleForm} className='editButton'>Edit</button>
            </div>
          </div>
      }
    </>
  );
}
export default Wish;
