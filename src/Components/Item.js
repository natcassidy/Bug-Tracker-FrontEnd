import '../Styles/Item.css';

const Item = ({title, priority, onClickListItem, id}) => {
    return (
        <div className="item">
            <p>{title}</p>
            <p>{priority}</p>
            <button onClick={() => onClickListItem(id)}>Click Me</button>
        </div>
    )
}

export default Item