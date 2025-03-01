'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, Users, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { SelectTheme } from '../ui/select-theme';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full border-b'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold text-primary'>
          PrestService
        </Link>

        <div className='hidden md:flex space-x-8'>
          <Link href='/#home' className='text-muted-foreground hover:text-foreground'>
            Inicio
          </Link>
          <Link href='/#features' className='text-muted-foreground hover:text-foreground'>
            Serviços
          </Link>
          <Link href='/#servicos' className='text-muted-foreground hover:text-foreground'>
            Sobre nós
          </Link>
          <Link href='/#contact' className='text-muted-foreground hover:text-foreground'>
            Contato
          </Link>
        </div>

        <div className='hidden md:flex items-center space-x-4'>
          <Button variant='outline' size='sm'>
            <Users className='mr-2 h-4 w-4' />
            Login
          </Button>
          <Button size='sm'>
            <UserPlus className='mr-2 h-4 w-4' />
            Cadastre-se
          </Button>
          <SelectTheme />
        </div>

        <div className='flex items-center space-x-4 md:hidden'>
          <SelectTheme />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-64'>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className='flex flex-col space-y-6 py-6'>
                <Link
                  href='/#home'
                  className='text-foreground hover:text-primary text-lg'
                  onClick={() => setIsOpen(false)}>
                  Inicio
                </Link>
                <Link
                  href='/#sobre'
                  className='text-foreground hover:text-primary text-lg'
                  onClick={() => setIsOpen(false)}>
                  Sobre nós
                </Link>
                <Link
                  href='/#servicos'
                  className='text-foreground hover:text-primary text-lg'
                  onClick={() => setIsOpen(false)}>
                  Serviços
                </Link>
                <Link
                  href='/#contato'
                  className='text-foreground hover:text-primary text-lg'
                  onClick={() => setIsOpen(false)}>
                  Contato
                </Link>
                <div className='border-t pt-6 flex flex-col space-y-4'>
                  <Button variant='outline' className='justify-start'>
                    <Users className='mr-2 h-4 w-4' />
                    Login
                  </Button>
                  <Button className='justify-start'>
                    <UserPlus className='mr-2 h-4 w-4' />
                    Cadastre-se
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
