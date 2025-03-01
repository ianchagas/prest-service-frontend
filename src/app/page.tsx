'use client';

import Cta from '@/components/landing-page/Cta';
import Features from '@/components/landing-page/Features';
import Footer from '@/components/landing-page/Footer';
import Hero from '@/components/landing-page/Hero';
import Navbar from '@/components/landing-page/Navbar';
import Product from '@/components/landing-page/Product';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className=' bg-gradient-to-b from-background to-muted'>
      <Navbar />
      <Hero />
      <Separator className='my-8' />
      <Features />
      <Separator className='my-8' />
      <Product />
      {/* <Separator className='my-8' /> */}
      <Cta />
      <Separator className='my-8' />
      <Footer />
    </div>
  );
}
