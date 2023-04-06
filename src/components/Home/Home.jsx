import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists) {
            toast('You have already added this product');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }

    const handleRemoveFromCart = _id => {
        const remaining = cart.filter(ts => ts._id !== _id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='tshirts-container'>
                {
                    tshirts.map(tshirt => <Tshirts
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirts>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;