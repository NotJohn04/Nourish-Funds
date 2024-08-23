// app/page.tsx

import Header from "@/component/custom/Header";
import Header2 from "@/component/custom/Header2";
import Image from "next/image"
import { AspectRatio } from "@/component/ui/aspect-ratio"
import '@styles/globals.css';
import BentoGridDemo from "@/component/custom/FundingCards"

export default function Food() {

  return (
    <>
    <Header/>

        <Image
            src="/Chain-Funds (2).svg"
            alt="Photo by Drew Beamer"
            width={100}
            height={100}
            className="static h-full w-full left-0 right-0 text-transparent"
          />


          
        {/* <div style={{ position: 'absolute', top: '30%', left: '10%', transform: 'translate(-20%, 0%)', color: 'white', textAlign: 'left' }}>
        <h1 style={{ fontSize: '68px', fontWeight: '700', fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Royal Funds</h1>
        <h2 style={{ fontSize: '28px',fontWeight: '400',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>One vision, Many chains</h2>
        </div> */}


      <Header2/>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <BentoGridDemo/>
      </div>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <BentoGridDemo/>
      </div>
    </>
  );
}
