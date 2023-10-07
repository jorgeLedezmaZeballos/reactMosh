

function ListGroup (){
    const items = ['New York','San Francisco','Nevada','Texas','Virginia'];
    const clasLi = "list-group-item";
    const color = {color:'salmon'}

    return (
        <>
            <h2>Lista de Items to <b style = {color}>Analize</b></h2>
            <ul className="list-group">
                {items.map((item) => (
                    <li className={clasLi}>{item}</li>
                ))}
            </ul>
        </>
    )
}
export default ListGroup;