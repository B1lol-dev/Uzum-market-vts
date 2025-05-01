import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CartProductCard } from "./components/Cards/CartProductCard";
import { CartProductCardSkeleton } from "./skeleton/CartProductCardSkeleton";

export const Cart = () => {
  setTimeout(() => {
    const cart_products_wrapper = document.getElementById(
      "cart_products_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/carts/1`)
      .then((res) => {
        const products = res.data.products;

        const productsHTML = products
          .map((product: any) => CartProductCard(product))
          .join("");
        cart_products_wrapper.innerHTML = productsHTML;
      })
      .catch((err) => console.error(err));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main>
        <section>
            ${Container(/*html*/ `
                <div class="flex">
                    <div>
                      <h1 id="cart_title" class="text-2xl font-bold text-um-shark">Savatingiz, <span class="text-um-manatee">0 mahsulot</span></h1>
                      <div id="cart_products_wrapper" class="flex flex-col p-4 gap-5 border-1 border-um-manatee rounded-[2px] mt-5">
                          ${Array(10)
                            .fill("")
                            .map(() => CartProductCardSkeleton())
                            .join("")}
                      </div>
                    </div>
                    <div>
                      
                    </div>
                </div>
            `)}
        </section>
    </main>
    ${Footer()}
  `;
};
