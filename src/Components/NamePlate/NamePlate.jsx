import Image from 'next/image';
import React from 'react';

const NamePlate = () => {
    return (
        <div className="flex items-center gap-2">
            <Image src={'/Logo/market.png'} width={30} height={30} alt="logo" />
            <h1 className="font-bold animate-gradient bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#00ff87] bg-clip-text text-transparent">
                Next<span>Mart</span>
            </h1>
        </div>
    );
};

export default NamePlate;
