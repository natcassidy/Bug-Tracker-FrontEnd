const Item = ({title, priority}) => {
    return (
        <div className="item">
            <p>{title}</p>
            <p>{priority}</p>
        </div>
    )
}

export default Item