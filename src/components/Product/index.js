import { useState } from "react"

function Product() {
    const unitPrice = 100000
    const [quantity, setQuantity] = useState(1)

    const handlechange = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <>
            <table border="1" cellspacing="0" cellpadding="8">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sản phẩm A</td>
                        <td>
                            <input type="number" 
                            min={1} 
                            defaultValue={1}
                            onChange={handlechange}></input>
                        </td>
                        <td>{unitPrice} VND</td>
                        <td>{unitPrice * quantity} VND</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Product