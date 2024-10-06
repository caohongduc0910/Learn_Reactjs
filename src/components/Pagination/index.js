import { useEffect, useState } from "react"
import './Pagination.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Pagination() {
  const limit = 10
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = () => {
      fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit * page}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setLoading(false)
          setProducts(data.products)
          setTotal(Math.ceil(data.total / limit))
        })
        .catch(error => {
          console.error('Error:', error);
        })
    }

    setTimeout(() => {
      fetchData()
      // console.log("HELLO")
    }, 300)

    // console.log("hello")

    setLoading(true)
  }, [page])

  function handleClick(index) {
    setPage(index)
  }

  console.log(loading)

  return (
    <>
      {loading ? (
        <>
          <div className="product">
            {
              [...Array(10)].map((_, index) => (
                <div className="product__item" key={index}>
                  <Skeleton className="skeleton__title" />
                  <Skeleton className="skeleton__img" />
                  <Skeleton className="skeleton__price" />
                </div>
              ))
            }
          </div>
        </>
      ) : (
        <>
          <div className="product">
            {
              products.map((product) => (
                <div className="product__item" key={product.id}>
                  <div className="product__title"> {product.title} </div>
                  <div className="product__img">
                    <img src={product.thumbnail} alt={product.title}></img>
                  </div>
                  <div className="product__price"> ${product.price} </div>
                </div>
              ))
            }
          </div>

          <ul className="pagination">
            {
              [...Array(total)].map((_, index) => (
                <li key={index} className="pagination__item" onClick={() => { handleClick(index) }}> {index + 1} </li>
              ))
            }
          </ul></>
      )}
    </>
  )
}

export default Pagination