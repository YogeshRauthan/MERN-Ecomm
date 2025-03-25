import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

const AdminProductTile = ({
  product,
  setOpenCreateProductsDialog,
  setFormData,
  setCurrentEditedId,
  handleDelete,
}) => {
  return (
    <Card>
      <div className="w-full max-w-sm mx-auto">
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[250px] object-cover rounded-t-lg border-b-2 border-black"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold my-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              Rs. {product?.price}
            </span>
            {product?.salePrice > 0 && <span>Rs. {product?.salePrice}</span>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            className="shadow-md"
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button className="shadow-md" onClick={()=>handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default AdminProductTile;
