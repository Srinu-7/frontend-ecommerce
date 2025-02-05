import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { findProducts } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../State/Product/Action';

const ProductsTable = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(store => store);
    console.log("products ", products);
    const handleDeleteProduct = (productId) => {
        dispatch(deleteProduct(productId));
    }
    useEffect(() => {
        const data = {
            category: null,
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000,
            minDiscount: 0,
            sort: "low-high",
            pageNumber: 1,
            pageSize: 10,
            stock: "",
        };

        dispatch(findProducts(data));
    }, [products.deletedProductId])
    return (
        <div className='p-1'>
            <Card className='mt-2'>
                <CardHeader title="All Products" />
                <TableContainer sx={{ bgcolor: "#242B2E", color: "white" }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "white" }} align='center'>Product Id</TableCell>
                                <TableCell sx={{ color: "white" }} align='center'>Image</TableCell>
                                <TableCell sx={{ color: "white" }} align="center">Brand</TableCell>
                                <TableCell sx={{ color: "white" }} align="center">Category</TableCell>
                                <TableCell sx={{ color: "white" }} align="center">Price</TableCell>
                                <TableCell sx={{ color: "white" }} align="center">Quantity</TableCell>
                                <TableCell sx={{ color: "white" }} align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.products?.content?.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ color: "white" }} align="center">{row.id}</TableCell>
                                    <TableCell component="th" scope="row" align="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Avatar
                                            src={row.imageUrl}
                                            sx={{
                                                width: '60px',
                                                height: '60px',
                                                objectFit: 'contain', // Ensures the image is centered and covers the Avatar area
                                                margin: '-10px' // Centers the Avatar within its container
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">{row.brand}</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">{row.category.name}</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">{row.discountedPrice}</TableCell>
                                    <TableCell sx={{ color: "white" }} align="center">{row.quantity}</TableCell>
                                    <TableCell sx={{ color: "blue" }} align="center">
                                        <Button sx={{
                                            backgroundColor: '#9155fd',
                                            color: 'white',
                                            padding: '4px 8px', // Adjust padding to make the button smaller
                                            minWidth: 'auto', // Set minimum width to auto
                                            height: 'auto' // Set height to auto to fit content
                                        }} onClick={() => handleDeleteProduct(row.id)} variant='contained'>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

        </div>
    )
}

export default ProductsTable