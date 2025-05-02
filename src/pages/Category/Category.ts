import axios from "axios";
import { API_URL, PRODUCTS_COUNT_LIMIT } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProductCardSkeleton } from "../../components/skeletons/Cards/ProductCardSkeleton";
import { ProductCard } from "../../components/Cards/ProductCard";

export const Category = (category: any): string => {
  setTimeout(() => {
    const category_products_wrapper = document.getElementById(
      "category_products_wrapper"
    )! as HTMLDivElement;

    const category_products_seemore = document.getElementById(
      "category_products_seemore"
    )! as HTMLButtonElement;

    axios
      .get(
        `${API_URL}/products/category/${category}?limit=${PRODUCTS_COUNT_LIMIT}`
      )
      .then((res) => {
        const { data } = res;
        const TOTAL = data.total;
        const products = data.products;

        const productsHTML = products
          .map((product: any) => ProductCard(product))
          .join("");
        category_products_wrapper.innerHTML = productsHTML;

        // see more button
        let limit_counter: number = 0;
        category_products_seemore.addEventListener("click", () => {
          limit_counter++;
          if (PRODUCTS_COUNT_LIMIT * limit_counter >= TOTAL) {
            category_products_seemore.remove();
          }

          category_products_wrapper.innerHTML += Array(PRODUCTS_COUNT_LIMIT)
            .fill("")
            .map(() => ProductCardSkeleton())
            .join("");

          axios
            .get(
              `${API_URL}/products/category/${category}?limit=${PRODUCTS_COUNT_LIMIT}&skip=${
                PRODUCTS_COUNT_LIMIT * limit_counter
              }`
            )
            .then((res) => {
              const products = res.data.products;

              const productsHTML = products
                .map((product: any) => ProductCard(product))
                .join("");
              category_products_wrapper.innerHTML += productsHTML;
            })
            .catch((err) => console.error(err))
            .finally(() => {
              category_products_wrapper
                .querySelectorAll("[data-skeleton]")!
                .forEach((skelet) => skelet.remove());
            });
        });
      });
  }, 0);

  return /*html*/ `
    ${Header()}
    <main>
        <section>
            ${Container(/*html*/ `
                <div id="category_products_wrapper" class="grid justify-items-center grid-cols-5 gap-x-5 gap-y-8">
                    ${Array(PRODUCTS_COUNT_LIMIT)
                      .fill("")
                      .map(() => ProductCardSkeleton())
                      .join("")}
                </div>  
                <button type="button" class="block mx-auto bg-um-athens-gray px-[300px] py-[7px] h-14 rounded-lg mt-10" id="category_products_seemore">Yana koʻrsatish ${PRODUCTS_COUNT_LIMIT}</button>   
            `)}
        </section>
    </main>
  `;
};
