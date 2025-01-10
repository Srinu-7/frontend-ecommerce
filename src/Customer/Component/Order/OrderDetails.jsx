import React from 'react'
import AddressCard from '../Addresscard/AddressCard'
import OrderTracker from './OrderTracker'

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>

            <div>
                <h1 className='text-xl font-bold py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div>
                <OrderTracker activeStep={2}/>
            </div>
        </div>
    )
}

export default OrderDetails