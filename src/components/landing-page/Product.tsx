'use client';

import { Clock, User, Briefcase, MapPin, Calendar, Search, UserPlus, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Product() {
  const userSteps = [
    {
      icon: <UserPlus className='h-5 w-5' />,
      title: 'Criar uma conta',
      description: 'Cadastre-se gratuitamente em nossa plataforma',
    },
    {
      icon: <MapPin className='h-5 w-5' />,
      title: 'Configurar sua região',
      description: 'Informe sua localização para encontrar profissionais próximos',
    },
    {
      icon: <Search className='h-5 w-5' />,
      title: 'Encontrar profissionais',
      description: 'Busque profissionais disponíveis para atendimento',
    },
  ];

  const providerSteps = [
    {
      icon: <UserPlus className='h-5 w-5' />,
      title: 'Criar uma conta',
      description: 'Cadastre-se como prestador de serviços',
    },
    {
      icon: <Settings className='h-5 w-5' />,
      title: 'Configurar seu perfil',
      description: 'Defina sua região, serviços, valores e agenda',
    },
    {
      icon: <Briefcase className='h-5 w-5' />,
      title: 'Conectar com clientes',
      description: 'Receba solicitações de pessoas que precisam do seu serviço',
    },
  ];

  return (
    <>
      <section id='product' className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Como funciona</h2>
          <p className='text-muted-foreground'>Conheça como nossa plataforma funciona para todos os perfis</p>
        </div>

        <Tabs defaultValue='users' className='w-full mb-8'>
          <div className='flex justify-center mb-10'>
            <TabsList className='w-full max-w-md grid grid-cols-2'>
              <TabsTrigger value='users' className='text-center py-3 cursor-pointer'>
                <User className='h-4 w-4 mr-2 inline-block' />
                Para Usuários
              </TabsTrigger>
              <TabsTrigger value='providers' className='text-center py-3 cursor-pointer'>
                <Briefcase className='h-4 w-4 mr-2 inline-block' />
                Para Prestadores
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value='users'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {userSteps.map((step, index) => (
                <Card
                  key={index}
                  className='hover:-translate-y-1 transition-transform duration-200 flex flex-col'>
                  <CardHeader>
                    <CardTitle className='flex items-center justify-center gap-2'>
                      {step.icon}
                      Passo {index + 1}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='text-center flex-1 flex flex-col'>
                    <h3 className='font-medium mb-2'>{step.title}</h3>
                    <p className='mb-4 flex-1'>{step.description}</p>
                    <Button variant='default' className='w-full mt-auto'>
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='providers'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {providerSteps.map((step, index) => (
                <Card
                  key={index}
                  className='hover:-translate-y-1 transition-transform duration-200 flex flex-col'>
                  <CardHeader>
                    <CardTitle className='flex items-center justify-center gap-2'>
                      {step.icon}
                      Passo {index + 1}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='text-center flex-1 flex flex-col'>
                    <h3 className='font-medium mb-2'>{step.title}</h3>
                    <p className='mb-4 flex-1'>{step.description}</p>
                    <Button variant='default' className='w-full mt-auto'>
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
