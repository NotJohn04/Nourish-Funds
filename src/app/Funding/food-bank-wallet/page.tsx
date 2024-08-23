// pages/food-bank-wallet.tsx
import React from "react";
import Header from "@/component/custom/Header";
import HeroFoodBank from "@/component/custom/HeroFoodBank";
import DonateBox from "@/component/custom/DonateBox";
import { Component as BarChartComponent } from "@/component/custom/BarChart";
import '@/app/globals.css';

export default function FoodBankWallet() {
  return (
    <>
      <Header />
      <HeroFoodBank />
      <DonateBox />

    </>
  );
}
