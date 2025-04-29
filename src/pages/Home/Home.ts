// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

// assets
import main_page_banner_img from "../../assets/banners/main_page_banner.png";
import { Footer } from "../../components/Footer";

export const Home = (): string => {
  return /*html*/ `
    ${Header()}
    <main class="mt-6">
      <section>
        ${Container(/*html*/ `
          <img src=${main_page_banner_img} alt="main page banner" class="rounded-xl max-w-[1240px] w-full h-[413px]">  
        `)}
      </section>
    </main>
    ${Footer()}
  `;
};
