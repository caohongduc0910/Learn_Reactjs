function IfElse() {
    var flag = true
    const arrayMenu = [
        "Trang chu",
        "Gioi thieu",
        "Blog",
        "About us"
    ]
    return (
        <>
            {(flag ? (<>
                Trang ca nha
                Dang xuat
            </>) : (<>
                Dang nhap
                Dang ki
            </>)
            )}

            {flag && <> <div> Xin chao </div> </>}

            <ul>
                {
                    arrayMenu.map((option, idx) => (
                        <li key={idx}> {option} </li>
                    ))
                }
            </ul>
        </>
    )
}

export default IfElse