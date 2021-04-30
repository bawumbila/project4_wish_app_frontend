import Wishes from './Wishes.js';

function Main({ wishes, handleDelete, handleUpdate }) {
    return (
      <main>
        <Wishes 
          wishes={wishes} 
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </main>
    );
}

export default Main;
