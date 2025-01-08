import React from 'react';
import MainCarousel from '../../Component/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/menKurta';
import { mensShoes } from '../../../Data/shoes';
import { lengha_choli } from '../../../Data/LenghaCholi';
import {saree} from '../../../Data/Saree';
import {dress} from '../../../Data/Dress';
import {gouns} from '../../../Data/Gouns';


const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className = "space-y-10 py-10">
                <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta"/>
                <HomeSectionCarousel data={mensShoes} sectionName="Men's Shoes"/>
                <HomeSectionCarousel data={lengha_choli} sectionName="Lengha Choli"/>
                <HomeSectionCarousel data={saree} sectionName="Saree"/>
                <HomeSectionCarousel data={dress} sectionName="Dress"/>
                <HomeSectionCarousel data={gouns} sectionName="Women's Gowns"/>
            </div>
        </div>
    );
};

export default HomePage;