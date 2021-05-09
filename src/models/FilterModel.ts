import { Filter, FilterRequest } from "../types";

class FilterModel {
  private readonly data: Filter[] = [
    {
      title: "브랜드",
      options: ["브랜드 1", "브랜드 2", "브랜드 3"],
    },
    {
      title: "색상",
      options: ["red", "blue", "green", "white", "black"],
    },
    {
      title: "사이즈",
      options: ["85", "90", "95", "100", "105", "110"],
    },
  ];

  public get({ keyword }: FilterRequest): Promise<{ data: Filter[] }> {
    return new Promise((resolve) => {
      if (keyword === undefined) throw new Error("keyword empty");
      setTimeout(() => resolve({ data: this.data }), 200);
    });
  }
}

export default new FilterModel();
