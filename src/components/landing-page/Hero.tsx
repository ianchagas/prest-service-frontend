'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Profissionais oferecendo serviços de construção civil',
    },
    {
      src: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Profissionais de mecânicas oferecendo serviços de reparo de carros',
    },
    {
      src: 'https://images.unsplash.com/photo-1675034743126-0f250a5fee51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Borracharia oferecendo serviços de emergência',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='container px-4 py-20 md:py-24 mx-auto flex items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full'>
          <div>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
              Encontre ou Ofereça Serviços de Qualidade
            </h1>
            <p className='text-lg text-muted-foreground mb-8'>
              Conectamos profissionais qualificados com pessoas que precisam de seus serviços
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button size='lg' className='w-full sm:w-auto'>
                <UserPlus className='mr-2' />
                Quero Ser Prestador
              </Button>
              <Button variant='outline' size='lg' className='w-full sm:w-auto'>
                <Users className='mr-2' />
                Quero Contratar Serviço
              </Button>
            </div>
          </div>

          <div className='relative h-64 w-full rounded-xl overflow-hidden'>
            <div className='relative w-full h-full'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl shadow-lg'
                  />
                </div>
              ))}

              <div className='absolute inset-0 flex items-center justify-between p-4'>
                <Button
                  onClick={prevSlide}
                  variant='secondary'
                  size='icon'
                  className='h-8 w-8 rounded-full bg-white/70 shadow-lg'>
                  <ChevronLeft className='h-4 w-4' />
                </Button>
                <Button
                  onClick={nextSlide}
                  variant='secondary'
                  size='icon'
                  className='h-8 w-8 rounded-full bg-white/70 shadow-lg'>
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>

              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
