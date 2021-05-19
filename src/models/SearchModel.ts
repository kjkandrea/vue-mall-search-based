import { Product, SearchRequest } from "../types/model";

class SearchModel {
  private readonly data: Product[] = [
    {
      title: "트랜치 코트",
      price: 950000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 85,
      color: "red",
      productUrl: "",
    },
    {
      title: "버버리 코트",
      price: 640000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 90,
      color: "blue",
      productUrl: "",
    },
    {
      title: "멋진 코트",
      price: 240000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 100,
      color: "green",
      productUrl: "",
    },
    {
      title: "예쁜 코트",
      price: 350000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 105,
      color: "white",
      productUrl: "",
    },
    {
      title: "편한 코트",
      price: 340000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 110,
      color: "black",
      productUrl: "",
    },
    {
      title: "어려운이름 코트",
      price: 530000,
      imageUrl: "https://i.imgur.com/MTGMUN0.jpg",
      size: 90,
      color: "red",
      productUrl: "",
    },
  ];

  public get(request: SearchRequest): Promise<{ data: Product[] }> {
    const { keyword } = request;
    return new Promise((resolve) => {
      setTimeout(() => {
        if (keyword === undefined) throw new Error("keyword empty");
        const keywordResult = this.keywordSearch(keyword);
        console.log("GET search response : ");
        console.log(keywordResult);
        return resolve({ data: keywordResult });
      }, 200);
    });
  }

  private keywordSearch(keyword: string): Product[] {
    return this.data.filter(({ title }) => title.includes(keyword));
  }
}

export default new SearchModel();
