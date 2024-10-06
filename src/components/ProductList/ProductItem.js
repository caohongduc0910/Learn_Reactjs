const ProductItem = (props) => {
    const { item } = props
    console.log(props.item)
    return (
        <>
            <h3> {item.name} </h3>
            <img src={item.img} alt={item.name}></img>
            <div> {item.price} </div>
        </>
    )
}

export default ProductItem