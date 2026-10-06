import { Bebida, Extra, ItemPedido, Pedido, Usuario  } from '../types/cafeteria.type';

export const cardapio: Bebida[] = [
  { id: 1, name: 'Café Expresso', prices: { P: 2.5, M: 3.0, G: 3.5 } },
  { id: 2, name: 'Café com Leite', prices: { P: 3.5, M: 4.0, G: 4.5 } },
  { id: 3, name: 'Cappuccino', prices: { P: 4.0, M: 4.5, G: 5.0 } },
  { id: 4, name: 'Chá Verde', prices: { P: 2.5, M: 3.0, G: 3.5 } },
  { id: 5, name: 'Chá Preto', prices: { P: 2.5, M: 3.0, G: 3.5 } },
  { id: 6, name: 'Suco de Laranja', prices: { P: 4.0, M: 4.5, G: 5.0 } },
  { id: 7, name: 'Suco de Abacaxi', prices: { P: 4.5, M: 5.0, G: 5.5 } }
];

export const extras: Extra[] = [
  { id: 1, name: 'Leite', price: 0.5 },
  { id: 2, name: 'Açúcar', price: 0.2 },
  { id: 3, name: 'Chantilly', price: 1.0 },
  { id: 4, name: 'Canela', price: 0.3 },
  { id: 5, name: 'Gelo', price: 0.2 }
];