import { createRouter } from "routerjs";

// pages
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/NotFound";

export const Router = (root: HTMLDivElement) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
