import React, { useEffect, useState } from "react";
import { GetProductDetail, GetOneUser } from "../../../../store/actions";
import { Button, Rating, Textarea } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";
import { apiUpdateCart } from "../../../../apis";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";
const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);
  const detail = useSelector((state: any) => state?.productReducer.detail);
  const [capacity, setCapacity] = useState([]);
  const [ram, setRam] = useState([]);
  const [color, setColor] = useState([]);
  const token = localStorage.getItem("auth");
  const [activeCapacity, setActiveCapacity] = useState(0);
  const [activeRam, setActiveRam] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const navigate = useNavigate();
  const handleButtonCapacity = (index: any) => {
    setActiveCapacity(index);
    setCapacity(detail?.capacity[index]);
  };
  const handleButtonRam = (index: any) => {
    setActiveRam(index);
    setRam(detail?.ram[index]);
  };
  const handleButtonColor = (index: any) => {
    setActiveColor(index);
    setColor(detail?.color[index]);
  };
  const dataCapacity = capacity
    ? capacity
    : detail.capacity !== undefined && detail?.capacity[0];

  const dataRam = ram ? ram : detail.ram !== undefined && detail?.ram[0];

  const dataColor = color
    ? color
    : detail.color !== undefined && detail?.color[0];

  useEffect(() => {
    setCapacity(detail?.capacity);
    setRam(detail?.ram);
    setColor(detail?.color);
    dispatch(GetProductDetail({ id: params.id, token }));
    dispatch(GetOneUser(token));
  }, []);
  const handleAddToCart = async () => {
    const response = await apiUpdateCart({
      pid: detail._id,
      quantity,
      color: dataColor.color,
      ram: dataRam.size,
      capacity: { size: dataCapacity.size, percent: dataCapacity.percent },
      price: detail.price * dataCapacity.percent,
      token,
    });
    if (response.data.success) {
      toast.success("Add to cart successfully");
      dispatch(GetOneUser(token));
      setTimeout(() => {
        navigate(`/${path.CART}`);
      }, 3000);
    } else {
      toast.error("Add to cart failed");
    }
  };
  const handleClick = (amount: number) => {
    if (quantity + amount >= 1) {
      setQuantity((prevValue: number) => prevValue + amount);
    }
    if (quantity + amount > detail?.quantity) {
      setQuantity(detail?.quantity);
    }
  };
  return (
    <div>
      <div className="p-4 border border-collapse rounded m-0">
        <div className="grid grid-cols-3 gap-5">
          <div className="col">
            <img
              style={{ width: "100%", maxHeight: "72%" }}
              src={detail?.image !== undefined && detail?.image[0].image}
              alt=""
            />
            <ul className="grid grid-cols-3 gap-5 mt-3">
              {detail?.image?.map((item: any) => {
                return (
                  <li key={item._id}>
                    <img src={item.image} alt="" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h1 className="text-4xl font-bold mb-4">Title: {detail.title}</h1>
            <h1 className="text-xl font-bold mb-4">
              Price: {detail.price * dataCapacity.percent}$
            </h1>
            <h1>
              <Rating value={4} readonly />
            </h1>
            <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
            <div className="mt-4 flex">
              <span className="w-[100px] block">Capacity</span>
              {detail?.capacity?.map((item: any, index: any) => {
                return (
                  <button
                    key={index}
                    className={`border border-collapse py-1 px-3 ml-2 rounded ${
                      activeCapacity === index ? "bg-gray-900 text-white" : ""
                    }`}
                    onClick={() => handleButtonCapacity(index)}
                  >
                    {item.size} GB
                  </button>
                );
              })}
            </div>
            <div className="mt-2 flex">
              <span className="w-[100px] block">Ram</span>
              {detail?.ram?.map((item: any, index: number) => {
                return (
                  <button
                    key={item._id}
                    className={`border border-collapse py-1 px-3 ml-2 rounded ${
                      activeRam === index ? "bg-gray-900 text-white" : ""
                    }`}
                    onClick={() => handleButtonRam(index)}
                  >
                    {item.size}GB
                  </button>
                );
              })}
            </div>
            <div className="mt-2 flex">
              <span className="w-[100px] block">Color</span>
              {detail?.color?.map((item: any, index: number) => {
                return (
                  <button
                    key={item._id}
                    onClick={() => handleButtonColor(index)}
                    className={`border border-collapse py-1 px-3 ml-2 rounded ${
                      activeColor === index ? "bg-gray-900 text-white" : ""
                    }`}
                  >
                    {item.color}
                  </button>
                );
              })}
            </div>
            <div className="mt-2 flex">
              <span className="w-[100px] block">Quantity</span>
              <button
                onClick={() => handleClick(-1)}
                className="border h-[30px] border-collapse py-1 px-3 ml-2"
              >
                -
              </button>
              <input
                className="w-[150px] h-[30px] ml-2"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                onClick={() => handleClick(1)}
                className="border h-[30px] border-collapse py-1 px-3 ml-2"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className=" bg-red-500 hover:bg-red-600 text-white border border-collapse mt-6 px-3 py-2 w-full"
            >
              Add to cart
            </button>
          </div>
          <div className="col">3</div>
        </div>
        <div className="mt-6">
          <h1 className="text-3xl font-bold mb-4">Description</h1>
          <p>{detail.description}</p>
        </div>
      </div>
      <div className="p-4 border border-collapse rounded-md mt-6">
        <div className="row">
          <div className="col">
            <Textarea label="Message" />
          </div>
          <div className="col mt-3">
            <Button>Comment</Button>
          </div>
        </div>
        <div className="comment mt-8">
          <h1>Comment</h1>
          <div className="mt-5">
            <div className="my-3">
              <p className="flex">
                <span className="mr-3">hung</span>
                <Rating value={5} />
              </p>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur quas cupiditate velit eius facilis consequuntur ad
                nesciunt accusantium. Totam dolorum quos labore itaque
                voluptatem quidem eius adipisci pariatur. Sapiente, veritatis.
              </p>
              <div className="mt-4">
                <Button>edit</Button>
                <Button className="ml-3">delete</Button>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className="flex">
                <span className="mr-3">hung</span>
                <Rating value={5} readonly />
              </p>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur quas cupiditate velit eius facilis consequuntur ad
                nesciunt accusantium. Totam dolorum quos labore itaque
                voluptatem quidem eius adipisci pariatur. Sapiente, veritatis.
              </p>
              <div className="mt-4">
                <Button>edit</Button>
                <Button className="ml-3">delete</Button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
