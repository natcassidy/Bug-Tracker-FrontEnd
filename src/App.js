import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import TicketItems from "./Components/TicketItems"
// import itemsDoc from "./items"
import { useState, useEffect } from 'react';

function App() {
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   setItems(prevItems => [
  //     ...prevItems, itemsDoc
  //   ])
  // })

  const arr = [
    {
        title: "New Board",
        priority: "Low",
        id: 1
    },
    {
        title: "New Board",
        priority: "Low",
        id: 2
    },
    {
        title: "New Board",
        priority: "Low",
        id: 3
    }
  ]

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="list">
        <TicketItems tickets={arr}/>
      </div>
    </div>
  );
}

export default App;
