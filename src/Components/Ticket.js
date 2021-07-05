

const Ticket = ({item, onClickGoBack}) => {
    
    return (
        <>
            <h1>This is ticket # {item.id + 1}</h1>
            <button onClick={() => onClickGoBack()}>Back</button>
        </>     
    )
}

export default Ticket