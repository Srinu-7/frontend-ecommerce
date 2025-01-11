import React from 'react'
import AddressCard from '../Addresscard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarRateIcon from '@mui/icons-material/StarRate';

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>

            <div>
                <h1 className='text-xl font-bold py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div>
                <OrderTracker activeStep={2} />
            </div>

            <Grid container className='space-y-5'>
                {[1, 1, 1, 1,1,1,1,1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-2'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src=" https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />

                            <div className='space-y-1 ml-1 mt-1'>
                                <p className='text-semibold'>Men Embroidered Jacquard Straight Kurta</p>
                                <p className='text-gray-400 space-x-3'><spn>Color: Yellow</spn> <spn>Size: M</spn></p>
                                <p className='text-gray-400'>Seller: KSH Trendz</p>
                                <p className='text-semibold'>₹29,399</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item >
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarRateIcon sx={{ fontSize: "1.5rem" }} className='mr-2' />
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}

            </Grid>
        </div>
    )
}

export default OrderDetails