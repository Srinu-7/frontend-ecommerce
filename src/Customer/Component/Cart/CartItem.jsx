import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { getCart, removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    
    const updateCart = (num)=>{
        dispatch(updateCartItem(item?.id,num+item?.quantity));
    }

    const removeItem = ()=>{
        dispatch(removeCartItem(item?.id));
    }
    return (
        <div className='p-5 shadow-lg border rounded-md '>

            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img src={item?.product?.imageUrl} alt="" className='w-full h-full object-cover object-center object-top' />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>{item?.product?.title}</p>
                    <p className='opacity-70'>Size: {item?.size},{item?.product?.color}</p>

                    <p className='opacity-70 mt-2'> Seller : {item?.product?.brand}</p>

                    <div className='flex space-x-3 items-center  text-gray-900 pt-5'>

                        <p className="font-semibold">₹{item?.product?.discountedPrice}</p>

                        <p className='line-through opacity-50'>₹{item?.product?.price}</p>

                        <p className='text-green-600 font-semibold'>{item?.product?.discountPercentage}% off</p>

                    </div>


                </div>

            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>

                    <IconButton onClick = {()=>updateCart(-1)} disabled = {item?.quantity === 1} sx = {{color:"RGB(145 85 123)"}}><RemoveCircleOutlineIcon /></IconButton>

                    <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>

                    <IconButton onClick = {()=>updateCart(1)} disabled = {item?.quantity === item?.product?.quantity} sx = {{color:"RGB(145 85 123)"}}><AddCircleOutlineIcon /></IconButton>

                </div>

                <div>

                    <Button sx = {{color:"#7b60ff"}} onClick = {removeItem}>remove</Button>
                </div>

            </div>

        </div>
    )
}

export default CartItem