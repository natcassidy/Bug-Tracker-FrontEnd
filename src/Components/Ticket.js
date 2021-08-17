import { useState } from 'react';

const Ticket = ({item, onClickGoBack, deleteTicket, archiveTicket, reactivateTicket, updateTicket}) => {
    const [name, setName] = useState(item.name)
    const [description, setDescription] = useState(item.description)

    const handleNameChange = (e) => {
        let newName = String(e.target.value)
        setName(newName)
    }

    const handleDescriptionChange = (e) => {
        let newDescription = String(e.target.value)
        setDescription(newDescription)
    }

    const active = (
        <>
            <h1>This is ticket # {item.id}</h1>
            <h4>Title:</h4>
            <input value={name} onChange={(e) => handleNameChange(e)}></input>
            <h4>Description:</h4>
            <input value={description} onChange={(e) => handleDescriptionChange(e)}></input>
            <h1>Current Status {item.status}</h1>
            <button onClick={() => updateTicket(item.id, name, description)}>Save</button>
            <button onClick={() => deleteTicket(item.id)}>Delete</button>
            <button onClick={() => archiveTicket(item.id)}>Archive</button>
            <button onClick={() => onClickGoBack()}>Back</button>
        </>
    )

    const archived = (
        <>
            <h1>This is ticket # {item.id}</h1>
            <h4>Title:</h4>
            <input value={name} onChange={(e) => handleNameChange(e)}></input>
            <h4>Description:</h4>
            <input value={description} onChange={(e) => handleDescriptionChange(e)}></input>
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