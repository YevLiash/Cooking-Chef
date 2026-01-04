import {useEffect, useState} from 'react'
import Logo from './Components/Logo.jsx'
import GroceryForm from './Components/GroceryForm.jsx'
import GroceryList from './Components/GroceryList.jsx'
import ModalExist from './Components/ModalExist.jsx'
import GroceryActions from './Components/GroceryActions.jsx'

function App() {
  const [groceries, setGroceries] = useState(() => JSON.parse(localStorage.getItem('groceries')) || [])
  const [showModalExist, setShowModalExist] = useState(false)


  useEffect(() => {
    localStorage.setItem('groceries', JSON.stringify(groceries))
  }, [groceries])

  function addGrocery(value) {
    if (groceries.find(item => item.toLowerCase() === value.toLowerCase())) {
      setShowModalExist(true)
      return
    }

    setGroceries([...groceries, value])
  }

  function deleteGrocery(id) {
    setGroceries(groceries.filter((_, index) => {
      return id !== index
    }))
  }

  function clearAll() {
    setGroceries([])
  }

  return (
    <div className="bg-[#E9EEE7] h-screen">

      <div className="flex flex-col justify-center  max-w-[80%] mx-auto">
        <div className="mx-auto">
          <Logo />
        </div>
        <GroceryForm
          onAdd={addGrocery}
        />
        {groceries.length > 0 && <GroceryList
          groceries={groceries}
          onDelete={deleteGrocery}
        />}
        {showModalExist &&
          <ModalExist onClose={() => setShowModalExist(false)} />}
        {groceries.length >= 3 && <GroceryActions
          onClear={clearAll}
        />}
      </div>
    </div>
  )
}

export default App
