import Item from "./Item"

const TicketItems = ({tickets, onClickListItem}) => {
    const ticketsDisplay = tickets.map(ticket => (
        <li key={ticket.id}>
            <Item title={ticket.title} priority={ticket.priority} onClickListItem={onClickListItem} id={ticket.id} />
        </li>
    )) 
    return (
        <ul>
            {ticketsDisplay}
        </ul>        
    )
}

export default TicketItems