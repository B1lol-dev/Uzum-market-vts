import axios from "axios";
import { API_URL } from "../../constants/constants";
import { register } from "swiper/element/bundle";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductCard } from "../../components/Cards/ProductCard";

// skeletons
import { ProductCardSkeleton } from "../../components/skeletons/Cards/ProductCardSkeleton";

// assets
import main_page_banner_img from "../../assets/banners/main_page_banner.png";
import main_page_banner_img_2 from "../../assets/banners/main_page_banner_2.jpg";
import main_page_banner_img_3 from "../../assets/banners/main_page_banner_3.jpg";
import main_page_banner_img_4 from "../../assets/banners/main_page_banner_4.jpg";

// register swiper
register();

export const Home = (): string => {
  setTimeout(() => {
    const home_products_wrapper = document.getElementById(
      "home_products_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/products?limit=100`)
      .then((res) => {
        const products = res.data.products;

        const productsHTML = products
          .map((product: any) => ProductCard(product))
          .join("");
        home_products_wrapper.innerHTML = productsHTML;
      })
      .catch((err) => console.error(err));
  }, 0);

  const bannerImages = [
    main_page_banner_img,
    main_page_banner_img_2,
    main_page_banner_img_3,
    main_page_banner_img_4,
  ];

  return /*html*/ `
    ${Header()}
    <main>
      <section>
        ${Container(/*html*/ `
          <swiper-container navigation="true" pagination="true" class="rounded-xl max-w-[1240px] w-full h-[413px] overflow-hidden">
            ${bannerImages
              .map(
                (img: string) => /*html*/ `
                  <swiper-slide lazy="true" class="w-full">
                    <img src=${img} loading="lazy" class="w-full" />
                  </swiper-slide>
                `
              )
              .join("")}
          </swiper-container>
        `)}
      </section>
      <section class="pt-12">
          ${Container(/*html*/ `
            <div id="home_products_wrapper" class="grid justify-items-center grid-cols-5 gap-x-5 gap-y-8">
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
