import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

// assets
import main_page_banner_img from "../../assets/banners/main_page_banner.png";
import { ProductCard } from "../../components/Cards/ProductCard";

export const Home = (): string => {
  setTimeout(() => {
    const home_products_wrapper = document.getElementById(
      "home_products_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/products`)
      .then((res) => {
        const products = res.data.products;

        const productsHTML = products
          .map((product: any) => ProductCard(product))
          .join("");
        home_products_wrapper.innerHTML = productsHTML;
      })
      .catch((err) => console.error(err));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main>
      <section>
        ${Container(/*html*/ `
          <img src=${main_page_banner_img} alt="main page banner" class="rounded-xl max-w-[1240px] w-full h-[413px]">  
        `)}
      </section>
      <section class="pt-12">
          ${Container(/*html*/ `
            <div id="home_products_wrapper" class="grid justify-items-center grid-cols-5 gap-x-5 gap-y-8">
            
            </div>  
          `)}
      </section>
    </main>
    ${Footer()}
  `;
};
