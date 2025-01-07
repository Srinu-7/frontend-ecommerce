import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mens_kurta } from '../../../Data/MenKurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 5 },
    };

    const items = mens_kurta.map((item, index) => (
        <HomeSectionCard key={index} item={item} />
    ));

    const slidePrev = () => {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
    };

    const slideNext = () => {
        setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    return (
        <div className="px-4 lg:px-8">
            <div className="relative flex justify-between">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    activeIndex={activeIndex} // Ensure activeIndex is passed
                    onSlideChanged={syncActiveIndex}
                    disableButtonsControls
                    disableDotsControls
                />
                {activeIndex < items.length - responsive[1024].items && (
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(-35%) rotate(-90deg)',
                        }}
                        color="inherit"
                        aria-label="Next slide"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                )}
                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50"
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-5%) rotate(90deg)',
                        }}
                        color="inherit"
                        aria-label="Previous slide"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
