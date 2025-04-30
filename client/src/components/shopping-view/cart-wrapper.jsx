import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

const UserCartWrapper = ({ cartItems }) => {
  return (
    <SheetContent className="sm:max-w-md bg-white">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        {cartItems && cartItems?.length > 0
          ? cartItems.map((item) => <UserCartItemsContent />)
          : null}
      </div>
      <div className="space-y-4">
        <div className="flex justify-between p-4">
          <span className="font-bold">Total</span>
          <span className="font-bold">Rs. 1000</span>
        </div>
      </div>
      <Button className="w-[90%] shadow mx-auto mt-6">Checkout</Button>
    </SheetContent>
  );
};

export default UserCartWrapper;
