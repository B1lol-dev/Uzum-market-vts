import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export const Product = (data: any): string => {
  return /*html*/ `
        ${Header()}
        <main>
            <section>
                ${Container(/*html*/ `
                    <div class="flex justify-between gap-10">
                        <div>
                            <h1></h1>
                        </div>
                        <div></div>
                    </div>
                `)}
            </section>
        </main>
    `;
};
