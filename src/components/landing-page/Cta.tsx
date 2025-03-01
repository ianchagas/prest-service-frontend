'use client';

import { UserPlus, Users } from 'lucide-react';
import { Button } from '../ui/button';

export default function Cta() {
  return (
    <>
      <section className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Button size='lg' className='h-14 w-full'>
            <UserPlus className='mr-2' />
            Cadastre-se como Prestador
          </Button>
          <Button variant='outline' size='lg' className='h-14 w-full'>
            <Users className='mr-2' />
            Buscar Serviços
          </Button>
        </div>
      </section>
    </>
  );
}
