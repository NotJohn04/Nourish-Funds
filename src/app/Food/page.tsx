// app/Food/page.tsx

import Header from "@/component/custom/Header";
import '@/app/globals.css';
import { DirectionAwareHoverDemo } from "@/component/custom/vendorCard";

export default function Food() {
  return (
    <>
      <Header />

      <DirectionAwareHoverDemo/>
    </>
  );
}

