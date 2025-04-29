import "./style.css";

import { Router } from "./Router";

const root = document.getElementById("app")! as HTMLDivElement;

// setting router
Router(root);

window.addEventListener("load", () => {
  // setting scroll to top button
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
      root.insertAdjacentHTML(
        "beforeend",
        /*html*/ `
        <button onclick="window.scrollTo(0,0)" type="button" id="scroll_to_top_btn" class="fixed bottom-6 right-6 bg-um-lonestar text-white rounded-full h-12 w-12 flex items-center justify-center">
            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2175 14.2257C24.9615 14.2257 24.7055 14.1277 24.5105 13.9327L13.2175 2.63974L1.92453 13.9327C1.53353 14.3237 0.901535 14.3237 0.510535 13.9327C0.119535 13.5417 0.119535 12.9097 0.510535 12.5187L12.0085 1.02074C12.6745 0.35474 13.7605 0.35474 14.4265 1.02074L25.9245 12.5187C26.3155 12.9097 26.3155 13.5417 25.9245 13.9327C25.7295 14.1277 25.4735 14.2257 25.2175 14.2257Z" fill="white"/>
            </svg>
        </button>
      `
      );
    } else {
      document.getElementById("scroll_to_top_btn")?.remove();
    }
  });
});
