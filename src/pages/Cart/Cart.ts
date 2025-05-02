import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CartProductCard } from "./components/Cards/CartProductCard";
import { CartProductCardSkeleton } from "./skeleton/CartProductCardSkeleton";
import { ProductCard } from "../../components/Cards/ProductCard";
import { ProductCardSkeleton } from "../../components/skeletons/Cards/ProductCardSkeleton";

// utils
import { Auth } from "../../utils/auth";

// declorations
const auth = new Auth();

export const Cart = () => {
  setTimeout(() => {
    const cart_products_wrapper = document.getElementById(
      "cart_products_wrapper"
    )! as HTMLDivElement;

    const cart_title_count = document.getElementById(
      "cart_title_count"
    )! as HTMLSpanElement;

    auth.getMyInfo().then((res) => {
      axios
        .get(`${API_URL}/carts/${res.data.id}`)
        .then((res) => {
          const products = res.data.products;

          cart_title_count.innerText = products.length + " mahsulot";

          const productsHTML = products
            .map((product: any) => CartProductCard(product))
            .join("");
          cart_products_wrapper.innerHTML = productsHTML;

          setInterval(() => {
            cart_title_count.innerText = `${cart_products_wrapper.children.length} mahsulot`;
          }, 1000);
        })
        .catch((err) => console.error(err));
    });

    // other
    const cart_other_products_wrapper = document.getElementById(
      "cart_other_products_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/products?limit=10`)
      .then((res) => {
        const products = res.data.products;

        const productsHTML = products
          .map((product: any) => ProductCard(product))
          .join("");
        cart_other_products_wrapper.innerHTML = productsHTML;
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
                      <h1 class="text-2xl font-bold text-um-shark">Savatingiz, <span id="cart_title_count" class="text-um-manatee">0 mahsulot</span></h1>
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
        <section class="mt-30">
          ${Container(/*html*/ `
            <div id="cart_other_products_wrapper" class="grid justify-items-center grid-cols-5 gap-x-5 gap-y-8">
              ${Array(20)
                .fill("")
                .map(() => ProductCardSkeleton())
                .join("")}
            </div>   
          `)}
        </section>
    </main>
    ${Footer()}
  `;
};
