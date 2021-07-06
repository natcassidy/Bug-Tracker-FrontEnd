import '../Styles/Item.css';

const Item = ({title, priority, onClickListItem, id, onClickGoBack}) => {
    return (
        <div className="item" onClick={() => onClickListItem(id)}>
            <p>{title}</p>
            <p>{priority}</p>
            <button onClick={() => onClickListItem(id)}>Click Me</button>
        </div>
    )
}

export default Item