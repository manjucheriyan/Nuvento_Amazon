import React from 'react';
import { withRouter } from 'react-router';
import {Link} from "react-router-dom"
import './App.css'
import amazon_logo from './images/amazon_logo.png';
import swal from 'sweetalert';
import ProductController from './ProductController';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Navbar extends React.Component {
    state = {
      selectValue: "NA",
      productNames:"",
        productPrice:"",
        productCategory:"",
        productCount:"",
        productsArray:[],
        userObj:this.props.location.userObj
    }

    handleChange = (event) =>  { 
        let productCategory =event.target.value     
        ProductController.getAllProductsByCategory(productCategory)
              .then(response=>{
                  let productsArray=[]
                  productsArray=response.data.productsArray;
                  this.props.parentCallback(productsArray); 
              })
              .catch(error=>{
                  console.log(error)
                  alert("Product Search failed","Failed to retrieve product Details","error");
              })
        this.setState({selectValue:productCategory});
    }



    render() {
        return ( 
        <div>
            <nav className="header">
        {/* logo on the left -> img */}
        <Link to="/">
            <img className="header__logo" src={amazon_logo} alt="amazon logo"/>
        </Link>
        <div className="header__address">
            <Link to='' className="header__link">
                <div onClick="" className="header__option">
                    <span className="header__optionLineOne"><h5>Hello {this.props.name}</h5>Select your Delivery address</span>
                    <span className="header__optionLineTwo"></span>
                </div>
            </Link>
        </div>
        {/* search box */}
        <div className="header__search" id="styled-select" >
        
                        <select id="selectDropdown"
                            value={this.state.selectValue} 
                            onChange={this.handleChange} id="group"
                    
                    > <div></div>
                    
                            <option value="NA">All </option>
                            <option value="AmazonDevices">Amazon Devices</option>
                            <option value="AmazonPantry">AmazonPantry</option>
                            <option value="Baby">Baby</option>
                            <option value="Books">Books</option>
                            <option value="Furniture">Furniture</option>
                            <option value="ClothingandAccessories">Clothing and Accessories</option>
                            <option value="Beauty">Beauty</option>
                            <option value="KitchenAppliances">Kitchen Appliances</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Car&Motorbikes">Car & Motorbikes</option>
                            <option value="GiftCards">Gift cards</option>
                        </select>
                                       
                                    
            
            <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
            
        </div>
        {/* 3 links */}
        <div className="header__nav">
            <Link to='/login' className="header__link">
                <div onClick="" className="header__option">
                    <span className="header__optionLineOne">Hello,Sign in</span>
                    <ArrowDropDownIcon/> 
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to="" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to="" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">cart</span>
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to={{ 
                                                        pathname: "/placeOrder",
                                                        userObj:this.props.userObj,
                                                        productObj: this.props.productObj
                                                        }}            
            className="header__link">
                <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{this.props.productCountInCart}</span>
                </div>
            </Link>
        </div>
        
    </nav>
   
    
   </div>
        );
    }
}

export default withRouter(Navbar) ;




