export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 'classic',
    name: 'BBQ Brasa Clássico',
    description:
      'Blend 120g clássico artesanal na brasa, pão brioche, queijo cheddar, alface, tomate e molho especial.',
    price: 'R$ 14,99',
    image:
      '/hamburguer normal editada.jpg',
    tags: ['Carne 120g', 'Cheddar', 'Brioche'],
    badge: 'Mais pedido',
  },
  {
    id: 'baconz',
    name: 'BBQ Brasa Duplo',
    description:
      'Blend 120g Duplo artesanal na brasa, pão brioche, queijo cheddar ou cheddar, alface, tomate e molho especial.',
    price: 'R$ 20,99',
    image:
      '/hero-burguer.jpeg',
    tags: ['120g', 'blend artesanal', 'BBQ'],
  },
  {
    id: 'salad',
    name: 'BBQ Brasa Bacon Clássico',
    description:
      'Blend 120g Clássico artesanal na brasa, pão brioche, queijo cheddar, alface, tomate, bacon em cubos e molho especial.',
    price: 'R$ 19,99',
    image:
      '/hamburguer bacon editada.jpg',
    tags: ['Bacon', '240g blend', 'BBQ'],
  },
  {
    id: 'batata',
    name: 'Batata Bacon & Cheddar',
    description:
      'Deliciosa Batata Frita com Bastante Cheddar cremoso e Bacon',
    price: 'R$ 24,99',
    image:
      'https://images.pexels.com/photos/37121076/pexels-photo-37121076.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Cheddar', 'Bacon',],
    badge: '',
  },
];

export const highlights = [
  {
    icon: 'Flame',
    title: 'Fogo de verdade',
    text: 'Carne selada em brasa. Sabor defumado que só fogo de verdade entrega.',
  },
  {
    icon: 'CalendarDays',
    title: 'Todos os dias',
    text: 'Aberto de segunda a segunda, das 18h às 00h. Sua fome não tem dia de folga.',
  },
  {
    icon: 'Wallet',
    title: 'Cabe no bolso',
    text: 'Hambúrguer artesanal de qualidade a partir de R$ 14,99. Sabor sem pesar.',
  },
];
