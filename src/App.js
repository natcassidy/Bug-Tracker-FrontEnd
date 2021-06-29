import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import TicketItems from "./Components/TicketItems"
// import itemsDoc from "./items"
import { useState, useEffect } from 'react';

function App() {
  const [displayList, setDisplayList] = useState(true)

  // useEffect(() => {
  //   setItems(prevItems => [
  //     ...prevItems, itemsDoc
  //   ])
  // })

  const arr = [
    {
        title: "New Board",
        priority: "High",
        id: 1
    },
    {
      title: "New Board",
      priority: "High",
      id: 1
    },
    {
      title: "New Board",
      priority: "High",
      id: 1
    }
  ]

  //display list ticket item
  const onClickListItem = (e) => {

  }

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <TicketItems tickets={arr}/>
      </div>
    </div>
  );
}

export default App;
