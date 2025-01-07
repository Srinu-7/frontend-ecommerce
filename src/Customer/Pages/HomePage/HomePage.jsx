import React from 'react';
import MainCarousel from '../../Component/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel';
const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className = "space-y-10 py-10">
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
            </div>
        </div>
    );
};

export default HomePage;