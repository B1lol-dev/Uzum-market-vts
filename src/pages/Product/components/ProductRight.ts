// assets
import heart_icon from "../../../assets/icons/heart_icon.svg";
import checkmark_icon from "../../../assets/icons/checkmark_icon.svg";
import badge_bought_icon from "../../../assets/icons/badge_bought_icon.png";
import uzum_card_img from "../../../assets/icons/payments/uzum_card.svg";
import uzum_nasiya_img from "../../../assets/icons/payments/uzun_nasiya.svg";
import uzum_bank_img from "../../../assets/icons/payments/uzum_bank.svg";
import uzcard_img from "../../../assets/icons/payments/uzcard.svg";
import humo_img from "../../../assets/icons/payments/humo.svg";
import mastercard_img from "../../../assets/icons/payments/mastercard.svg";
import cash_img from "../../../assets/icons/payments/cash.svg";
import star_icon from "../../../assets/icons/star_icon.svg";

export const ProductRight = (data: any): string => {
  const paymentMethods: string[] = [
    uzum_card_img,
    uzum_nasiya_img,
    uzum_bank_img,
    uzcard_img,
    humo_img,
    mastercard_img,
    cash_img,
  ];

  return /*html*/ `
<div class="max-w-[381px] w-full">
  <div class="py-6 px-5 rounded-3xl border-1 border-um-manatee">
    <h1 class="font-bold text-3xl flex gap-2 items-start">
      ${Number(data.price * (1 - data.discountPercentage / 100)).toFixed(2)}
      USD
      <span class="text-base font-normal text-um-manatee line-through"
        >${data.price} USD</span
      >
      <span
        class="bg-um-lonestar text-xs text-um-nero flex items-center justify-center px-1.5 py-0.5 rounded-full ml-auto"
        >-${Number(data.discountPercentage).toFixed(0)}%</span
      >
    </h1>
    <div
      class="bg-um-lonestar text-xs text-um-nero inline-flex items-center justify-center px-1.5 py-0.5 rounded-full mb-1"
    >
      Super narx
    </div>
    <div class="flex flex-col bg-um-athens-gray rounded-xl p-3 my-3!">
      <div class="flex justify-between">
        <button
          type="button"
          class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95 bg-um-nero!"
        >
          24 oy
        </button>
        <button
          type="button"
          class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95"
        >
          12 oy
        </button>
        <button
          type="button"
          class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95"
        >
          6 oy
        </button>
        <button
          type="button"
          class="w-full text-sm py-1 px-2 rounded-md bg-um-athens-gray brightness-95"
        >
          3 oy
        </button>
      </div>
      <div class="flex items-center gap-2 mt-2">
        <h3
          class="bg-um-diesel text-base font-semibold rounded-md py-0.5 px-1.5"
        >
          ${Number(data.price / 24).toFixed(2)}USD
        </h3>
        <span class="text-sm">x 24oy</span>
        <button type="button" class="ml-auto text-um-boulder">></button>
      </div>
    </div>
    <div class="flex mt-3 justify-between items-center gap-2">
      <button
        type="button"
        class="h-12 bg-um-athens-gray max-w-2xs rounded-xl text-base font-medium w-full flex items-center justify-center"
      >
        1 klikda xarid qilish
      </button>
      <button
        type="button"
        class="h-12 bg-um-athens-gray max-w-12 rounded-xl text-base font-medium w-full flex items-center justify-center"
      >
        <img src="${heart_icon}" alt="heart" />
      </button>
    </div>
    <button
      type="button"
      class="mt-3 bg-um-lonestar text-um-nero w-full rounded-xl py-4 text-base font-semibold"
    >
      Savatga qoʻshish
    </button>
    <div class="flex flex-col gap-2 mt-5">
      <div class="flex items-center gap-3 text-um-shark text-sm">
        <img src="${checkmark_icon}" alt="✅" width="32" height="32" /> ${
    data.stock
  } dona xarid qilish mumkum
      </div>
      <div class="flex items-center gap-3 text-um-shark text-sm">
        <img src="${badge_bought_icon}" alt="🛍️" width="32" height="32" /> Bu
        hafta ${Math.round(data.reviews.length / 3)} kishi sotib oldi
      </div>
    </div>
  </div>
  <div class="py-6 px-5 rounded-3xl border-1 border-um-manatee mt-5">
    <div class="border-b-1 border-um-boulder pb-3">
      <h3
        class="flex justify-between items-start text-sm text-um-shark font-bold gap-0.5"
      >
        Yetkazib berish 1 kundan boshlab
        <span
          class="text-xs font-medium text-um-nero bg-um-lonestar flex items-center justify-center text-nowrap rounded-xl px-2 py-0.5"
          >Uzum Market ombori</span
        >
      </h3>
      <p class="text-sm text-um-boulder mt-1">
        Uzum buyurtmalarni topshirish punktida yoki kuryer orqali
      </p>
    </div>
    <div class="border-b-1 border-um-boulder py-3">
      <h3
        class="flex justify-between items-start text-sm text-um-shark font-bold gap-0.5"
      >
        Qulay usulda xavfsiz toʻlov
      </h3>
      <p class="text-sm text-um-boulder mt-1">
        Karta orqali, naqd pulda yoki boʻlib toʻlang
      </p>
      <div class="flex justify-between h-9 mt-2">
        ${paymentMethods
          .map(
            (payement) => /*html*/ `<img
          src="${payement}"
          alt="payement method"
          class="h-full"
        />`
          )
          .join("")}
      </div>
    </div>
    <div class="pt-3">
      <h3
        class="flex justify-between items-start text-sm text-um-shark font-bold gap-0.5"
      >
        Qaytarish oson va tez
      </h3>
      <p class="text-sm text-um-boulder mt-1">
        Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz.
        <a href="#" class="text-um-lonestar">Batafsil</a>
      </p>
    </div>
  </div>
  <div class="py-6 px-5 rounded-3xl border-1 border-um-manatee mt-5">
    <div class="flex items-center gap-3">
      <img
        src="https://picsum.photos/200"
        alt="${data.brand}"
        class="rounded-full h-[57px] w-[57px]"
      />
      <div>
        <h1>${data.brand}</h1>
        <p class="flex gap-1 font-medium text-sm">
          <img src="${star_icon}" alt="rating: " />${Number(
    data.rating
  ).toFixed(1)}
          <span class="text-um-manatee"
            >( ${data.reviews.length * 10} baho )</span
          >
        </p>
      </div>
    </div>
    <button
      type="button"
      class="bg-um-athens-gray text-base rounded-xl w-full py-4 mt-3"
    >
      Do'konga o'tish
    </button>
  </div>
</div>
  `;
};
