import {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'

function App() {

  const [wishesState, setWishesState] = useState({wishes: []})

  // useEffect(() => {
    async function getWishes () {
      const wishes = await fetch('http://project4-wish.herokuapp.com/wishes')
      .then(res => res.json())
      console.log(wishes)
      setWishesState({wishes})
    }
    

    //Loads wishes when page loads
  useEffect(() => {
    getWishes()
  }, []);

  async function handleAdd(formInputs) {
    const wish = await fetch('http://project4-wish.herokuapp.com/wishes', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(formInputs),
    }).then(res => res.json())
    // load wishes after you add them
    setWishesState(prevState => ({wishes: [wish, ...prevState.wishes]}))
    
  }

  async function handleUpdate(formInputs) {
    try {
      await fetch(`http://project4-wish.herokuapp.com/wishes'/${formInputs.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(formInputs),
      })
    } catch (error) {
      console.log(error);
    }  //updates once wish is entered

    const wishIdx = wishesState.wishes.findIndex(wish => wish.id === formInputs.id);
    const updatedWishesArray = wishesState.wishes;
    updatedWishesArray.splice(wishIdx, 1, formInputs);
    setWishesState({ wishes: updatedWishesArray });
  }

  


  return (
    <div className="App">
      <header className="App-header">
        Wish App
      </header>
      <Form handleAdd={handleAdd}/>
      <h1 className='header'>My Wishes</h1>
      <div className="container">
        {wishesState.wishes.map((x, index) => (
          <article key={index}>
            <div className="lineItem titleCard">
              {x.title}
            </div>
            <div className="lineItem descriptionCard">
              {x.description}
            </div>
          </article>
        ))}
      </div>
    </div>
    
  );
}

export default App;
