import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {

    const items = MainCarouselData.map((item) => <img className='cursor-pointer -z-10'
        role='presentation'
        src={item.image} />);

    return (
        <div>
            <AliceCarousel
                items={items}
                controlsStrategy="alternate"
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    )
}

export default MainCarousel