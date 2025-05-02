// assets
import empty_card_img from "../../../assets/images/empty_cart.png";

// declorations
declare global {
  interface Window {
    handleUserReviewsFilter(_self: HTMLButtonElement): void;
  }
}
const params = new URLSearchParams(location.search);

export const Reviews = (): string => {
  window.handleUserReviewsFilter = (_self: HTMLButtonElement): void => {
    const btns_wrapper = _self.parentElement! as HTMLUListElement;

    btns_wrapper.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("text-um-nero!", "bg-um-shark");
    });

    _self.classList.add("text-um-nero!", "bg-um-shark");

    location.search = `filter=${_self.dataset.filter}`;
  };

  return /*html*/ `
  <div>
    <ul class="flex items-center gap-3">
      <button type="button" class="px-4 py-2.5 bg-um-athens-gray text-um-shark rounded-full text-base ${
        params.get("filter") === "waiting" || params.get("filter") === null
          ? "text-um-nero! bg-um-shark"
          : ""
      }" onclick="window.handleUserReviewsFilter(this)" data-filter="waiting">Barcha buyurtmalar</button>
      <button type="button" class="px-4 py-2.5 bg-um-athens-gray text-um-shark rounded-full text-base ${
        params.get("filter") === "rated" ? "text-um-nero! bg-um-shark" : ""
      }" onclick="window.handleUserReviewsFilter(this)" data-filter="rated">Faol</button>
    </ul>  
    <div class="w-full">
      ${
        params.get("filter") === "waiting" || params.get("filter") === null
          ? ReviewsNothing()
          : params.get("filter") === "rated"
          ? ReviewsNothing()
          : ""
      }
    </div>
  </div>
  `;
};

function ReviewsNothing(): string {
  return /*html*/ `
      <div class="w-full h-[300px] p-16 rounded flex flex-col items-center justify-center mt-6 gap-4">
        <img src=${empty_card_img} alt="Nothing" width="192" height="192">
        <h1 class="text-2xl font-bold text-um-shark text-center">Bu yerda xaridlar haqidagi sharhlaringiz paydo bo‘ladi</h1>
        <p class="text-um-shark text-center font-medium">Taassurotlar bilan bo‘lishing — bu boshqa xaridorlarga tanlashda yordam beradi</p>
        <a href="/" onclick="location.href='/'"><button type="button" class="px-5 py-2.5 rounded-xl min-h-12 text-base font-semibold bg-um-lonestar text-um-nero">Bosh sahifa</button></a>
      </div>
    `;
}
