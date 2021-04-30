import Wishes from './Wishes.js';

function Main({ wishes, handleDelete, handleUpdate }) {
    return (
      <main>
        <div>
        <Wishes 
          wishes={wishes} 
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
        </div>
      </main>
    );
}

export default Main;
