import { Product } from "../types";

interface SearchModel {
  data: Product[];
}

const searchModel: SearchModel = {
  data: [
    {
      title: "트랜치 코트",
      price: 950000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 85,
      color: "red",
    },
    {
      title: "버버리 코트",
      price: 640000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 90,
      color: "blue",
    },
    {
      title: "멋진 코트",
      price: 240000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 100,
      color: "green",
    },
    {
      title: "예쁜 코트",
      price: 350000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 105,
      color: "white",
    },
    {
      title: "편한 코트",
      price: 340000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 110,
      color: "black",
    },
    {
      title: "어려운이름 코트",
      price: 530000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 90,
      color: "red",
    },
  ],
};
