import Item from "./Item"

const TicketItems = ({tickets, onClickListItem, onClickListItemArchive}) => {
    const ticketsDisplay = tickets.map(ticket => (
        <li key={ticket.id}>
            <Item title={ticket.title} priority={ticket.priority} 
            onClickListItem={onClickListItem} onClickListItemArchive={onClickListItemArchive}
            id={ticket.id} status={ticket.status}/>
        </li>
    )) 
    return (
        <ul>
            {ticketsDisplay}
        </ul>        
    )
}

export default TicketItems