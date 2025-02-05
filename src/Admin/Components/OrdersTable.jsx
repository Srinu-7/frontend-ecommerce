import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cancelledOrder, deleteOrder, getOrders, shipOrder, confirmOrder, deliveredOrder } from '../../State/Admin/Order/Action';
import { Card, CardHeader, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Avatar, Button, AvatarGroup, Menu, MenuItem } from '@mui/material';

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);
  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);
  // console.log("admin orders", adminOrder);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.delivered, adminOrder.shipped]);

  const handleClick = (event, index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = event.currentTarget;
    setAnchorEl(newAnchorEl);
  };

  const handleClose = (index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = null;
    setAnchorEl(newAnchorEl);
  };

  const handleShipOrder = (orderId) => {
    console.log("ship orderId", orderId);
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmOrder = (orderId) => {
    console.log("confirm orderId", orderId);
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    console.log("delivered orderId", orderId);
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div>
      <Card className='mt-2'>
        <CardHeader title="All Orders" />
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
                <TableCell sx={{ color: "white" }} align="center">Update</TableCell>
                <TableCell sx={{ color: "white" }} align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((order, index) => (
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
                        width: '100%' // Full width
                      }}
                    >
                      {order.orderStatus}
                    </Button>
                  </TableCell>
                  <TableCell sx={{ color: "blue" }} align="center">
                    <Button
                      id="basic-button"
                      onClick={(event) => handleClick(event, index)}
                      variant='contained' // Change to 'contained' for solid background
                      sx={{
                        backgroundColor: '#9155fd',
                        color: 'white',
                        padding: '4px 8px', // Adjust padding to make the button smaller
                        minWidth: 'auto', // Set minimum width to auto
                        height: 'auto' // Set height to auto to fit content
                      }}
                      aria-controls={`basic-menu-${order.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${order.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmOrder(order.id)}>Confirmed</MenuItem>
                      <MenuItem onClick={() => handleShipOrder(order.id)}>Shipped</MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(order.id)}>Delivered</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell sx={{ color: "blue" }} align="center">
                    <Button
                      onClick={() => handleDeleteOrder(order.id)}
                      variant='contained' // Change to 'contained' for solid background
                      sx={{
                        backgroundColor: '#9155fd',
                        color: 'white',
                        padding: '4px 8px', // Adjust padding to make the button smaller
                        minWidth: 'auto', // Set minimum width to auto
                        height: 'auto' // Set height to auto to fit content
                      }}
                    >
                      Delete
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

export default OrdersTable;