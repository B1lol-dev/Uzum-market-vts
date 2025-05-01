import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProductCardSkeleton } from "../../components/skeletons/Cards/ProductCardSkeleton";
import { ProductCard } from "../../components/Cards/ProductCard";

export const Search = (query: any): string => {
  console.log(query);
  setTimeout(() => {
    const search_products_wrapper = document.getElementById(
      "search_products_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/products?limit=0`)
      .then((res) => {
        const products = res.data.products;
        const filtredProducts = products.filter((product: any) => {
          return (
            String(product.title).toLowerCase().includes(query.toLowerCase()) ||
            String(product.description)
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            String(product.brand).toLowerCase().includes(query.toLowerCase())
          );
        });
        console.log(products[0]);

        const productsHTML = filtredProducts
          .map((product: any) => ProductCard(product))
          .join("");
        search_products_wrapper.innerHTML = productsHTML;
      })
      .catch((err) => console.error(err));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main>
        <section>
            ${Container(/*html*/ `
                <div id="search_products_wrapper" class="grid justify-items-center grid-cols-5 gap-x-5 gap-y-8">
                    ${Array(20)
                      .fill("")
                      .map(() => ProductCardSkeleton())
                      .join("")}
                </div>  
            `)}
        </section>
    </main>
  `;
};
