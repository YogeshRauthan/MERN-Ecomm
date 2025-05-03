import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { setProductDetails } from "@/store/shop/products-slice";
import { StarIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsDialog = ({ open, setOpen, productDetails }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { toast } = useToast();

  const handleAddtoCart = (getCurrentProductId) => {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart!",
        });
      }
    });
  };

  //when we closed the modal and switch page and come back it automatically opens so this prevents that behavioor
  const handleDialogClose = () => {
    setOpen(false);
    dispatch(setProductDetails());
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] bg-white">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="">
          <div>
            <DialogTitle className="text-3xl font-extrabold">
              {" "}
              {productDetails?.title}
            </DialogTitle>
            <p className="text-muted-foreground text-2xl my-4">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`text-3xl font-bold text-primary ${
                productDetails?.salePrice > 0 ? "line-through" : ""
              }`}
            >
              {productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 && (
              <p className="text-2xl font-bold text-muted-foreground">
                ${productDetails?.salePrice}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              {Array(4)
                .fill()
                .map((_, idx) => (
                  <StarIcon key={idx} className="w-5 h-5 fill-amber-500" />
                ))}
              <span className="text-muted-foreground">(4.5)</span>
            </div>
          </div>
          <div className="my-5">
            <Button
              className="w-full shadow"
              onClick={() => handleAddtoCart(productDetails?._id)}
            >
              Add to cart
            </Button>
          </div>
          <Separator className="bg-gray-200" />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Yogesh</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array(4)
                      .fill()
                      .map((_, idx) => (
                        <StarIcon
                          key={idx}
                          className="w-5 h-5 fill-amber-500"
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground">Awesome product</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Yogesh</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array(4)
                      .fill()
                      .map((_, idx) => (
                        <StarIcon
                          key={idx}
                          className="w-5 h-5 fill-amber-500"
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground">Awesome product</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Yogesh</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array(4)
                      .fill()
                      .map((_, idx) => (
                        <StarIcon
                          key={idx}
                          className="w-5 h-5 fill-amber-500"
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground">Awesome product</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <Input placeholder="Write a  review..." />
              <Button className="shadow">Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
