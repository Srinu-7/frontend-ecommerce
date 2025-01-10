import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@headlessui/react';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md '>

            <div className='flex items-center'>

                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>

                    <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" className='w-full h-full object-cover object-center object-top' />
                </div>

                <div className='ml-5 space-y-1'>

                    <p className='font-semibold'>Men Embroidered Jacquard Straight Kurta</p>

                    <p className='opacity-70'>Size: M,Yellow</p>

                    <p className='opacity-70 mt-2'> Seller : KSH Trendz</p>

                    <div className='flex space-x-3 items-center  text-gray-900 pt-5'>

                        <p className="font-semibold">₹1,399</p>

                        <p className='line-through opacity-50'>₹6,999</p>

                        <p className='text-green-600 font-semibold'>80% off</p>

                    </div>


                </div>

            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>

                    <IconButton><RemoveCircleOutlineIcon /></IconButton>

                    <span className='py-1 px-7 border rounded-sm'>3</span>

                    <IconButton sx = {{color:"RGB(145 85 123)"}}><AddCircleOutlineIcon /></IconButton>

                </div>

                <div>

                    <Button sx = {{color:"#7b60ff"}}>remove</Button>
                </div>

            </div>

        </div>
    )
}

export default CartItem