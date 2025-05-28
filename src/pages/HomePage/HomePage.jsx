"use client"

import React from 'react'
import HeroSection from './HeroSection';
import SongketHistorySection from './SongketHistorySection';
import ProductCategorySection from './ProductCategorySection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <SongketHistorySection />
      <ProductCategorySection />
    </>
  );
}

export default HomePage