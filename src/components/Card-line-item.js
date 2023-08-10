import { Link } from "react-router-dom";
import { useContext } from "react";
import themeContext from "../context/themeContext";
const CardLineItem = ({name, category, author, description, price, id}) => {
  const theme = useContext(themeContext);
 return (

  <article className={`card bg-${theme}`}>
    <div className="card-header">
      <h2>{name}</h2>
      <p className="price">Price: <span><strong>${price.toFixed(2)}</strong></span></p>
    </div>
    <div className="card-body">
      <p className="card-description">
       {(description.length > 300)? description.substring(0, 300) + '...' : description}
      </p>
    </div>
    <div className="card-footer">
      <p className="card-category">
      Category: <strong>{category}</strong>
      </p>
      <p className="card-author">
        By <span className="author-name">{author}</span>
      </p>
    </div>
  </article>


 )
}

export default CardLineItem;