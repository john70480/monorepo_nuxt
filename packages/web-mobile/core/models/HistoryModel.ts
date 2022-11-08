export type HistoryModel = {
  id?: number;
  grandTotal: number;
  actual: number;
  income: number;
  timestamp?: number;
  date?: string;
};

export type HistoryCardModel = {
  title: string;
  num: string;
  subtitle: string;
  player1: PlayerInfo;
  player2: PlayerInfo;
  summary: number;
  isEnd: boolean;
  dType: DetailType;
};

export enum DetailType {
  ORDER = "order-detail",
  RESERVE = "reserve-detail",
}

export type PlayerInfo = {
  name: string;
  score: number;
};

export type HistoryReserveModel = {
  title: string;
  time: string;
  orderNum: number;
  handicap: string;
  rate: number;
  memo: string;
  price: number;
  summary: number;
};
