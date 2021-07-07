import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import TicketItems from "./Components/TicketItems"
import Ticket from "./Components/Ticket"
import { useState, useEffect } from 'react';
import NewTicket from './Components/NewTicket';

function App() {
  const [displayList, setDisplayList] = useState(true)
  const [numTickets, setNumTickets] = useState(0)
  const [ticketId, setTicketId] = useState(-1)
  const [tickets, setTickets] = useState([{
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
    }])


  const onClickListItem = (id) => {
    setTicketId(id)
    setDisplayList(false)
  }

  const onClickGoBack = () => {
    setDisplayList(true)
  }

  const createNewTicket = (ticketTitle, ticketPriority) => {
    let ticketCount = numTickets + 1
    setNumTickets(ticketCount)
    const ticket = {
      title : ticketTitle,
      priority : ticketPriority,
      id: numTickets
    }
    const currentTickets = tickets
    setTickets([...currentTickets, ticket])
  }

  const deleteTicket = (ticketId) => {
    const newTickets = tickets.filter(ticket => {
      return ticket.id != ticketId
    })
    setDisplayList(true)
    setTickets(newTickets)
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
        {displayList ? <TicketItems tickets={tickets} onClickListItem={onClickListItem} /> 
        : <Ticket item={tickets[ticketId]} onClickGoBack={onClickGoBack} deleteTicket={deleteTicket} />}
        <NewTicket createNewTicket={createNewTicket} />
      </div>
    </div>
  );
}

export default App;

/** 
 * TODO
 * 
 * When ticket is deleted, default back to main screen, or display ticket gone screen
 * Make way to delete ticket
 * Add in input checking to ensure valid inputs
 * Make sure ticket prioritys are uniform
 * Make a way to complete a task
 * Make a way to archive a completed task
 * Make a way to edit a ticket
 * Add more details to tickets such as user, more info, date
 * Sort tickets
 * 
 */