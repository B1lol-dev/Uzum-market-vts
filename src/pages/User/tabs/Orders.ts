// declorations
declare global {
  interface Window {
    handleUserOrdersFilter(_self: HTMLButtonElement): void;
  }
}
const params = new URLSearchParams(location.search);

export const Orders = (): string => {
  window.handleUserOrdersFilter = (_self: HTMLButtonElement): void => {
    const btns_wrapper = _self.parentElement! as HTMLUListElement;

    btns_wrapper.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("text-um-nero!", "bg-um-shark");
    });

    _self.classList.add("text-um-nero!", "bg-um-shark");

    location.search = `?filter=${_self.dataset.filter}`;
  };

  return /*html*/ `
  <div>
    <ul class="flex items-center gap-3">
      <button type="button" class="px-4 py-2.5 bg-um-athens-gray text-um-shark rounded-full text-base ${
        params.get("filter") === "all" ? "text-um-nero! bg-um-shark" : ""
      }" onclick="window.handleUserOrdersFilter(this)" data-filter="all">Barcha buyurtmalar</button>
      <button type="button" class="px-4 py-2.5 bg-um-athens-gray text-um-shark rounded-full text-base ${
        params.get("filter") === "unfinished" ? "text-um-nero! bg-um-shark" : ""
      }" onclick="window.handleUserOrdersFilter(this)" data-filter="unfinished">To'lov qilinmagan</button>
      <button type="button" class="px-4 py-2.5 bg-um-athens-gray text-um-shark rounded-full text-base ${
        params.get("filter") === "current" || params.get("filter") === null
          ? "text-um-nero! bg-um-shark"
          : ""
      }" onclick="window.handleUserOrdersFilter(this)" data-filter="current">Faol</button>
    </ul>  
    <div class="w-full">
      ${
        params.get("filter") === "current" || params.get("filter") === null
          ? OrdersNothing()
          : params.get("filter") === "unfinished"
          ? OrdersNothing()
          : params.get("filter") === "all"
          ? OrdersNothing()
          : ""
      }
    </div>
  </div>
  `;
};

function OrdersNothing(): string {
  return /*html*/ `
    <div class="w-full h-[350px] p-16 rounded border-1 border-um-manatee flex flex-col items-center justify-center mt-6 gap-4">
      <h1 class="text-4xl font-bold text-um-shark text-center">Hech narsa yoʻq</h1>
      <p class="text-um-shark max-w-[431px] text-center font-medium">Sizda faol buyurtma mavjud emas! Barcha kerakli narsalarni topish uchun qidirishdan foydalaning!</p>
      <a href="/" onclick="location.href='/'"><button type="button" class="px-5 py-2.5 rounded-xl min-h-12 text-base font-semibold bg-um-lonestar text-um-nero">Xaridlarni boshlash</button></a>
      <a href="/" onclick="location.href='/'"><button type="button" class="px-5 py-2.5 rounded-xl min-h-12 text-base font-semibold hover:bg-um-athens-gray">Bosh sahifaga qaytish</button></a>
    </div>
  `;
}
