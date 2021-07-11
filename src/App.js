import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import TicketItems from "./Components/TicketItems"
import Ticket from "./Components/Ticket"
import { useState, useEffect } from 'react';
import NewTicket from './Components/NewTicket';

function App() {
  const [displayList, setDisplayList] = useState(true)
  const [displayBoard, setDisplayBoard] = useState("active")
  const [archivedTickets, setArchivedTickets] = useState([{
    title: "This is archived",
    priority: "High",
    id: 0,
    description: "This is where the description goes.",
    status: "Closed"
  }])
  const [tickets, setTickets] = useState([{
      title: "This is active",
      priority: "High",
      id: 0,
      description: "This is where the description goes.",
      status: "Active"
    }
  ])
  const [ticketId, setTicketId] = useState(tickets.length)
  const [findTicketId, setFindTicketId] = useState(-1)

  //This needs to be used when using the db
  useEffect(() => {
    // setTicketId(tickets.length)
    // console.log('ticket id created: ' + ticketId)
    // console.log('ticket length' + tickets.length)
  }, [])

  const onClickListItem = (id) => {
    console.log('inside onClickListItem: id received' + id)
    console.log('tickets: ' + tickets.toString)
    let index = tickets.findIndex(item => item.id === id)
    console.log('index' + index)
    setFindTicketId(index)
    setDisplayList(false)
  }

  const onClickListItemArchive = (id) => {
    console.log('inside onClickListItemArchive: id received' + id)
    console.log('tickets: ' + tickets.toString)
    let index = archivedTickets.findIndex(item => item.id === id)
    console.log('index' + index)
    setFindTicketId(index)
    setDisplayList(false)
  }

  const onClickGoBack = () => {
    setDisplayList(true)
  }

  const createNewTicket = (ticketTitle, ticketPriority, ticketDescription) => {
    console.log('create new ticket id: ' + ticketId)
    const ticket = {
      title : ticketTitle,
      priority : ticketPriority,
      id: ticketId,
      description: ticketDescription,
      status: "Active"
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

  const archiveTicket = (id) => {
    let ticketToArchive = tickets.find(ticket => ticket.id === id)
    ticketToArchive.status = "Closed"
    console.log('ticket to archive:' + ticketToArchive)
    const currentArchived = archivedTickets
    setArchivedTickets([...currentArchived, ticketToArchive])

    const updatedActiveTickets = tickets.filter(ticket => {
      return ticket.id !== id
    })
    setDisplayList(true)
    setTickets(updatedActiveTickets)
  }

  const reactivateTicket = (id) => {
    let ticketToReactivate = archivedTickets.find(ticket => ticket.id === id)
    ticketToReactivate.status = "Active"
    console.log('ticket to open:' + ticketToReactivate)
    const currentActive = tickets
    setTickets([...currentActive, ticketToReactivate])

    const updatedArchivedTickets = archivedTickets.filter(ticket => {
      return ticket.id !== id
    })
    setDisplayList(true)
    setArchivedTickets(updatedArchivedTickets)
  }

  const handleBoardChange = (board) => {
    if(board === "active") {
      setDisplayBoard("active")
    } else {
      setDisplayBoard("archived")
    }
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
        {displayBoard === "active" ? <button onClick={() => handleBoardChange("archived")}>View archived tickets</button>
        : <button onClick={() => handleBoardChange("active")}>View Open Tickets</button>}
        
        {displayList ? (displayBoard === "active" 
        ? <TicketItems tickets={tickets} onClickListItem={onClickListItem} onClickListItemArchive={onClickListItemArchive}/>
        : <TicketItems tickets={archivedTickets} onClickListItem={onClickListItem} onClickListItemArchive={onClickListItemArchive}/>)
        : (displayBoard === "active" 
        ? <Ticket item={tickets[findTicketId]} onClickGoBack={onClickGoBack} 
        deleteTicket={deleteTicket} archiveTicket={archiveTicket} reactivateTicket={reactivateTicket} />
        : <Ticket item={archivedTickets[findTicketId]} onClickGoBack={onClickGoBack} 
        deleteTicket={deleteTicket} archiveTicket={archiveTicket} reactivateTicket={reactivateTicket} />)}

        <NewTicket createNewTicket={createNewTicket} />
      </div>
    </div>
  );
}

export default App;

/** 
 * TODO
 * 
 * 
 * Add in input checking to ensure valid inputs
 * Make a way to complete a task
 * Make a way to archive a completed task
 * Make a way to edit a ticket
 * Add more details to tickets such as user, more info, date
 * Sort tickets
 * When connecting DB make sure to adjust the tickID function to pull after data is imported
 * 
 */

/**
 * 
 * TODO Archived Tickets Board
 * Add way to select board you are looking at
 * Add a button on the ticket screen to move to archive when on main board
 * Add a button on ticket screen to move back to main ticket board
 * Add Status to each ticket
 * 
 * Breakdown of Boards:
 * Main board has state for main tickets
 * Make function that selects the ticket, removes from main board and adds to 
 * array containing archived tickets
 * 
 * my search functionality for archived tickets needs to be updated for both boards
 * add to ticket screen the new function for dsiplaying tciket
 */
