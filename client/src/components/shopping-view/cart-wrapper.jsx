import { current } from "@reduxjs/toolkit";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

const UserCartWrapper = ({ cartItems }) => {
  const totalCartAmount =
    cartItems && cartItems?.length > 0
      ? cartItems.reduce(
          (sum, current) =>
            sum +
            (current?.salePrice > 0 ? current?.salePrice : current?.price) *
              current?.quantity,
          0
        )
      : 0;

  console.log("totalCartAmount", totalCartAmount, cartItems);

  return (
    <SheetContent className="sm:max-w-md bg-white">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4 px-4">
        {cartItems && cartItems?.length > 0
          ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
          : null}
      </div>
      <div className="space-y-4">
        <div className="flex justify-between p-4">
          <span className="font-bold">Total</span>
          <span className="font-bold">Rs. {totalCartAmount}</span>
        </div>
      </div>
      <Button className="w-[90%] shadow mx-auto mt-6">Checkout</Button>
    </SheetContent>
  );
};

export default UserCartWrapper;
