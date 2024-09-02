import Foter from "./components/Foter";
import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from 'react'
function App() {
  const [items,setItems] = useState([]);
  const handleAddItems =(item) =>{
    setItems((items)=>[...items,item])
  }
  const handleDeleteItem =(id)=>{
    setItems(items=>items.filter(item=>item.id!==id))
  }
  const handleDoneItem =(id)=>{
    setItems(items=>items.map(item=>item.id===id ? {...item,packed:!item.packed} : item ))
  }
  return (
    <div>
      <Header />
      <Main items={items} handleAddItems={handleAddItems} onDeleteItem={handleDeleteItem}  handleDoneItem={handleDoneItem}/>
      <Foter Items={items} />
    </div>
  );
}

export default App;
