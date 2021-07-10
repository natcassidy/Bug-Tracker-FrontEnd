import '../Styles/Item.css';

const Item = ({title, priority, onClickListItem, onClickListItemArchive, id, status}) => {
    const activeCode = (
        <div className="item" onClick={() => onClickListItem(id)}>
            <p>{title}</p>
            <p>{priority}</p>
            <button onClick={() => onClickListItem(id)}>Click Me</button>
        </div>
    )

    const archivedCode = (
        <div className="item" onClick={() => onClickListItemArchive(id)}>
            <p>{title}</p>
            <p>{priority}</p>
            <button onClick={() => onClickListItemArchive(id)}>Click Me</button>
        </div>
    )
    
    return (
        <>
            {status === "Active" ? activeCode : archivedCode}
        </>
    )
}

export default Item