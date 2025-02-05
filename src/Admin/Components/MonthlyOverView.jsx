import { AccountCircle, AttachMoney, LocalShipping, TrendingUp } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: '#E5D68A',
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: '100k',
    title: 'Customers',
    color: '#22CB5C',
    icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: '10k',
    title: 'Products',
    color: '#DE4839',
    icon: <LocalShipping sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: '1.1m',
    title: 'Revenue',
    color: '#12B0E8',
    icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
  }
]

const renderStats = () => {
  return (
    <Grid container spacing={2}>
      {salesData.map((item, index) => (
        <Grid item xs={2} sm={3} key={index}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar variant="rounded" sx={{ bgcolor: `${item.color}`, mr: 3, width: 44, height: 44, boxShadow: 3, color: "white" }}>
              {item.icon} {/* Render the icon here */}
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "0.875rem" }}>
                {item.stats}
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
                {item.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
const MonthlyOverView = () => {
  return (
    <Card sx={{bgcolor: '#242B2E',color: 'white'}}>
      <CardHeader
        title="Monthly Overview"
        action={<IconButton variant="contained" size="small"><MoreVertIcon /></IconButton>}
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600,mr:1}}>
              Total 77.7% growth😊
            </Box>
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MonthlyOverView