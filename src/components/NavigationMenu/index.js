function NavigationMenu() {

    const handleClick = (e) => {
        // console.log(e.target)
    }

    const handleFocus = (e) => {
        // console.log(e.target)
        e.target.classList.add('input--active')
    }

    const handleBlur = (e) => {
        // console.log(e.target)
        e.target.classList.remove('input--active')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }

    return (
        <>
            <div className="box">
                <div style={{ marginBottom: "12px" }}> Navigation Menu </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder="Type here..."
                        onFocus={handleFocus}
                        onBlur={handleBlur}>
                    </input>
                    <button
                        onClick={handleClick}>
                        Click me
                    </button>
                </form>
            </div >
        </>
    )
}

export default NavigationMenu