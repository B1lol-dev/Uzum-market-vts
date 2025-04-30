import axios from "axios";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { API_URL } from "../../constants/constants";

export const Product = (id: any): string => {
  axios.get(`${API_URL}/products/${id}`).then((res) => {
    const { data } = res;
    console.log(data);
  });

  return /*html*/ `
        ${Header()}
        <main>
            <section>
                ${Container(/*html*/ `
                    <div>
                        
                    </div>
                `)}
            </section>
        </main>
    `;
};
