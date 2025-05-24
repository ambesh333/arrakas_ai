'use client';

import React from 'react';
import ROICarousel from './ROICarousel';
import InfoCard from './InfoCard';

const RightComponent: React.FC = () => {
    return (
        <div className="col-span-12 lg:col-span-3">
            <div className="grid gap-6">
                {/* <ROICarousel /> */}
                <InfoCard/>
            </div>
        </div>
    );
};

export default RightComponent;
