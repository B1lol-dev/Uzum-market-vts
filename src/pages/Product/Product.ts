// compoonents
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

// assets
import star_icon from "../../assets/icons/star_icon.svg";

export const Product = (data: any): string => {
  console.log(data);

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
                                <div>
                                    ${data.images.map(
                                      (image: string): string => {
                                        return /*html*/ `
                                        <button type="button" class="h-[83px] w-[63px] rounded-2xl bg-um-athens-gray border-1 border-um-shark">
                                            <img src=${image} alt="product">
                                        </button>
                                        `;
                                      }
                                    )}
                                </div>
                                <img src=${data.images[0]} alt=${
                  data.title
                } class="bg-um-athens-gray w-[730px] h-[490px] rounded-3xl object-contain">
                            </div>
                        </div>
                        <div class="max-w-[381px] w-full">
                            <div class="py-6 px-5 rounded-3xl border-1 border-um-manatee">
                                <h1 class="font-bold text-3xl flex gap-2 items-start">${Number(
                                  data.price *
                                    (1 - data.discountPercentage / 100)
                                ).toFixed(
                                  2
                                )} USD <span class="text-base font-normal text-um-manatee line-through">${
                  data.price
                } USD</span> <span class="bg-um-lonestar text-xs text-um-nero flex items-center justify-center px-1.5 py-0.5 rounded-full ml-auto">-${Number(
                  data.discountPercentage
                ).toFixed(0)}%</span></h1>
                                <div class="bg-um-lonestar text-xs text-um-nero inline-flex items-center justify-center px-1.5 py-0.5 rounded-full mb-1">Super narx</div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `)}
            </section>
        </main>
    `;
};
