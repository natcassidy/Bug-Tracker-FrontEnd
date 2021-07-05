import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import TicketItems from "./Components/TicketItems"
import Ticket from "./Components/Ticket"
import { useState, useEffect } from 'react';

function App() {
  const [displayList, setDisplayList] = useState(true)
  const [ticketId, setTicketId] = useState(-1);


  const arr = [
    {
        title: "1",
        priority: "High",
        id: 0
    },
    {
      title: "2",
      priority: "High",
      id: 1
    },
    {
      title: "3",
      priority: "High",
      id: 2
    }
  ]

  const onClickListItem = (id) => {
    setTicketId(id)
    setDisplayList(false)
  }

  const onClickGoBack = () => {
    setDisplayList(true)
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
        
        {displayList ? <TicketItems tickets={arr} onClickListItem={onClickListItem} /> : <Ticket item={arr[ticketId]} onClickGoBack={onClickGoBack} />}
      </div>
    </div>
  );
}

export default App;

/** 
 * TODO
 * 
 * Make entire box clickable
 * Make way to delete ticket
 * Make way to add ticket
 * 
 */