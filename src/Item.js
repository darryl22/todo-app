import React from "react";

function Item(props){

    const [checked, setChecked] = React.useState(false)
    let filterstyle = {
        display: "flex"
    }

    if (props.filt === 2 && !checked){
        filterstyle.display = "none"
    }else if (props.filt === 3 && checked){
        filterstyle.display = "none"
    }

    function handleChange(event) {
        setChecked(event.target.checked)
    }

    return(
        <div className="item-container" style={filterstyle}>
            <p>{props.item}</p>
            <form>
                <input type="checkbox" name="checked" checked={checked} className="ischecked" onChange={handleChange}/>
            </form>
        </div>
    )
}
export default Item