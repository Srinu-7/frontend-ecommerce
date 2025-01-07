import React from 'react'
import { MainCarouselData } from '../../../Data/MainCarousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

    const items = MainCarouselData.map((item) => <img className='cursor-pointer'
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