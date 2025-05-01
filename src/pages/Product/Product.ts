// compoonents
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProductRight } from "./components/ProductRight";

// assets
import star_icon from "../../assets/icons/star_icon.svg";
import { ReviewCard } from "./components/ReviewCard";

// interfaces
declare global {
  interface Window {
    productChangeImage(src: string, self: HTMLButtonElement): void;
  }
}

export const Product = (data: any): string => {
  window.productChangeImage = (src: string, self: HTMLButtonElement): void => {
    const product_page_img = document.getElementById(
      "product_page_img"
    ) as HTMLImageElement;
    if (product_page_img) {
      product_page_img.src = src;

      const buttons = self.parentElement!.querySelectorAll("button");
      buttons.forEach((button: any): void => {
        button.classList.remove("border-1", "border-um-shark");
        button.classList.remove("first:border-1", "first:border-um-shark");
      });
      self.classList.add("border-1", "border-um-shark");
    }
  };

  return /*html*/ `
        ${Header()}
        <main>
            <section>
                ${Container(/*html*/ `
                    <div class="flex justify-between gap-10">
                        <div>
                            <h1 class="text-2xl font-semibold">${
                              data.title
                            }</h1>
                            <div class="flex items-center gap-3 mt-2">
                                <div class="flex items-center">
                                    ${Array(Math.round(data.rating))
                                      .fill("")
                                      .map(() => {
                                        return /*html*/ `
                                            <img src=${star_icon} alt="star" height="14" width="14">
                                        `;
                                      })
                                      .join("")}
                                </div>
                                <ul class="flex list-disc gap-5 text-um-manatee text-sm">
                                    <span>${data.rating} (${
                  data.reviews.length
                } sharh)</span>
                                    <li>
                                        ${data.images.length} fotosurat
                                    </li>
                                    <li>
                                        ${data.reviews.length * 3}+ buyurtma
                                    </li>
                                </ul>
                            </div>
                            <div class="flex gap-3 mt-4">
                                <div class="flex flex-col gap-3">
                                    ${data.images
                                      .map((image: string): string => {
                                        return /*html*/ `
                                        <button type="button" class="h-[83px] w-[63px] rounded-2xl bg-um-athens-gray first:border-1 first:border-um-shark" onclick="window.productChangeImage(this.children[0].src, this)">
                                            <img src=${image} alt="product">
                                        </button>
                                        `;
                                      })
                                      .join("")}
                                </div>
                                <img src=${data.images[0]} alt=${
                  data.title
                } id="product_page_img" class="bg-um-athens-gray w-[730px] h-[490px] rounded-3xl object-contain">
                            </div>
                            <div class="mt-10">
                              <h1 class="flex items-center text-2xl font-semibold text-um-shark gap-2">${
                                data.rating
                              } <span class="flex">${Array(
                  Math.round(data.rating)
                )
                  .fill("")
                  .map(
                    () =>
                      /*html*/ `<img src=${star_icon} alt="star" height="16" width="16">`
                  )
                  .join(
                    ""
                  )}</span> <span class="text-sm text-um-manatee underline">${
                  data.reviews.length
                } sharh</span></h1>
                              <div class="grid grid-cols-2 gap-3 mt-5 overflow-y-scroll h-[212px]">
                                ${data.reviews
                                  .map((review: any) => ReviewCard(review))
                                  .join("")}
                              </div>
                              <button type="button" class="bg-um-athens-gray w-full my-5 py-5 rounded-xl text-base font-semibold" onclick="this.previousElementSibling.classList.contains('h-[212px]') ? this.previousElementSibling.classList.remove('h-[212px]') : this.previousElementSibling.classList.add('h-[212px]')">Hamma sharhlarni ko'rish</button>
                            </div>
                        </div>
                        ${ProductRight(data)}
                    </div>
                `)}
            </section>
        </main>
    `;
};
