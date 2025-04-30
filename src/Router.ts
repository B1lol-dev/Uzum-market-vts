import { createRouter } from "routerjs";
import axios from "axios";
import { API_URL } from "./constants/constants";

// pages
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/NotFound";
import { Product } from "./pages/Product/Product";

export const Router = (root: HTMLDivElement) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .get("/product/:id", (req) => {
      const id = req.get("id");

      axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => {
          const { data } = res;
          root.innerHTML = Product(data);
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
