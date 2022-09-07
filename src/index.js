import React from "react"
import ReactDOM from "react-dom"
import Todo from "./Todo"
import "./styles.css"

function Page() {
    return(
        <div>
            <nav>
                <h1>Todo app</h1>
            </nav>
            <Todo/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))