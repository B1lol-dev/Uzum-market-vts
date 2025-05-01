// compoonents
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

// assets
import star_icon from "../../assets/icons/star_icon.svg";
import heart_icon from "../../assets/icons/heart_icon.svg";
import checkmark_icon from "../../assets/icons/checkmark_icon.svg";
import badge_bought_icon from "../../assets/icons/badge_bought_icon.png";

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
                                <div class="flex flex-col gap-3">
                                    ${data.images
                                      .map((image: string): string => {
                                        return /*html*/ `
                                        <button type="button" class="h-[83px] w-[63px] rounded-2xl bg-um-athens-gray first:border-1 first:border-um-shark">
                                            <img src=${image} alt="product">
                                        </button>
                                        `;
                                      })
                                      .join("")}
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
                                <div class="flex flex-col bg-um-athens-gray rounded-xl p-3 my-3!">
                                  <div class="flex justify-between">
                                    <button type="button" class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95 bg-um-nero!">24 oy</button>
                                    <button type="button" class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95">12 oy</button>
                                    <button type="button" class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95">6 oy</button>
                                    <button type="button" class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95">3 oy</button>
                                  </div>
                                  <div class="flex items-center gap-2 mt-2">
                                    <h3 class="bg-um-diesel text-base font-semibold rounded-md py-0.5 px-1.5">${Number(
                                      data.price / 24
                                    ).toFixed(2)}USD</h3>
                                    <span class="text-sm">x 24oy</span>
                                    <button type="button" class="ml-auto text-um-boulder">></button>
                                  </div>
                                </div>
                                <div class="flex mt-3 justify-between items-center gap-2">
                                  <button type="button" class="h-12 bg-um-athens-gray max-w-2xs rounded-xl text-base font-medium w-full flex items-center justify-center">1 klikda xarid qilish</button>
                                  <button type="button" class="h-12 bg-um-athens-gray max-w-12 rounded-xl text-base font-medium w-full flex items-center justify-center">
                                    <img src=${heart_icon} alt="heart">
                                  </button>
                                </div>
                                <button type="button" class="mt-3 bg-um-lonestar text-um-nero w-full rounded-xl py-4 text-base font-semibold">Savatga qoʻshish</button>
                                <div class="flex flex-col gap-2 mt-5">
                                  <div class="flex items-center gap-3 text-um-shark text-sm"><img src=${checkmark_icon} alt="✅" width="32" height="32"> ${
                  data.stock
                } dona xarid qilish mumkum</div>    
                                  <div class="flex items-center gap-3 text-um-shark text-sm"><img src=${badge_bought_icon} alt="🛍️" width="32" height="32"> Bu hafta ${Math.round(
                  data.reviews.length / 3
                )} kishi sotib oldi</div>    
                                </div>
                            </div>
                        </div>
                    </div>
                `)}
            </section>
        </main>
    `;
};
