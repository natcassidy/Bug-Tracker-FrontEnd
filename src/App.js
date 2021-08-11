import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import TicketItems from "./Components/TicketItems"
import Ticket from "./Components/Ticket"
import { useState, useEffect } from 'react';
import NewTicket from './Components/NewTicket';
import axios from 'axios'

function App() {
  const [displayList, setDisplayList] = useState(true)
  const [displayBoard, setDisplayBoard] = useState("active")
  const [archivedTickets, setArchivedTickets] = useState([])
  const [tickets, setTickets] = useState([])
  const [findTicketId, setFindTicketId] = useState(-1)
  const [newTicketSessionCount, setNewTicketSessionCount] = useState(0)

  
  useEffect(() => {
    axios
      .get("http://localhost:8080/tickets").then(response => {
        let ticketsFromServer = response.data
        console.log('data: ', ticketsFromServer)
        setTickets(ticketsFromServer)
    })  
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:8080/tickets").then(response => {
        let ticketsFromServer = response.data
        console.log('data: ', ticketsFromServer)
        setTickets(ticketsFromServer)

        //potentially call a function that checks if tickets should be displayed
    }) 
  }, [newTicketSessionCount])

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
    const ticket = {
      name : ticketTitle,
      description: ticketDescription,
      priority : ticketPriority,
      status: "Active"
    }

    axios.post("http://localhost:8080/tickets", ticket).then(response => {
      console.log("response from ticket creation: ", response.data)
      setNewTicketSessionCount(prev => prev + 1)
    })
  }

  const deleteTicket = (ticketIdToRemove) => {
    /**
       * Sets ticket to empty list so that the deleted ticket doesnt display
       * for a brief moment between the server fetching the new list
       */
    setTickets([])
    setDisplayList(true) 

    axios.delete(`http://localhost:8080/tickets/${ticketIdToRemove}`).then(response => {
       
      console.log("response from ticket removal: ", response.data)
      setNewTicketSessionCount(prev => prev + 1)
      
    })
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
 * New screen for ticket creation
 * Make a way to edit a ticket
 * Make a way to assign ticket
 * Make a way to leave notes on tickets
 * Add more details to tickets such as user, more info, date
 * Add in input checking to ensure valid inputs
 * Sort tickets
 * When connecting DB make sure to adjust the tickID function to pull after data is imported
 * 
 */

/**
 * TODO NEXT
 * 
 * archive ticket from server
 * 
 */


/**
 * Potential Errors
 * 
 * Delete Ticket, when deleting it remove tickets from list, if there is a server error, no tickets display
 */