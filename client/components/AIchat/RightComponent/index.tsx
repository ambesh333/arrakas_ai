'use client';

import React from 'react';
import InfoCard from './InfoCard';
import ReferCard from './ReferalCard';


const RightComponent: React.FC = () => {
    return (
        <div className="col-span-12 lg:col-span-3">
            <div className="grid gap-6">
                {/* <ROICarousel /> */}
                <InfoCard/>
                <ReferCard/>
            </div>
        </div>
    );
};

export default RightComponent;
