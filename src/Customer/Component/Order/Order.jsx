import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "InTransit", value: "InTransit" },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "Cancelled" },
    { label: "Replaced", value: "Replaced" }
];

const Order = () => {
    return (
        <div className='px-5 lg:px-20'>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>Order Status</h1>
                            {orderStatus.map((option) => (
                                <div key={option.value}>
                                    <div className='flex items-center'>
                                        <input defaultValue={option.value} className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' type="checkbox" />
                                        <label htmlFor={option.value} className="ml-3 block text-sm text-gray-600">
                                            {option.label}
                                        </label>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-5'>
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <OrderCard />)}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order