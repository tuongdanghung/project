import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { GetOneUser } from "../../../../store/actions";
import { AppDispatch } from "../../../../store";
import { ToastContainer, toast } from "react-toastify";
import { apiDeleteCart, apiCreateOrder } from "../../../../apis";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import MapComponent from "../../components/map";
const TABLE_HEAD = ["Title", "Image", "Quantity", "Total", ""];

interface Product {
  capacity: {
    size: number;
    percent: number;
  };
  product: {
    _id: string;
    title: string;
    price: number;
    image: {
      image: string;
      _id: string;
    }[];
  };
  quantity: number;
  ram: number;
  color: string;
  _id: string;
}

interface ProductListProps {
  products: Product[];
}

const Cart: React.FC<ProductListProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(0);
  const token = localStorage.getItem("auth");
  const cart = useSelector((state: any) => state?.userReducer?.oneUser?.cart);
  const data = quantity !== 0 ? quantity : cart;
  useEffect(() => {
    dispatch(GetOneUser(token));
  }, [quantity]);
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: string
  ) => {
    const updatedProducts = cart.map((product: any) => {
      if (product._id === productId) {
        // Cập nhật giá trị quantity cho sản phẩm tương ứng
        return { ...product, quantity: parseInt(event.target.value, 10) };
      }
      return product;
    });
    setQuantity(updatedProducts);
  };
  const handleDelete = async (id: string) => {
    const response = await apiDeleteCart({ id, token });
    if (response.data.success) {
      toast.success("Delete item cart successfully");
      dispatch(GetOneUser(token));
    } else {
      toast.error("Delete item cart failed");
    }
  };
  const handleCheckout = async () => {
    const response = await apiCreateOrder(token);
    if (response.data.success) {
      Swal.fire("Congratulations!", "Checkout successfully", "success");
      dispatch(GetOneUser(token));
    } else {
      Swal.fire("Oops!", "Checkout fail", "error");
    }
  };
  return (
    <div>
      <Card className="w-full text-center">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: any) => {
              const isLast = index === cart.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item._id} className="m-auto">
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.product.title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <img
                        className="m-auto"
                        width={80}
                        src={`${item.product.image[0]?.image}`}
                        alt=""
                      />
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex justify-center">
                      <Button>-</Button>
                      <input
                        className="w-[100px] rounded-md mx-3"
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(e, item._id)}
                      />
                      <Button>+</Button>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {item?.product?.price *
                        item?.capacity?.percent *
                        item?.quantity}{" "}
                      $
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <Button
                        onClick={() => handleDelete(item._id)}
                        className="bg-[#ea4335] hover:bg-[#a03329]"
                      >
                        Delete
                      </Button>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <div className="mt-6 flex flex-col items-end">
        <p className="text-2xl font-bold">
          SubTotal:{" "}
          <span>
            {data?.reduce(
              (total: any, item: any) =>
                total +
                item.product.price * item.capacity.percent * item.quantity,
              0
            )}{" "}
            $
          </span>
        </p>
        <Button
          // to={`/${path.CHECKOUT}`}
          onClick={handleCheckout}
          className="mt-4 border border-separate rounded-lg px-4 py-3 hover:text-white hover:bg-gray-900"
        >
          Checkout
        </Button>
      </div>
      <ToastContainer />
      <MapComponent />
    </div>
  );
};

export default Cart;
