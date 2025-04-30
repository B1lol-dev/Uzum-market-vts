// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

// assets
import searching_penguin_img from "../../assets/images/searching_penguin.png";

export const NotFound = (): string => {
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
        `)}
      </section>
    </main>
  `;
};
