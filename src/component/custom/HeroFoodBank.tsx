// components/custom/HeroFoodBank.tsx
import React from 'react';
import Image from 'next/image';

const HeroFoodBank: React.FC = () => {
  return (
    <div className="relative h-[60vh] w-full bg-black">
      <Image
        src="/wallpaper.jpg" // replace with the correct path
        alt="Food Bank Wallet Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-80"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Food Bank Wallet</h1>
        <p className="text-xl mb-2">
          Redistributed all funds to approved public goods on Potlock registry.
        </p>
        <p className="text-xl">
          Used by YEAR of CHEF for auto-redistribution of royalties.
        </p>
        <div className="flex items-center mt-4">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0-2C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17h2v2h-2zm-1-6v6h4v-6l1.26-4.74A1 1 0 0 0 14.28 5h-4.56a1 1 0 0 0-.98 1.26L10 11z" />
          </svg>
          <p className="text-2xl font-semibold">Total Funded 34.40N ~ $137.94</p>
        </div>
      </div>
    </div>
  );
};

export default HeroFoodBank;
