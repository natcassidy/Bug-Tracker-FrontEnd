import { useState } from "react"

const NewTicket = ({createNewTicket}) => {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("Low")
    const [description, setDescription] = useState("")

    const handleTitle = (e) => {
        let newTitle = String(e.target.value)
        setTitle(newTitle)
    }

    const handleDescription = (e) => {
        let newDescription = e.target.value
        setDescription(newDescription)
    }

    const handlePriority = (e) => {
        let newPriority = e.target.value
        setPriority(newPriority)
    }

    const handleNewTicket = () => {
        createNewTicket(title, priority, description)
        setTitle("")
        setPriority("Low")
        setDescription("")
    }

    return (
        <div>
            <h1>Create a new Ticket</h1>
            <label>
                Enter a ticket name:
                <br/>
                <input type="text" value={title} onChange={(e) => handleTitle(e)}/>
            </label>
            <br/>
            <br/>
            <label>
                Enter a description:
                <br/>
                <textarea value={description} onChange={(e) => handleDescription(e)} rows={4}/>
            </label>
            <br/>
            <br/>
            <label>
                Enter a ticket priority:
                <br/>
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