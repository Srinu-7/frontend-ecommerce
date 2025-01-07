import React from 'react';
import MainCarousel from '../../Component/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel';

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div>
                <HomeSectionCarousel />
            </div>
        </div>
    );
};

export default HomePage;