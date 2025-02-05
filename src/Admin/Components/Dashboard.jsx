import React from 'react'
import { Grid } from '@mui/material'
import Achievement from './Achievement'
import MonthlyOverView from './MonthlyOverView'
import ProductsTableView from '../View/ProductsTableView'
import OrderTableView from '../View/OrderTableView'

const Dashboard = () => {
  return (
    <div className='p-2'>
      <Grid container spacing={1}>
        <Grid className='shadow-lg shadow-gray-600'item xs={12} md={4}>
          <Achievement/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600'item xs={12} md={8}>
          <MonthlyOverView/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600'item xs={12} >
          <ProductsTableView/>
        </Grid>
        <Grid className='shadow-lg shadow-gray-600'item xs={12}>
          <OrderTableView/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard