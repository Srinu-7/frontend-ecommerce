import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './Dashboard';
import CreateProductForm from './CreateProductForm';
import OrdersTable from './OrdersTable';
import ProductsTable from './ProductsTable';


const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <HistoryIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <AddBoxIcon /> }
]
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const drawer = (
    <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between",height:"100%" }}>
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem key={item.name} onClick={() => navigate(item.path)} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
      <div className='flex h-[100vh] '>
        <CssBaseline />
        <div className='w-[15%] border border-r-gray-300 h-full fixed top-0'>
          {drawer}
        </div>
        <div className='w-[85%] h-full ml-[15%]'>
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/product/create' element={<CreateProductForm/>}></Route>
            <Route path='/products' element={<ProductsTable/>}></Route>
            <Route path='/orders' element={<OrdersTable/>}></Route>
          </Routes>
        </div>
      </div>
  )
}

export default Admin