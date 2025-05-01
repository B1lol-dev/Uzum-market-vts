// assets
import star_icon from "../../../assets/icons/star_icon.svg";

export const ReviewCard = (data: any) => {
  return /*html*/ `
    <div class="bg-um-nero border-1 border-um-boulder rounded-[20px] p-[20px] h-[212px]">
        <h3 class="flex items-center justify-between text-sm text-um-shark font-semibold">${
          data.reviewerName
        } <span class="flex">${Array(Math.round(data.rating))
    .fill("")
    .map(() => /*html*/ `<img src=${star_icon} alt="star">`)
    .join("")}</span></h3>
        <p class="text-xs text-um-manatee mt-0.5">${data.date.split("T")[0]}</p>
        <div class="mt-5">
            <p></p>
            <h2>${data.comment}</h2>
        </div>
    </div>
    `;
};

// #QYQJ28GLU
