import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'


const TriangleImg = styled('img')({
  right: 0,
  top: 0,
  height: 170,
  position: 'absolute'
})

const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})
const Achievement = () => {
  return (
    <Card className='' sx={{ position: 'relative' ,color: 'white',bgcolor: '#242B2E'}}>
      <CardContent>
        <Typography variant='h6' sx={{ letterSpacing: ".25px" }}>Swift Buy</Typography>
        <Typography variant='body2'>Congratulations 🎉</Typography>
        <Typography variant='h5' sx={{ my: 3.1}}>420.8k </Typography>
        <Button size='small' variant='contained'>View Sales</Button>
        <TriangleImg src="" alt="" />
        <TrophyImg src="https://media.istockphoto.com/id/1477780233/vector/trophy-icon-vector-design-template-simple-and-modern.jpg?s=612x612&w=0&k=20&c=n2appnG8M5pJmroqLxzU6EiWj-kpaDbfIH43zJ4OKEg=" alt="" />
      </CardContent>
    </Card>
  )
}

export default Achievement