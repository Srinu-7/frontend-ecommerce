import React from 'react';
import MainCarousel from '../../Component/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/menKurta';
const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className = "space-y-10 py-10">
                <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta"/>
                <HomeSectionCarousel data={mens_kurta} sectionName="Best Sellers"/>
                <HomeSectionCarousel data={mens_kurta} sectionName="Trending"/>
                <HomeSectionCarousel data={mens_kurta} sectionName="Top Rated"/>
                <HomeSectionCarousel data={mens_kurta} sectionName="On Sale"/>
                <HomeSectionCarousel data={mens_kurta} sectionName="Featured"/>
            </div>
        </div>
    );
};

export default HomePage;