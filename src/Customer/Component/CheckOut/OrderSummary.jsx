import React, { useEffect } from 'react'
import AddressCard from '../Addresscard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'


const OrderSummary = () => {
    const {order} = useSelector(store=>store);
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order_id = searchParams.get("order_id");
    console.log(order);

    useEffect(()=>{
        dispatch(getOrderById(order_id))
    },[order_id])
    return (
        <div>
            <div className='p-5 shadow-lg rounded-md '>
                <AddressCard item = {order?.order?.shippingAddress}/>
            </div>
            <div>

                <div className='lg:grid grid-cols-3  relative'>
                    <div className='col-span-2'>
                        {order?.order?.orderItems?.map((item) => <CartItem item = {item}/>)}
                    </div>
                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border'>
                            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                            <hr />
                            <div className='space-y-3 font-semibold'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <p>Price</p>
                                    <p>₹ {order?.order?.totalPrice}</p>
                                </div>
                                <div className='flex justify-between pt-3 text-black'>
                                    <p>Discount</p>
                                    <p className='text-green-600'>- ₹ {order?.order?.totalDiscount}</p>
                                </div>
                                <div className='flex justify-between pt-3 text-black'>
                                    <p>Delivery Charges</p>
                                    <p className='text-green-600'>Free</p>
                                </div>
                                <div className='flex justify-between pt-3 text-black'>
                                    <p>Total Amount</p>
                                    <p className='text-green-600'>₹ {order?.order?.totalPrice}</p>
                                </div>
                            </div>

                            <Button variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgColor: "#9155fd", mt: "3rem" }}>
                                Check Out
                            </Button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OrderSummary