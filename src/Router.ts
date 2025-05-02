import { createRouter } from "routerjs";
import axios from "axios";
import { API_URL } from "./constants/constants";

// pages
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/NotFound";
import { Product } from "./pages/Product/Product";
import { Search } from "./pages/Search/Search";
import { Cart } from "./pages/Cart/Cart";
import { Category } from "./pages/Category/Category";
import { User } from "./pages/User/User";

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
        .catch(() => {
          root.innerHTML = NotFound();
        });
    })
    .get("/search/:query", (req) => {
      const query = req.get("query");
      root.innerHTML = Search(query);
    })
    .get("/cart", () => {
      root.innerHTML = Cart();
    })
    .get("/category/:category", (req) => {
      const category = req.get("category");
      root.innerHTML = Category(category);
    })
    .get("/user", () => {
      location.href = "/user/orders";
    })
    .get("/user/:tab", (req) => {
      const tab = req.get("tab");
      root.innerHTML = User(tab);
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
