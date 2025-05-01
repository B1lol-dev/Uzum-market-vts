// components
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const Cart = () => {
  return /*html*/ `
    ${Header()}
    <main>
        <section>
            ${Container(/*html*/ `
                    
            `)}
        </section>
    </main>
    ${Footer()}
  `;
};
