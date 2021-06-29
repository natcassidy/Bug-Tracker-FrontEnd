import Item from "./Item"

const TicketItems = ({tickets}) => {
    const ticketsDisplay = tickets.map(ticket => (
        <li key={ticket.id}>
            <Item title={ticket.title} priority={ticket.priority}/>
        </li>
    )) 
    return (
        {ticketsDisplay}
    )
}

export default TicketItems