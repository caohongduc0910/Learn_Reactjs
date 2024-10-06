import { useState } from "react"

function Lamp() {
    const [active, setActive] = useState(false)
    const handleClick = (e) => {
        setActive(!active)
    }
    return (
        <>
            <h4> {active? "Den dang bat": "Den dang tat"}</h4>
            <button onClick={handleClick}> Click me </button>
        </>
    )
}

export default Lamp