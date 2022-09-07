import React from "react";
import Item from "./Item";

function Todo() {

    const [item, setItem] = React.useState("")
    const [itemList, setItemList] = React.useState([])
    const [filter, setFilter] = React.useState(1)

    function handleChange(event) {
        setItem(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (item !== "") {
            setItemList(prevItem => {
            return [...prevItem, item]
        })
        setItem("")
        }
    }

    let elements = itemList.map((t, i) => {
        return <Item 
            item={itemList[i]}
            filt={filter}
        />
    })

    return(
        <div>
            <button className="button-all" onClick={() => setFilter(1)}>All</button>
            <button className="button-complete" onClick={() => setFilter(2)}>Complete</button>
            <button className="button-incomplete" onClick={() => setFilter(3)}>Incomplete</button>
            <div className="main-item-container">
                <form onSubmit={handleSubmit} className="todo-form">
                    <button>Add item</button>
                    <input type="text" name="item" value={item} onChange={handleChange} />
                </form>
                {elements}
            </div>
        </div>
    )
}

export default Todo