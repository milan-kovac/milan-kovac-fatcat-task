import React from 'react';
import Marquee from 'react-fast-marquee';

import { TrustBarProps } from '@homework-task/interfaces/components.interfaces';

const TrustBar: React.FC<TrustBarProps> = ({ images }) => (
    <Marquee>
        {images.map((image) => (
            <img width={100} key={image} src={image} className="mx-10" alt="" />
        ))}
    </Marquee>
);

export default TrustBar;
