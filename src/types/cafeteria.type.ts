export type Tamanho = 'P' | 'M' | 'G';

export interface Bebida {
  id: number;
  name: string;
  prices: Partial<Record<Tamanho, number>>;
}

export interface Extra {
  id: number;
  name: string;
  price: number;
}

export interface Usuario {
  id: number;
  name: string;
  pedidos?: Pedido[];
}

export interface Pedido {
  id: number;
  id_usuario: Usuario['id'];
  items: ItemPedido[];
  status: 'pendente' | 'em andamento' | 'concluido' | 'cancelado';
}

export interface ItemPedido {
  id: number;
  id_pedido: Pedido['id'];
  bebida: Bebida;
  size: Tamanho;
  extras?: Extra[];
  quantidade: number;
}