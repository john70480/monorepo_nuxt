import {
  DetailType,
  HistoryCardModel,
  HistoryModel,
  HistoryReserveModel,
} from "@tg/web-mobile/core/models/HistoryModel";

export const mockHistory: HistoryModel[] = [
  {
    grandTotal: 108057185,
    actual: 0,
    income: -99251291.56,
    date: "05/20",
  },
  {
    grandTotal: 108057185,
    actual: 120111,
    income: -99291.56,
    date: "05/19",
  },
  {
    grandTotal: 108057185,
    actual: 120000111,
    income: 0,
    date: "05/18",
  },
  {
    grandTotal: 0,
    actual: 120,
    income: 51291.56,
    date: "05/17",
  },
  {
    grandTotal: 0,
    actual: 120000111,
    income: -99251291.56,
    date: "05/16",
  },
  {
    grandTotal: 108057185,
    actual: 0,
    income: 51291.56,
    date: "05/15",
  },
  {
    grandTotal: 57185,
    actual: 0,
    income: 99251291.56,
    date: "05/14",
  },
  {
    grandTotal: 0,
    actual: 120000111,
    income: 291.56,
    date: "05/13",
  },
];

export const mockHistoryDetail: Array<HistoryCardModel> = [
  {
    title: "TG平台.足球",
    num: "2",
    subtitle: "华沙普洛克U19(主)",
    player1: {
      name: "华沙普洛克U19(主)",
      score: 0,
    },
    player2: {
      name: "洛兹U19",
      score: 0,
    },
    summary: 118417165,
    isEnd: false,
    dType: DetailType.RESERVE,
  },
  {
    title: "TG平台.足球",
    num: "2",
    subtitle: "华沙普洛克U19(主)",
    player1: {
      name: "华沙普洛克U19(主)",
      score: 2,
    },
    player2: {
      name: "洛兹U19",
      score: 0,
    },
    summary: -1000,
    isEnd: true,
    dType: DetailType.RESERVE,
  },
];

export const mockReserve: Array<HistoryReserveModel> = [
  {
    title: "沙巴体育.XX",
    time: "2022-05-21 14:00",
    orderNum: 12345671234567123,
    handicap: "xxx",
    rate: 241,
    memo: "xxxxxxx",
    price: 1000,
    summary: 0,
  },
  {
    title: "WM真人(XXX)",
    time: "2022-05-21 14:00",
    orderNum: 12345671234567123,
    handicap: "xxx",
    rate: 241,
    memo: "xxxxxxx",
    price: 1000,
    summary: 0,
  },
];
