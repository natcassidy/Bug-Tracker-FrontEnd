import { useState } from "react"

const NewTicket = ({createNewTicket}) => {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("Low")

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
        setPriority("Low")
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
                    <option value={"Low"}>Low</option>
                    <option value={"Neutral"}>Neutral</option>
                    <option value={"High"}>High</option>
                </select>
            </label>
            <button onClick={() => handleNewTicket()}>Submit</button>
        </div>
    )
}

export default NewTicket