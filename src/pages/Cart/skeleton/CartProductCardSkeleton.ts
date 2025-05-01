export const CartProductCardSkeleton = (): string => {
  const trash_icon = /*html*/ `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z" fill="black"></path>
  </svg>
  `;

  return /*html*/ `
    <div class="py-3.5 w-[834px] border-b-1 border-b-um-boulder last:border-none" data-cart-product>
      <p>Uzum Market omborida</p>
      <h1 class="w-[30%] h-3 rounded-full bg-um-shark"></h1>
      <div class="flex gap-5 mt-3">
        <input type="checkbox" checked class="accent-um-lonestar">
        <div class="flex gap-5">
          <div src="" alt="" class="bg-um-athens-gray rounded h-[120px] w-[120px]"></div>
          <div class="flex flex-col justify-between w-70">
            <a>
              <h1 class="w-[60%] h-3 rounded-full bg-um-shark"></h1>
            </a>
            <div>
              <h3 class="w-[30%] h-3 rounded-full bg-um-shark"></h3>
              <h3 class="w-[30%] h-3 rounded-full bg-um-shark mt-4"></h3>
            </div>
          </div>
          <div class="flex items-center">
            <div class="rounded-[2px] border-1 border-um-boulder text-um-boulder flex items-center bg-um-boulder w-30 h-9"></div>
          </div>
        </div>
        <div class="flex flex-col ml-auto items-end w-full">
          <button type="button" class="bg-um-manatee h-6 w-[50%] rounded-full"></button>
          <h2 class="mt-4 w-[60%] h-5 rounded-full bg-um-shark"></h2>
          <p class="bg-um-boulder h-3 mt-4 rounded-full w-[30%]"></p>
        </div>
      </div>
    </div>    
  `;
};
