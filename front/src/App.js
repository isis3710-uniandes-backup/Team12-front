
import React, { Component } from 'react';

import logo from './logo.svg';
//import './App.css';
class App extends Component {
  render() {
    var datos = {
      "name":"Monda",
      "available":true,
      "description":"Lorem ipsumijwofijwjfowijef",
      "price":2300
    }
    //TODO ESTO ES DEL TEMPLATE. SOLO CORRESPONDE A LA PARTE SUPERIOR y navbar
    return (
      <div>
        
        {/* header */}
        <div className="header">
          <div className="w3ls-header">{/*header-one*/} 
            <div className="w3ls-header-left">
              <p><a href="#">UPTO $50 OFF ON LAPTOPS | USE COUPON CODE LAPPY </a></p>
            </div>
            <div className="w3ls-header-right">
              <ul>
                <li className="dropdown head-dpdn">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true" /> My Account<span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="login.html">Login </a></li> 
                    <li><a href="signup.html">Sign Up</a></li> 
                    <li><a href="login.html">My Orders</a></li>  
                    <li><a href="login.html">Wallet</a></li> 
                  </ul> 
                </li> 
                <li className="dropdown head-dpdn">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-percent" aria-hidden="true" /> Today's Deals<span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="offers.html">Cash Back Offers</a></li> 
                    <li><a href="offers.html">Product Discounts</a></li>
                    <li><a href="offers.html">Special Offers</a></li> 
                  </ul> 
                </li> 
                <li className="dropdown head-dpdn">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-gift" aria-hidden="true" /> Gift Cards<span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="offers.html">Product Gift card</a></li> 
                    <li><a href="offers.html">Occasions Register</a></li>
                    <li><a href="offers.html">View Balance</a></li> 
                  </ul> 
                </li> 
                <li className="dropdown head-dpdn">
                  <a href="contact.html" className="dropdown-toggle"><i className="fa fa-map-marker" aria-hidden="true" /> Store Finder</a>
                </li> 
                <li className="dropdown head-dpdn">
                  <a href="card.html" className="dropdown-toggle"><i className="fa fa-credit-card-alt" aria-hidden="true" /> Credit Card</a>
                </li> 
                <li className="dropdown head-dpdn">
                  <a href="help.html" className="dropdown-toggle"><i className="fa fa-question-circle" aria-hidden="true" /> Help</a>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div> 
          </div>
          <div className="header-two">{/* header-two */}
            <div className="container">
              <div className="header-logo">
                <h1><a href="index.html"><span>Te</span>lo<i>Presto</i></a></h1>
                <h6>Intercambia todo lo que necesites</h6> 
              </div>	
              <div className="header-search">
                <form action="#" method="post">
                  <input type="search" name="Search" placeholder="Search for a Product..." required />
                  <button type="submit" className="btn btn-default" aria-label="Left Align">
                    <i className="fa fa-search" aria-hidden="true"> </i>
                  </button>
                </form>
              </div>
              <div className="header-cart"> 
                <div className="my-account">
                  <a href="contact.html"><i className="fa fa-map-marker" aria-hidden="true" /> CONTACT US</a>						
                </div>
                <div className="cart"> 
                  <form action="#" method="post" className="last"> 
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="display" defaultValue={1} />
                    <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
                  </form>  
                </div>
                <div className="clearfix"> </div> 
              </div> 
              <div className="clearfix"> </div>
            </div>		
          </div>{/* //header-two */}
          <div className="header-three">{/* header-three */}
            <div className="container">
              <div className="menu">
                <div className="cd-dropdown-wrapper">
                  <a className="cd-dropdown-trigger" href="#0">Store Categories</a>
                  <nav className="cd-dropdown"> 
                    <a href="#0" className="cd-close">Close</a>
                    <ul className="cd-dropdown-content"> 
                      <li><a href="offers.html">Today's Offers</a></li>
                      <li className="has-children">
                        <a href="#">Electronics</a> 
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products.html">All Electronics</a></li>
                          <li className="has-children">
                            <a href="#">MOBILE PHONES</a>  
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Electronics</a></li> 
                              <li className="has-children">
                                <a href="#0">SmartPhones</a> 
                                <ul className="is-hidden"> 
                                  <li className="go-back"><a href="#"> </a></li>
                                  <li><a href="products.html">Android</a></li>
                                  <li><a href="products.html">Windows</a></li>
                                  <li><a href="products.html">Black berry</a></li>
                                </ul>
                              </li>
                              <li> <a href="products.html">IPhones</a> </li>
                              <li><a href="products.html">Tablets</a></li>
                              <li><a href="products.html">IPad</a></li>
                              <li><a href="products.html">Feature Phones</a></li> 
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">LARGE APPLIANCES</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Electronics </a></li>
                              <li><a href="products.html">Refrigerators</a></li> 
                              <li><a href="products.html">Washing Machine</a></li>
                              <li><a href="products.html">Office Technology</a></li>
                              <li><a href="products.html">Air conditioner</a></li>
                              <li><a href="products.html">Home Automation</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">ENTERTAINMENT</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Electronics</a></li>
                              <li><a href="products.html">Tv &amp; Accessories</a></li>
                              <li><a href="products.html">Digital Camera</a></li>
                              <li><a href="products.html">Gaming</a></li>
                              <li><a href="products.html">Home Audio &amp; Theater</a></li>
                              <li className="has-children">
                                <a href="#">Computer</a>
                                <ul className="is-hidden">
                                  <li className="go-back"><a href="#"> </a></li> 
                                  <li><a href="products.html">Laptop </a></li>
                                  <li><a href="products.html">Gaming PC</a></li>
                                  <li><a href="products.html">Monitors</a></li>
                                  <li><a href="products.html">Networking</a></li>
                                  <li><a href="products.html">Printers &amp; Supplies</a></li>
                                  <li><a href="products.html">Accessories</a></li>
                                </ul>
                              </li> 
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">HOME APPLIANCES</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#0">All Electronics </a></li>
                              <li className="has-children"><a href="#">Kitchen appliances</a>
                                <ul className="is-hidden">
                                  <li className="go-back"><a href="#0"> </a></li>
                                  <li><a href="products.html">Rice Cookers</a></li>
                                  <li><a href="products.html">Mixer Juicer</a></li>
                                  <li><a href="products.html">Grinder</a></li>
                                  <li><a href="products.html">Blenders &amp; Choppers</a></li>
                                  <li><a href="products.html">Microwave Oven</a></li>
                                  <li><a href="products.html">Food Processors</a></li>
                                </ul>
                              </li>
                              <li><a href="products.html">Purifiers</a></li>
                              <li><a href="products.html">Geysers</a></li>
                              <li><a href="products.html">Gas Stove</a></li>
                              <li><a href="products.html">Vacuum Cleaner</a></li>
                              <li><a href="products.html">Sewing Machine</a></li> 
                              <li><a href="products.html">Heaters &amp; Fans</a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">SMALL DEVICES</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#0">All Electronics </a></li>
                              <li><a href="products.html">Wifi Dongle</a></li>
                              <li><a href="products.html">Router &amp; Modem</a></li>
                              <li className="has-children"><a href="#">Storage Devices</a>
                                <ul className="is-hidden">
                                  <li className="go-back"><a href="#0"> </a></li>
                                  <li><a href="products.html">Cloud Storage</a></li>
                                  <li><a href="products.html">Hard Disk</a></li>
                                  <li><a href="products.html">SSD</a></li>
                                  <li><a href="products.html">Pen Drive</a></li>
                                  <li><a href="products.html">Memory card</a></li> 
                                  <li><a href="products.html">Security Devices</a></li> 
                                </ul>
                              </li> 
                              <li><a href="products.html">Office Supplies</a></li>
                              <li><a href="products.html">Cut the Cable</a></li>
                              <li><a href="products.html">Auto Electronics</a></li>  
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">PERSONAL CARE</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#0">All Electronics </a></li>
                              <li><a href="products.html">Epilator</a></li> 
                              <li><a href="products.html">Hair Styler</a></li>
                              <li><a href="products.html">Trimmer &amp; Shaver</a></li>
                              <li><a href="products.html">Health Care</a></li> 
                              <li><a href="products.html">cables</a></li>
                            </ul>
                          </li>
                        </ul> {/* .cd-secondary-dropdown */} 
                      </li> {/* .has-children */}
                      <li className="has-children">
                        <a href="#">Fashion Store</a> 
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products1.html">All Fashion Stores</a></li>
                          <li className="has-children">
                            <a href="#">GIRLS' CLOTHING</a> 
                            <ul className="is-hidden">  
                              <li className="go-back"><a href="#">All Fashion Stores</a></li>
                              <li><a href="products1.html">Ethnic wear </a></li>
                              <li><a href="products1.html">Maternity wear</a></li>
                              <li><a href="products1.html">inner &amp; nightwear </a></li>
                              <li><a href="products1.html">casual wear </a></li>
                              <li><a href="products1.html">formal wear</a></li>
                              <li><a href="products1.html">Sports wear</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">BOYS' CLOTHING</a> 
                            <ul className="is-hidden">  
                              <li className="go-back"><a href="#">All Fashion Stores</a></li>
                              <li><a href="products1.html">Jeans</a></li>  
                              <li><a href="products1.html">Casual wear</a></li> 
                              <li><a href="products1.html">Shorts</a></li> 
                              <li><a href="products1.html">T-Shirts &amp; Polos</a></li> 
                              <li><a href="products1.html">Trousers &amp; Chinos</a></li> 
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">JACKETS</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#">All Fashion Stores</a></li>
                              <li><a href="products1.html">Blazers</a></li>
                              <li><a href="products1.html">Bomber jackets</a></li>
                              <li><a href="products1.html">Denim Jackets</a></li>
                              <li><a href="products1.html">Duffle Coats</a></li>
                              <li><a href="products1.html">Leather Jackets</a></li>
                              <li><a href="products1.html">Parkas</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">ACCESSORIES </a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Fashion Stores</a></li>
                              <li><a href="products1.html">Watches </a></li>
                              <li><a href="products1.html">Eyewear </a></li>
                              <li><a href="products1.html">Jewellery </a></li>
                              <li className="has-children">
                                <a href="#">Footwear </a>  
                                <ul className="is-hidden">
                                  <li className="go-back"><a href="#"> </a></li>
                                  <li><a href="products1.html">Ethnic</a></li>  
                                  <li><a href="products1.html">Casual wear</a></li>
                                  <li><a href="products1.html">Sports Shoes</a></li>
                                  <li><a href="products1.html">Boots</a></li>
                                </ul> 
                              </li> 
                              <li><a href="products1.html">Stoles &amp; Scarves</a></li>
                              <li><a href="products1.html">Handbags</a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">BEAUTY</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#">All Fashion Stores</a></li>
                              <li><a href="products1.html">Perfumes &amp; Deos</a></li>
                              <li><a href="products1.html">Lipsticks &amp; Nail Polish</a></li>
                              <li><a href="products1.html">Beauty Gift Hampers</a></li> 
                              <li><a href="products1.html">Personal Grooming</a></li>
                              <li><a href="products1.html">Travel bags</a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="products1.html">PERSONAL CARE</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Fashion Stores</a></li>
                              <li><a href="products1.html">Face Care</a></li>
                              <li><a href="products1.html">Nail Care</a></li>
                              <li><a href="products1.html">Hair Care</a></li>
                              <li><a href="products1.html">Body Care</a></li>
                              <li><a href="products1.html">Bath &amp; Spa</a></li>   
                            </ul>
                          </li>
                        </ul> {/* .cd-secondary-dropdown */} 
                      </li> {/* .has-children */}
                      <li className="has-children">
                        <a href="products2.html">Kids Fashion &amp; Toys</a> 
                        <ul className="cd-secondary-dropdown is-hidden"> 
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products2.html">All Kids Fashions</a></li>
                          <li className="has-children">
                            <a href="products2.html">KIDS CLOTHING</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Kids Fashions</a></li>
                              <li><a href="products2.html">Ethnic wear </a></li> 
                              <li><a href="products2.html">inner &amp; Sleepwear </a></li>
                              <li><a href="products2.html">Dresses &amp; Frocks </a></li>
                              <li><a href="products2.html">Winter wear</a></li>
                              <li><a href="products2.html">Diaper &amp; Accessories</a></li>
                            </ul>
                          </li> 
                          <li className="has-children"><a href="#">KIDS FASHION</a>
                            <ul className="is-hidden">  
                              <li className="go-back"><a href="#">All Kids Fashions</a></li>
                              <li><a href="products2.html">Footwear</a></li> 
                              <li><a href="products2.html">Sunglasses </a></li>
                              <li><a href="products2.html">School &amp; Stationery</a></li>
                              <li><a href="products2.html">Jewellery</a></li>
                              <li><a href="products2.html">Hair bands &amp; Clips</a></li>
                            </ul>
                          </li>
                          <li className="has-children"><a href="#">Baby Care</a>
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Kids Fashions</a></li>
                              <li><a href="products2.html">Lotions, Oil &amp; Powder </a></li> 
                              <li><a href="products2.html">Soaps, Shampoo </a></li>
                              <li><a href="products2.html">Bath Towels</a></li> 
                              <li className="has-children">
                                <a href="#">Feeding</a> 
                                <ul className="is-hidden">
                                  <li className="go-back"><a href="#"> </a></li> 
                                  <li><a href="products2.html">Baby Food </a></li>
                                  <li><a href="products2.html">Bottle Feeding </a></li>
                                  <li><a href="products2.html">Breast Feeding</a></li>  
                                </ul>
                              </li>  
                              <li><a href="products2.html">Toddlers' Rooms</a></li> 	
                            </ul>{/* .cd-secondary-dropdown */} 
                          </li> {/* .has-children */}								
                          <li className="has-children"><a href="#">TOYS &amp; GAMES </a>
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#">All Kids Fashions</a></li>
                              <li><a href="products2.html">Art &amp; Crafts</a></li> 
                              <li><a href="products2.html">Educational Toys </a></li>
                              <li><a href="products2.html">Baby Toys</a></li> 
                              <li><a href="products2.html">Outdoor Play </a></li> 
                              <li><a href="products2.html">Musical Instruments</a></li>
                            </ul>
                          </li>
                          <li> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#">All Kids Fashions</a></li>
                              <li><a href="products2.html">Toy Tips &amp; Trends</a></li> 
                              <li><a href="products2.html">Preschool Toys</a></li>
                              <li><a href="products2.html">Musical Instruments</a></li> 
                              <li><a href="products2.html">Bikes &amp; Ride-Ons</a></li>
                              <li><a href="products2.html">Video Games</a></li>
                              <li><a href="products2.html">PC &amp; Digital Gaming</a></li>
                            </ul>	
                          </li> 
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li> {/* .has-children */} 
                      <li className="has-children">
                        <a href="#">Home, Furniture &amp; Patio</a> 
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products3.html">All Products</a></li>
                          <li className="has-children">
                            <a href="#">Kitchen Uses</a> 
                            <ul className="is-hidden">  
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products3.html">Dinner Sets </a></li> 
                              <li><a href="products3.html">Cookware &amp; Bakeware </a></li>
                              <li><a href="products3.html">Containers &amp; Jars </a></li>
                              <li><a href="products3.html">Kitchen Tools </a></li>
                              <li><a href="products3.html">Food Storage</a></li>
                              <li><a href="products3.html">Casseroles</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Furniture </a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products3.html">Bedroom </a></li> 
                              <li><a href="products3.html">Dining Room </a></li>
                              <li><a href="products3.html">Kids' Furniture </a></li>
                              <li><a href="products3.html">Living Room</a></li>
                              <li><a href="products3.html">Office</a></li>
                              <li><a href="products3.html">Mattresses</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Home Decor </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products3.html">Lighting</a></li> 
                              <li><a href="products3.html">Painting</a></li>
                              <li><a href="products3.html">Curtains &amp; Blinds</a></li>
                              <li><a href="products3.html">Patio Furniture</a></li>
                              <li><a href="products3.html">Wardrobes &amp; Cabinets</a></li>
                              <li><a href="products3.html">Mattresses</a></li>
                            </ul>
                          </li>  
                          <li className="has-children">
                            <a href="#">Gardening &amp; Lawn </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#"> </a></li>  
                              <li><a href="products3.html">Gardening </a></li> 
                              <li><a href="products3.html">Landscaping </a></li>
                              <li><a href="products3.html">Sheds</a></li>
                              <li><a href="products3.html">Outdoor Storage</a></li>
                              <li><a href="products3.html">Garden &amp; Ideas </a></li>
                              <li><a href="products3.html">Patio Tips</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Garage Storage</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products3.html">Baskets &amp; Bins </a></li> 
                              <li><a href="products3.html">Garage Door Openers</a></li>
                              <li><a href="products3.html">Free Standing Shelves </a></li>
                              <li><a href="products3.html">Floor cleaning</a></li>
                              <li><a href="products3.html">Tool Kits</a></li>
                            </ul>
                          </li>  
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li> {/* .has-children */}  
                      <li className="has-children">
                        <a href="#">Sports, Fitness &amp; Outdoor</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products4.html">All Products</a></li>
                          <li className="has-children">
                            <a href="#">Single Sports </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products4.html">Bikes </a></li> 
                              <li><a href="products4.html">Fishing</a></li>
                              <li><a href="products4.html">Cycling </a></li>
                              <li><a href="products4.html">Musical Instruments</a></li>
                              <li><a href="products4.html">Archery </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Team Sports</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products4.html">Cricket </a></li> 
                              <li><a href="products4.html">Badminton </a></li>
                              <li><a href="products4.html">Swimming Gear </a></li>
                              <li><a href="products4.html">Sports Apparel </a></li>
                              <li><a href="products4.html">Indoor games</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Fitness </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products4.html">Fitness Accessories </a></li> 
                              <li><a href="products4.html">Exercise Machines </a></li>
                              <li><a href="products4.html">Ellipticals </a></li>
                              <li><a href="products4.html">Home Gyms</a></li> 
                              <li><a href="products4.html">Exercise Bikes</a></li> 
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Camping </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products4.html"> Airbeds</a></li> 
                              <li><a href="products4.html">Tents </a></li>
                              <li><a href="products4.html">Gazebo's &amp; Shelters</a></li>
                              <li><a href="products4.html">Coolers </a></li>
                              <li><a href="products4.html">Canopies</a></li>
                              <li><a href="products4.html">Sleeping Bags</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Camping Tools</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products4.html">Shooting </a></li> 
                              <li><a href="products4.html">Knives &amp; Tools </a></li>
                              <li><a href="products4.html">Optics &amp; Binoculars </a></li>
                              <li><a href="products4.html">Lights &amp; Lanterns </a></li>
                              <li><a href="products4.html">Hunting Clothing </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Other</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products4.html">Riding Gears &amp; More </a></li> 
                              <li><a href="products4.html">Body Massagers </a></li>
                              <li><a href="products4.html">Health Monitors </a></li>
                              <li><a href="products4.html">Health Drinks </a></li> 
                            </ul>
                          </li> 	
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li> {/* .has-children */}  
                      <li className="has-children">
                        <a href="#">Grocery store</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products5.html">All Products</a></li>
                          <li className="has-children">
                            <a href="#">Veggies &amp; Fruits </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products5.html">Vegetables </a></li> 
                              <li><a href="products5.html">Fruits </a></li>
                              <li><a href="products5.html">Dry Fruits</a></li> 
                              <li><a href="products5.html">Snacks &amp; Cookies </a></li>
                              <li><a href="products5.html">Breakfast &amp; Cereal</a></li> 
                            </ul> 
                          </li> 
                          <li className="has-children">
                            <a href="#">Packet Food</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products5.html">Beverages </a></li> 
                              <li><a href="products5.html">Baking </a></li>
                              <li><a href="products5.html">Emergency Food </a></li>
                              <li><a href="products5.html">Candy &amp; Gum </a></li>
                              <li><a href="products5.html">Meals &amp; Pasta </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Shop All Pets </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products5.html">Dogs </a></li>  
                              <li><a href="products5.html">Fish </a></li>												
                              <li><a href="products5.html">Cats</a></li>
                              <li><a href="products5.html">Birds </a></li>
                              <li><a href="products5.html">Pet Food </a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Household Essentials </a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products5.html">Laundry Room </a></li> 
                              <li><a href="products5.html">Paper &amp; Plastic</a></li>
                              <li><a href="products5.html">Pest Control </a></li>
                              <li><a href="products5.html">Batteries </a></li> 
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Food Shops </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products5.html">Fresh Food</a></li> 
                              <li><a href="products5.html">Food Gifts </a></li>
                              <li><a href="products5.html">Frozen Food </a></li>
                              <li><a href="products5.html">Organic </a></li>
                              <li><a href="products5.html">Gluten Free </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Tips </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products5.html">Pets Growth</a></li> 
                              <li><a href="products5.html">Recipes </a></li>
                              <li><a href="products5.html">Snacks</a></li>
                              <li><a href="products5.html">Nutrition</a></li> 
                            </ul>
                          </li> 
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li> {/* .has-children */}  
                      <li className="has-children">
                        <a href="#">Photo, Gifts &amp; Office Supplies</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products6.html">All Products</a></li>
                          <li className="has-children">
                            <a href="#">Trending Now </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products6.html">Best Priced</a></li> 
                              <li><a href="products6.html">Chocolates </a></li>
                              <li><a href="products6.html">Gift Cards </a></li>
                              <li><a href="products6.html">Fashion &amp; Accessories </a></li>
                              <li><a href="products6.html">Decorative Plants </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Photos </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products6.html">Shelf animation </a></li> 
                              <li><a href="products6.html">3D-rendered </a></li>
                              <li><a href="products6.html">gift builder </a></li>
                              <li><a href="products6.html">Frames</a></li>
                              <li><a href="products6.html">Wall Decor</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Gifts </a> 
                            <ul className="is-hidden">	
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products6.html">Personalized Gifts </a></li> 
                              <li><a href="products6.html">Flowers </a></li>
                              <li><a href="products6.html">Cards &amp; Toys</a></li>
                              <li><a href="products6.html">Show pieces </a></li>
                              <li><a href="products6.html">Photo Books</a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Favourite Brands </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products6.html">Archies </a></li> 
                              <li><a href="products6.html">Jewel Fuel </a></li>
                              <li><a href="products6.html">Ferns N Petals </a></li>
                              <li><a href="products6.html">Happily Unmarried</a></li>
                              <li><a href="products6.html">Chumbak</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Office</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products6.html">Calendars</a></li> 
                              <li><a href="products6.html">Mousepads</a></li>
                              <li><a href="products6.html">Phone Cases</a></li>
                              <li><a href="products6.html">Tablet &amp; Laptop Cases</a></li>
                              <li><a href="products6.html">Mounted Photos</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Combos </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products6.html">Chocolates </a></li> 
                              <li><a href="products6.html">Dry Fruits</a></li>
                              <li><a href="products6.html">Sweets</a></li>
                              <li><a href="products6.html">Snacks</a></li>
                              <li><a href="products6.html">Cakes</a></li>
                            </ul>
                          </li> 
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li> 
                      <li className="has-children">
                        <a href="#">Health, Beauty &amp; Pharmacy</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products7.html">All Products</a></li>
                          <li className="has-children">
                            <a href="#">Health</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products7.html">Home Health Care </a></li> 
                              <li><a href="products7.html">Sports Nutrition </a></li>
                              <li><a href="products7.html">Vision </a></li>
                              <li><a href="products7.html">Vitamins </a></li>
                              <li><a href="products7.html">Diet &amp; Nutrition </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Health Tips</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products7.html">Diet</a></li> 
                              <li><a href="products7.html">Exercise Tips</a></li>
                              <li><a href="products7.html">Vitamin Balance</a></li>
                              <li><a href="products7.html">Health Insurance</a></li>
                              <li><a href="products7.html">Funeral</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Beauty </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products7.html">Massage &amp; Spa </a></li> 
                              <li><a href="products7.html">Face Wash</a></li>
                              <li><a href="products7.html">Facial Cleanser</a></li>
                              <li><a href="products7.html">Makeup </a></li>
                              <li><a href="products7.html">Beauty Tips</a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Pharmacy </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products7.html">Home Delivery </a></li> 
                              <li><a href="products7.html">History &amp; Reports </a></li>
                              <li><a href="products7.html">Transfer Prescriptions </a></li>
                              <li><a href="products7.html">Health CheckUp</a></li>
                              <li><a href="products7.html">Mobile App</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Pharmacy Center </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products7.html">Diabetes Shop </a></li> 
                              <li><a href="products7.html">Medicine Cabinet </a></li>
                              <li><a href="products7.html">Vitamin Selector</a></li>
                              <li><a href="products7.html">Pharmacy Help</a></li> 
                            </ul>
                          </li>  
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li>
                      <li className="has-children">
                        <a href="#">Automotive</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products8.html">All Products</a></li>
                          <li className="has-children">
                            <a href="#">All Motors </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products8.html">Bikes </a></li> 
                              <li><a href="products8.html">Yachts </a></li>
                              <li><a href="products8.html">Scooters </a></li>
                              <li><a href="products8.html">Autos</a></li>
                              <li><a href="products8.html">Bus</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Accessories </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products8.html">Vehicle Electronics</a></li> 
                              <li><a href="products8.html">Stereos &amp; Monitors</a></li>
                              <li><a href="products8.html">Bluetooth Devices</a></li>
                              <li><a href="products8.html">GPS Navigation</a></li>
                              <li><a href="products8.html">Speakers &amp; Tweeters</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Safety &amp; Security </a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products8.html">Anti-Theft Devices </a></li> 
                              <li><a href="products8.html">Helmets</a></li>
                              <li><a href="products8.html">Sensors</a></li>
                              <li><a href="products8.html">Auto Repair Tools </a></li>
                              <li><a href="products8.html">Antifreeze &amp; Coolants </a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Car Interiors</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products8.html">Stereos </a></li> 
                              <li><a href="products8.html">Floor Mats </a></li>
                              <li><a href="products8.html">Seat Covers</a></li>
                              <li><a href="products8.html">Chargers </a></li>
                              <li><a href="products8.html">Audio Finder </a></li>
                            </ul>
                          </li>  
                          <li className="has-children">
                            <a href="#">Exterior Accessories </a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products8.html">Wheel covers </a></li> 
                              <li><a href="products8.html">Car Lighting </a></li>
                              <li><a href="products8.html">Polish &amp; Waxes</a></li>
                              <li><a href="products8.html">Cargo Management</a></li>
                              <li><a href="products8.html">Car Decoration </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Car Care</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products8.html">Auto Tips &amp; Advice </a></li> 
                              <li><a href="products8.html">Car Washes &amp; Cleaners </a></li>
                              <li><a href="products8.html">Car Wax &amp; Polish</a></li>
                              <li><a href="products8.html">Cleaning Tools</a></li>
                              <li><a href="products8.html">Detailing Kits </a></li>
                            </ul>
                          </li> 
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li>
                      <li className="has-children">
                        <a href="#">Books, Music &amp; Movies</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back"><a href="#">Menu</a></li>
                          <li className="see-all"><a href="products9.html">All Products</a></li>
                          <li className="has-children">
                            <a href="#">Books</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li className="has-children"><a href="#">Exam books </a>
                                <ul className="is-hidden">
                                  <li className="go-back"><a href="#"> </a></li>
                                  <li><a href="products9.html">CAT/MAT/XAT</a></li>
                                  <li><a href="products9.html">Civil Services</a></li>
                                  <li><a href="products9.html">AFCAT</a></li>
                                  <li><a href="products9.html">New Releases</a></li>
                                </ul>												
                              </li>
                              <li><a href="products9.html">Academic Text </a></li>
                              <li><a href="products9.html">Romance Books </a></li>
                              <li><a href="products9.html">Journals </a></li>
                              <li><a href="products9.html">Children's &amp; Teen Books </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Music</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products9.html">New Releases </a></li> 
                              <li><a href="products9.html">Country Music </a></li>
                              <li><a href="products9.html">Musical Instruments </a></li>
                              <li><a href="products9.html">Collections</a></li>
                              <li><a href="products9.html">Boxed Sets </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Music Combo</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products9.html">Pop </a></li> 
                              <li><a href="products9.html">Preorders </a></li>
                              <li><a href="products9.html">Album Songs</a></li>
                              <li><a href="products9.html">Top 50 CDs </a></li>
                              <li><a href="products9.html">Music DVDs </a></li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Movies</a> 
                            <ul className="is-hidden"> 
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products9.html">New Releases </a></li> 
                              <li><a href="products9.html">Children &amp; Family </a></li>
                              <li><a href="products9.html">Action</a></li>
                              <li><a href="products9.html">Classic Movies </a></li>
                              <li><a href="products9.html">Bollywood Movies </a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">Movies Combo</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products9.html">Hollywood Movies </a></li> 
                              <li><a href="products9.html">Digital Movies </a></li>
                              <li><a href="products9.html">Boxed Sets</a></li>
                              <li><a href="products9.html">Animated</a></li>
                              <li><a href="products9.html">Adventure</a></li>
                            </ul>
                          </li> 
                          <li className="has-children">
                            <a href="#">TV Shows</a> 
                            <ul className="is-hidden">
                              <li className="go-back"><a href="#" /></li>
                              <li><a href="products9.html">Serials</a></li> 
                              <li><a href="products9.html">Best Programs</a></li>
                              <li><a href="products9.html">Celebrations</a></li>
                              <li><a href="products9.html">Top Shows</a></li> 
                            </ul>
                          </li> 
                        </ul>{/* .cd-secondary-dropdown */} 
                      </li>  
                      <li><a href="sitemap.html">Full Site Directory </a></li>  
                    </ul> {/* .cd-dropdown-content */}
                  </nav> {/* .cd-dropdown */}
                </div> {/* .cd-dropdown-wrapper */}	 
              </div>
              <div className="move-text">
                <div className="marquee"><a href="offers.html"> New collections are available here...... <span>Get extra 10% off on everything | no extra taxes </span> <span> Try shipping pass free for 15 days with unlimited</span></a></div>
              </div>
            </div>
          </div>
        </div>
        {/* //header */}	
        {/* //footer */}		
        <div className="copy-right"> 
          <div className="container">
            <p>© 2016 Smart bazaar . All rights reserved | Design by <a href="http://w3layouts.com"> W3layouts.</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
