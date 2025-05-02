import axios from "axios";
import {
  API_URL,
  PRODUCTS_COUNT_LIMIT,
  PRODUCTS_LIMIT,
} from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/Cards/ProductCard";

// assets
import searching_penguin_img from "../../assets/images/searching_penguin.png";
import { ProductCardSkeleton } from "../../components/skeletons/Cards/ProductCardSkeleton";
import { Footer } from "../../components/Footer";

export const NotFound = (): string => {
  setTimeout(() => {
    const notfound_products_wrapper = document.getElementById(
      "notfound_products_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/products?limit=10`)
      .then((res) => {
        const products = res.data.products;

        const productsHTML = products
          .map((product: any) => ProductCard(product))
          .join("");
        notfound_products_wrapper.innerHTML = productsHTML;
      })
      .catch((err) => console.error(err));

    // see more button
    const notfound_products_seemore = document.getElementById(
      "notfound_products_seemore"
    )! as HTMLButtonElement;

    let limit_counter: number = 0;
    notfound_products_seemore.addEventListener("click", () => {
      limit_counter++;
      if (PRODUCTS_COUNT_LIMIT * limit_counter >= PRODUCTS_LIMIT) {
        notfound_products_seemore.remove();
      }

      notfound_products_wrapper.innerHTML += Array(PRODUCTS_COUNT_LIMIT)
        .fill("")
        .map(() => ProductCardSkeleton())
        .join("");

      axios
        .get(
          `${API_URL}/products?limit=${PRODUCTS_COUNT_LIMIT}&skip=${
            PRODUCTS_COUNT_LIMIT * limit_counter
          }`
        )
        .then((res) => {
          const products = res.data.products;

          const productsHTML = products
            .map((product: any) => ProductCard(product))
            .join("");
          notfound_products_wrapper.innerHTML += productsHTML;
        })
        .catch((err) => console.error(err))
        .finally(() => {
          notfound_products_wrapper
            .querySelectorAll("[data-skeleton]")!
            .forEach((skelet) => skelet.remove());
        });
    });
  }, 0);

  return /*html*/ `
    ${Header()}
    <main class="mt-50">
      <section>
        ${Container(/*html*/ `
          <div class="flex flex-col items-center justify-center">
            <img src=${searching_penguin_img} alt="Searching penguin" class="w-32 h-32">
            <h1 class="text-2xl font-semibold mt-6">Nimadir oʻxshamadi</h1>
            <p class="text-sm mt-2">Orqaga qaytib koʻring yoki asosiy sahifaga oʻting</p>
            <a href="/" onclick="location.pathname = '/'"><button type="button" class="mt-4 bg-um-athens-gray py-2.5 px-4 rounded-xl text-base">Bosh sahifaga</button></a>
          </div>
          <div id="notfound_products_wrapper" class="grid justify-items-center grid-cols-5 gap-x-5 gap-y-8 mt-30">
            ${Array(20)
              .fill("")
              .map(() => ProductCardSkeleton())
              .join("")}
          </div>  
          <button type="button" class="block mx-auto bg-um-athens-gray px-[300px] py-[7px] h-14 rounded-lg mt-10" id="notfound_products_seemore">Yana koʻrsatish ${PRODUCTS_COUNT_LIMIT}</button>
        `)}
      </section>
    </main>
    ${Footer()}
  `;
};
