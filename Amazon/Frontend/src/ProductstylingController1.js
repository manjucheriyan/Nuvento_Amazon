
import React from "react";
import {Link} from "react-router-dom";


function ProductstylingController1({ userObj, productObj}) {
 
  return (
    <div className="product">
      <div className="product__info">
      <p><Link to={{ 
                    pathname: "/product",
                    userObj:userObj,
                    productObj: productObj
                    }}>{productObj.productName}</Link>
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{productObj.productPrice}</strong>
        </p>.............
        <p className="category">
          
          <p>{productObj.productCategory}</p>
        </p>
        
        
      </div>
     

    </div>
  );
}

export default ProductstylingController1;