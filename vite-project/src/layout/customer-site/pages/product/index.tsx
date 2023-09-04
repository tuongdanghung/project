import { Link, useParams } from "react-router-dom";
import FilterProduct from "./FillterBy";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  GetAllProduct,
  GetProductDetail,
  GetBrand,
  GetCategory,
  GetRam,
  GetCapacity,
  GetColor,
} from "../../../../store/actions";
import Pagination from "../../components/pagination";
import path from "../../utils/path";
import { AppDispatch } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Product = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state?.productReducer?.products);
  const [isFiltered, setIsFiltered] = useState(false);
  const products = isFiltered
    ? []
    : data?.filter((product: any) => product.category === params.slug);
  const token = localStorage.getItem("auth");
  useEffect(() => {
    dispatch(GetAllProduct(token));
  }, []);
  const handleFilterClick = () => {
    setIsFiltered(true); // Khi nhấp vào nút "notfilter", áp dụng bộ lọc
  };
  return (
    <div>
      <FilterProduct />
      <button onClick={handleFilterClick}>notfilter</button>
      <div className="p-4 border border-collapse rounded-md m-0 mt-6">
        <div className="grid grid-cols-4 gap-5">
          {products?.map((item: any, index: any) => {
            return (
              <Card key={index} className="mt-6 border border-collapse">
                <CardBody>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    <img src={item.image[0].image} alt="" />
                  </Typography>
                  <Typography className="m-auto">
                    <span className="text-2xl font-bold">{item.title}</span>{" "}
                    <br />
                    <span>Price: {item.price}$</span>
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link
                    className="border border-separate py-2 px-4 rounded-lg hover:text-white hover:bg-blue-gray-900"
                    to={`/${path.PRODUCTS}/${params.slug}/${item._id}`}
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Product;
