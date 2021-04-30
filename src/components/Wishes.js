import Wish from './Wish.js';

function Wishes({ wishes, handleDelete, handleUpdate }) {
    return (
      <div>
        {wishes.map(wish => 
          <Wish 
            key={wish.id} 
            wish={wish}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    );
}

export default Wishes;
