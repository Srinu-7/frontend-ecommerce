import React from 'react';
import { Grid, Typography, Button } from '@mui/material';


const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 3
                }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Careers</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Partners</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Analytics</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Commerce</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Insights</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Support</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Api Status</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Claim</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Privacy</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Terms</Button>
                    </div>
                </Grid>
                

            </Grid>
        </div>
    )
}

export default Footer