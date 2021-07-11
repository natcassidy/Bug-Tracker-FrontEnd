

const Ticket = ({item, onClickGoBack, deleteTicket, archiveTicket, reactivateTicket}) => {

    const active = (
        <>
            <h1>This is ticket # {item.id + 1}</h1>
            <h4>Description:</h4>
            {item.description}
            <h1>Current Status {item.status}</h1>
            <button onClick={() => deleteTicket(item.id)}>Delete</button>
            <button onClick={() => archiveTicket(item.id)}>Archive</button>
            <button onClick={() => onClickGoBack()}>Back</button>
        </>
    )

    const archived = (
        <>
            <h1>This is ticket # {item.id + 1}</h1>
            <h4>Description:</h4>
            {item.description}
            <h1>Current Status {item.status}</h1>
            <button onClick={() => deleteTicket(item.id)}>Delete</button>
            <button onClick={() => reactivateTicket(item.id)}>Reactivate</button>
            <button onClick={() => onClickGoBack()}>Back</button>
        </>
    )
    
    return (
        <>
            {item.status === "Active" ? active : archived}
        </>     
    )
}

export default Ticket