import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import AmazonCarousel from './AmazonCarousel';
import './App.css';
import HomeProdictStylingontroller from './HomeProdictStylingController';

class Home extends React.Component { 

  state = {
    selectValue: "NA",
    productNames:"",
    productPrice:"",
    productCategory:"",
    productCount:"",
    productsArray:[],
    userObj:this.props.location.userObj,
    selectedProductCategory: "" 
}

callbackFunction = (childData) => {
this.setState({productsArray: childData})
}
    
    render() {
        return ( 
        <div>            
            <Navbar name={""} productCountInCart ={""}  parentCallback = {this.callbackFunction}/>
            <AmazonCarousel></AmazonCarousel>

                <div className="home__row"> 
        {
            this.state.productsArray.map(product=>
                <div>
                    <HomeProdictStylingontroller productObj={product}/>                
                </div>                
            )
        }         
    </div>          
          
        </div>
        );
    }
}

export default withRouter(Home) ;




