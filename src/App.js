import {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'

function App() {

  const [wishesState, setWishesState] = useState({wishes: []})

  useEffect(() => {
    async function getWishes () {
      const wishes = await fetch('http://localhost:3000/wishes')
      .then(res => res.json())
      setWishesState({wishes})
    }
  })

  async function handleAdd(formInputs) {
    const wish = await fetch('http://localhost:3000/wishes', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(formInputs)
    }).then(res => res.json())

    // setWishesState(prevState => ({wishes: [wish, ...prevState]}))
  }


  return (
    <div className="App">
      <header className="App-header">
        Wish App
      </header>
      <Form handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
