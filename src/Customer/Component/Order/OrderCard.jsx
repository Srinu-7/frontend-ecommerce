import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

    const navigate = useNavigate();
    return (
        <div  onclick={() => navigate(`/account/order/${3}`)} className='p-5 shadow-lg border rounded-md hover:shadow-2xl'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className=' flex cursor-pointer '>
                        <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" className='w-[5rem] h-[5rem] object-cover object-top' />
                        <div className='ml-5 space-y-2'>
                            <h1 className='text-xs font-semibold'>Product Title</h1>
                            <p className='opacity-60 text-xs font-semibold '>Color : Yellow</p>
                            <p className='opacity-60 text-xs font-semibold '>Size : XL</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <h1 className='text-sm font-semibold'>₹ 999</h1>
                </Grid>

                <Grid item xs={4}>

                    {
                        true && <div>
                            <p>

                                <AdjustIcon sx={{ width: "15px", height: "15px" }}
                                    className='text-green-600 mr-2 text-sm'
                                />
                                <span className='text-md'>
                                    Delivered 2 Days ago
                                </span>
                            </p>
                            <p className='text-xs'>Your order has been delivered</p>
                        </div>
                    }

                    {
                        false && <p>
                            <span>
                                Expected Delivery On March 03
                            </span>
                        </p>
                    }

                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard