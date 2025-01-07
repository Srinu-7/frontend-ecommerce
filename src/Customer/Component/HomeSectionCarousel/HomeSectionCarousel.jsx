import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mens_kurta } from '../../../Data/MenKurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = mens_kurta.map((item) => <HomeSectionCard item={item} />);

  return (
    <div>
        <AliceCarousel
                items={items}
                controlsStrategy="alternate"
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
            />
    </div>
  )
}

export default HomeSectionCarousel