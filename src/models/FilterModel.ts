import { Filter, FilterRequest } from "../types";

class FilterModel {
  private readonly data: Filter[] = [
    {
      title: "브랜드",
      name: "brand",
      options: ["burberry", "hazzys", "karenin"],
    },
    {
      title: "색상",
      name: "color",
      options: ["red", "blue", "green", "white", "black"],
    },
    {
      title: "사이즈",
      name: "size",
      options: ["85", "90", "95", "100", "105", "110"],
    },
  ];

  public get({ keyword }: FilterRequest): Promise<{ data: Filter[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (keyword === undefined) throw new Error("keyword empty");
        const response = keyword.includes("코트")
          ? { data: this.data }
          : { data: [] };
        console.log("GET filter response :");
        console.log(response);
        return resolve(response);
      }, 200);
    });
  }
}

export default new FilterModel();
