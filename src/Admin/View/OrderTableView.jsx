import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cancelledOrder, deleteOrder, getOrders, shipOrder, confirmOrder, deliveredOrder } from '../../State/Admin/Order/Action';
import { Card, CardHeader, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Avatar, Button, AvatarGroup, Menu, MenuItem } from '@mui/material';

const OrderTableView = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);
  // console.log("admin orders", adminOrder);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.delivered, adminOrder.shipped]);


  return (
    <div>
      <Card className='mt-2'>
        <CardHeader title="Recent Orders" />
        <TableContainer sx={{ bgcolor: "#242B2E", color: "white" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }} align='center'>Id</TableCell>
                <TableCell sx={{ color: "white" }} align='center'>Image</TableCell>
                <TableCell sx={{ color: "white" }} align="center">Brand</TableCell>
                <TableCell sx={{ color: "white" }} align="center">Price</TableCell>
                <TableCell sx={{ color: "white" }} align="center">Quantity</TableCell>
                <TableCell sx={{ color: "white" }} align="center">Order Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ color: "white" }} align="center">{order.id}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <AvatarGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {order.orderItems?.map((item) => (
                        <Avatar
                          key={item.product.id} // Ensure to add a unique key
                          src={item.product.imageUrl}
                        />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    {order.orderItems?.map((item) => (
                      <p key={item.product.id}>{item.product.brand}</p> // Ensure to add a unique key
                    ))}
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">{order.totalDiscountPrice}</TableCell>
                  <TableCell sx={{ color: "white" }} align="center">{order.totalQuantity}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant='contained'
                      sx={{
                        backgroundColor: order.orderStatus === 'PENDING' ? 'red' :
                          (order.orderStatus === 'CONFIRMED' || order.orderStatus === 'PLACED') ? 'green' :
                            order.orderStatus === 'SHIPPED' ? 'yellow' :
                              order.orderStatus === 'DELIVERED' ? 'orange' :
                                'white', // Default color
                        color: 'white',
                        borderRadius: '20px', // Rounded corners
                        width: '50%' // Full width
                      }}
                    >
                      {order.orderStatus}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;