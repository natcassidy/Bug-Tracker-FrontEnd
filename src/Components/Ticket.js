

const Ticket = ({item, onClickGoBack, deleteTicket}) => {
    
    return (
        <>
            <h1>This is ticket # {item.id + 1}</h1>
            <button onClick={() => deleteTicket(item.id)}>Delete</button>
            <button onClick={() => onClickGoBack()}>Back</button>
        </>     
    )
}

export default Ticket