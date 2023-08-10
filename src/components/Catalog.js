import CardLineItem from "./Card-line-item";
import { Link } from "react-router-dom";
import { useContext } from "react";
import themeContext from "../context/themeContext";
const Catalog = ({loading, fetchError, productsList}) => {
  const theme = useContext(themeContext);
 return (
    <>
    <div className='loading'>{loading && <p>Loading...</p>}</div>
    <div className='error'>{fetchError && <p>{fetchError}</p>}</div>
    {!loading && !fetchError && <section className='cards'>
    <div className='cards-center'>
      {
      productsList.map((productItem) => <Link className='card-link-wrapper' key={productItem.id} to={`/product/${productItem.id}`}><CardLineItem  {...productItem} /></Link>)
      }
    </div>
  </section>
  }
  </>
  )
}

export default Catalog;