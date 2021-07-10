import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import TicketItems from "./Components/TicketItems"
import Ticket from "./Components/Ticket"
import { useState, useEffect } from 'react';
import NewTicket from './Components/NewTicket';

function App() {
  const [displayList, setDisplayList] = useState(true)
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
  const [ticketId, setTicketId] = useState(tickets.length)
  const [findTicketId, setFindTicketId] = useState(-1)

  //This needs to be used when using the db
  useEffect(() => {
    // setTicketId(tickets.length)
    // console.log('ticket id created: ' + ticketId)
    // console.log('ticket length' + tickets.length)
  }, [])

  const onClickListItem = (id) => {
    let index = tickets.findIndex(item => item.id === id)
    console.log('index' + index)
    setFindTicketId(index)
    setDisplayList(false)
  }

  const onClickGoBack = () => {
    setDisplayList(true)
  }

  const createNewTicket = (ticketTitle, ticketPriority) => {
    console.log('create new ticket id: ' + ticketId)
    const ticket = {
      title : ticketTitle,
      priority : ticketPriority,
      id: ticketId
    }
    let newId = ticketId + 1
    setTicketId(newId)
    console.log('ticket id new: ' + ticketId)
    const currentTickets = tickets
    setTickets([...currentTickets, ticket])
  }

  const deleteTicket = (ticketIdToRemove) => {
    const newTickets = tickets.filter(ticket => {
      return ticket.id !== ticketIdToRemove
    })
    setDisplayList(true)
    setTickets(newTickets)
    console.log('tickets: ' + tickets)
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
        : <Ticket item={tickets[findTicketId]} onClickGoBack={onClickGoBack} 
        deleteTicket={deleteTicket} />}
        <NewTicket createNewTicket={createNewTicket} />
      </div>
    </div>
  );
}

export default App;

/** 
 * TODO
 * 
 * Add in input checking to ensure valid inputs
 * Make sure ticket prioritys are uniform
 * Make a way to complete a task
 * Make a way to archive a completed task
 * Make a way to edit a ticket
 * Add more details to tickets such as user, more info, date
 * Sort tickets
 * When connecting DB make sure to adjust the tickID function to pull after data is imported
 * 
 */
