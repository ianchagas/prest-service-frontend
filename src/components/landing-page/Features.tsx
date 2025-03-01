'use client';

import { Clock, ArrowRight, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Features() {
  return (
    <>
      <section id='features' className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer'>
          <Card className='bg-card hover:-translate-y-1 transition-transform duration-200'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Clock className='h-5 w-5' />
                Para Prestadores
              </CardTitle>
              <CardDescription>Ganhe dinheiro oferecendo seus serviços</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                <li className='flex items-start gap-2'>
                  <ArrowRight className='mt-1 h-4 w-4' />
                  <span>Cadastre-se gratuitamente</span>
                </li>
                <li className='flex items-start gap-2'>
                  <ArrowRight className='mt-1 h-4 w-4' />
                  <span>Configure sua agenda</span>
                </li>
                <li className='flex items-start gap-2'>
                  <ArrowRight className='mt-1 h-4 w-4' />
                  <span>Receba pagamentos seguros</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className='bg-card hover:-translate-y-1 transition-transform duration-200'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Users className='h-5 w-5' />
                Para Usuários
              </CardTitle>
              <CardDescription>Encontre profissionais qualificados próximos a você</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                <li className='flex items-start gap-2'>
                  <ArrowRight className='mt-1 h-4 w-4' />
                  <span>Cadastro gratuito</span>
                </li>
                <li className='flex items-start gap-2'>
                  <ArrowRight className='mt-1 h-4 w-4' />
                  <span>Busca por localização</span>
                </li>
                <li className='flex items-start gap-2'>
                  <ArrowRight className='mt-1 h-4 w-4' />
                  <span>Avaliações reais</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
