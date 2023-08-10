import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const {pid} = useParams();
  //console.log(pid);
  const [product, setProduct] = useState(null)

   const fetchProductDetails = async () => {
    // write your data fetching logic here
    try {
     let response = await fetch(`http://localhost:3500/products/${pid}`);
     if(!response.ok) { throw new Error('There are some error while fetching the data!')}
     let data = await response.json();
     setProduct(data);
    } catch(err) {
      console.log(err.message);
    }
   }
   useEffect(() => {
    fetchProductDetails();

  }, [])

  //const {author, name, price, category, img, type, description} = product
  console.log(product)
  return !product ? <p>Loading....</p> : (

    <section className="section-product-details">

    <div className="card-header-details">
      <h2>Product Name: {product?.name}</h2>
      <p className="price">Price: <span><strong>${product?.price.toFixed(2)}</strong></span></p>
    </div>
    <div className="card-body-details">
      <img src={product?.img} width="300px" height="auto" />
      <p className="card-description-details"><strong>Description: </strong>
       {(product?.description.length > 300)? product?.description.substring(0, 300) + '...' : product?.description}
      </p>
    </div>
    <div className="card-footer-details">
      <p className="card-category-details">
      Category: <strong>{product?.category}</strong>
      </p>
      <p className="card-author-details">
      <strong>Author: </strong>
      <span className="author-name-details">{product?.author}</span>
      </p>
      <p className="card-type-details">
      Type: <strong>{product?.type}</strong>
      </p>
    </div>
    <button><Link to="/">Go Back To Home</Link></button>
    </section>
  )
}

export default ProductDetails