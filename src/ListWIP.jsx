import Proptypes from 'prop-types'

function List(props){

    props.itemsList.sort((a,b)=> a.name.localeCompare(b.name))
    const ListFruits = props.itemsList.map(item => <li key={item.id}>{item.name}: &nbsp;{item.calories}
        </li>)
    

    return(
        <>
        <h1>{props.catagory}</h1>
        <ul>{ListFruits}</ul>
        </>
    )
}




export default List


