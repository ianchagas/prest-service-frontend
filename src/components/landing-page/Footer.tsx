'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { FaSquareXTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className='pt-12 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>PrestService</h3>
            <p className='text-muted-foreground mb-4'>
              Conectamos profissionais qualificados com pessoas que precisam de seus serviços em todo o
              Brasil.
            </p>
            <div className='flex space-x-3'>
              <Button variant='ghost' size='icon'>
                <FaFacebook className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Button>
              <Button variant='ghost' size='icon'>
                <FaInstagram className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Button>
              <Button variant='ghost' size='icon'>
                <FaSquareXTwitter className='h-6 w-6' />
                <span className='sr-only'>Twitter</span>
              </Button>
              <Button variant='ghost' size='icon'>
                <FaLinkedin className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>Links Rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/#home' className='text-muted-foreground hover:text-primary transition-colors'>
                  Início
                </Link>
              </li>
              <li>
                <Link href='/#sobre' className='text-muted-foreground hover:text-primary transition-colors'>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href='/#servicos'
                  className='text-muted-foreground hover:text-primary transition-colors'>
                  Serviços
                </Link>
              </li>
              <li>
                <Link href='/termos' className='text-muted-foreground hover:text-primary transition-colors'>
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href='/privacidade'
                  className='text-muted-foreground hover:text-primary transition-colors'>
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>Contato</h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <MapPin className='h-5 w-5 mr-2 text-primary shrink-0 mt-0.5' />
                <span className='text-muted-foreground'>Av. Paulista, 1000, São Paulo - SP, 01310-100</span>
              </li>
              <li className='flex items-center'>
                <Phone className='h-5 w-5 mr-2 text-primary' />
                <span className='text-muted-foreground'>(11) 4002-8922</span>
              </li>
              <li className='flex items-center'>
                <Mail className='h-5 w-5 mr-2 text-primary' />
                <span className='text-muted-foreground'>contato@prestservice.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>Newsletter</h3>
            <p className='text-muted-foreground mb-4'>
              Inscreva-se para receber nossas atualizações e novidades.
            </p>
            <div className='flex space-x-2'>
              <Input type='email' placeholder='Seu e-mail' className='max-w-xs' />
              <Button type='submit' size='icon'>
                <Send className='h-4 w-4' />
                <span className='sr-only'>Enviar</span>
              </Button>
            </div>
          </div>
        </div>

        <Separator className='my-6' />

        <div className='text-center text-muted-foreground text-sm'>
          <p>&copy; {currentYear} PrestService. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
