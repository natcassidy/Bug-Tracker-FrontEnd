import { useState } from "react"

const NewTicket = ({createNewTicket}) => {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState(0)

    const handleTitle = (e) => {
        let newTitle = e.target.value
        setTitle(newTitle)
    }

    const handlePriority = (e) => {
        let newPriority = e.target.value
        setPriority(newPriority)
    }

    const handleNewTicket = () => {
        createNewTicket(title, priority)
        setTitle("")
        setPriority(0)
    }

    return (
        <div>
            <h1>Create a new Ticket</h1>
            <label>
                Enter a ticket name:
                <input type="text" value={title} onChange={(e) => handleTitle(e)}/>
            </label>
            <label>
                Enter a ticket priority:
                <select value={priority} onChange={(e) => handlePriority(e)}>
                    <option value={1}>Low</option>
                    <option value={2}>Neutral</option>
                    <option value={3}>High</option>
                </select>
            </label>
            <button onClick={() => handleNewTicket()}>Submit</button>
        </div>
    )
}

export default NewTicket