import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__image">
                    <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt="Amazon-banner" />
                </div>

            </div>

            <div className="home__row">
                <Product
                    id="1"
                    title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Paperback"
                    price="69.99"
                    rating={4}
                    image="https://mtonews.com/.image/t_share/MTczMzMyMzUxMzc4NTMyMjEx/1vg8evpd-front-shortedge-384.jpg" />

                <Product
                    id="2"
                    title="Apple MacBook Pro MWP42HN/A Core i5 10th Gen macOS Catalina Laptop (16 GB RAM, 512 GB SSD, Intel Iris Plus 645 Graphics, 33.78cm, Space Grey)"
                    price="1,599.99"
                    rating={3}
                    image="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_350,w_350/v1605276959/Croma%20Assets/Computers%20Peripherals/Laptop/Images/8935963164702.png" />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Sony Wireless Bluetooth Speaker (SRS-XB402M, Black)"
                    price="64.99"
                    rating={4}
                    image="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1605197215/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/8944898736158.png" />

                <Product
                    id="4"
                    title="Black & Decker 12 Cup Coffee Maker (BXCM1201IN, Black)"
                    price="39.99"
                    rating={3}
                    image="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1605136037/Croma%20Assets/Small%20Appliances/Coffee%20Tea%20Makers/Images/8852647870494.png" />

                <Product
                    id="5"
                    title="Sony Playstation 5 825GB SSD (CFI-1008A01R, White)"
                    price="499.99"
                    rating={5}
                    image="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1610107735/Croma%20Assets/Gaming/Gaming%20Consoles/Images/231643_eezzze.png" />
            </div>

            <div className="home__row">
                <Product
                    id="6"
                    title="Samsung 49 Inch Curved Gaming Monitor - Super Ultra Wide Dual WQHD with 144Hz Refresh Rate (LC49RG90SSUXEN, Black)"
                    price="1,094.99"
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />

                <Product
                    id="6"
                    title="G29 - Logitech Steering Wheel with Adjustable floor pedals and gear (Black) - PlayStation/PC"
                    price="249.99"
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZfKvDb1mDwuMyy4-hLmZ-IE92VNX5w9eFw&usqp=CAU" />
            </div>

        </div>
    )
}

export default Home
