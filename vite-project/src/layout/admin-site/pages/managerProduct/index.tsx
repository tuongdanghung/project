import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
    Card,
    CardHeader,
    Button,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../components/pagination";
import Head from "../../components/layout/Head";
import {
    GetAllProduct,
    GetProductDetail,
    GetBrand,
    GetCategory,
    GetRam,
    GetCapacity,
    GetColor,
} from "../../../../store/actions";
import { apiDeleteProduct, apiEditProduct } from "../../../../apis";
import { AppDispatch } from "../../../../store";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../components/modal";
import Snipper from "../../components/snipper";

const TABLE_HEAD = [
    "Title",
    "Price",
    "Category",
    "Brand",
    "Total Rating",
    "Image",
    "",
];
const ManagerProduct = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: any) => state?.productReducer?.products);
    const item = useSelector((state: any) => state?.productReducer.detail);
    const brand = useSelector((state: any) => state?.productReducer.brand);
    const ram = useSelector((state: any) => state?.productReducer.ram);
    const color = useSelector((state: any) => state?.productReducer.color);
    const [isSnipper, setIsSnipper] = useState(false);
    const capacity = useSelector(
        (state: any) => state?.productReducer.capacity
    );
    const category = useSelector(
        (state: any) => state?.productReducer.category
    );
    const token = localStorage.getItem("auth");
    useEffect(() => {
        dispatch(GetAllProduct(token));
        dispatch(GetRam(token));
        dispatch(GetCapacity(token));
        dispatch(GetColor(token));
    }, [item]);
    const handleDelete = async (id: string) => {
        const payload = { id: id, token: token };
        const response = await apiDeleteProduct(payload);
        if (response.data.success) {
            dispatch(GetAllProduct(token));
            toast.success("Delete product successfully");
        } else {
            toast.error("Delete product failed");
        }
    };

    const handleOpen = (id: string) => {
        const detail = { id: id, token: token };
        dispatch(GetProductDetail(detail));
        dispatch(GetBrand(token));
        dispatch(GetCategory(token));
        setOpen(!open);
    };
    const handleClose = (close: boolean) => {
        setOpen(close);
    };
    const handleEdit = async (data: any) => {
        const payload = {
            ...data,
            id: item._id,
            ram: JSON.stringify(data.ram),
            capacity: JSON.stringify(data.capacity),
            color: JSON.stringify(data.color),
            imageCloud: JSON.stringify(data.imageCloud),
        };
        const formData = new FormData();
        for (let i of Object.entries(payload))
            formData.append(i[0], i[1] as string | Blob);
        for (let x of data.imageFile) formData.append("image", x);
        setOpen(data.open);
        setIsSnipper(true);
        const response = await apiEditProduct(formData, item._id);
        if (response.data.success) {
            setIsSnipper(false);
            dispatch(GetAllProduct(token));
            toast.success("Updated product successfully");
        } else {
            toast.error("Updated product failed");
        }
    };

    return (
        <Card className="h-full w-full">
            {isSnipper ? <Snipper /> : null}
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <Head title={"Manager Product"} slug={"manager-product"} />
            </CardHeader>
            <CardBody className="px-0">
                <table className="w-full min-w-max table-auto text-center">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: any, index: any) => {
                            const isLast = index === data.length - 1;
                            const price: number = item.price;
                            const formattedNumber: string = price
                                .toLocaleString("en-US")
                                .replace(/,/g, ".");
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                            return (
                                <tr key={item._id}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3 justify-center">
                                            {item.title}
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        {formattedNumber} $
                                    </td>
                                    <td className={classes}>{item.category}</td>
                                    <td className={classes}>{item.brand}</td>
                                    <td className={classes}>
                                        {item.totalRating}
                                    </td>
                                    <td className={classes}>
                                        <img
                                            style={{
                                                width: "100px",
                                                margin: "auto",
                                            }}
                                            src={item.image[0]?.image}
                                            alt=""
                                        />
                                    </td>
                                    <td
                                        className={`${classes} flex justify-center`}
                                    >
                                        <Button
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
                                            className="bg-red-500  hover:bg-red-700 text-white font-bold px-6 py-3 rounded text-lg mr-2"
                                        >
                                            <AiFillDelete className="h-5 w-6 text-lg text-white" />
                                        </Button>

                                        <Button
                                            onClick={() => handleOpen(item._id)}
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-lg"
                                        >
                                            <AiFillEdit className="h-5 w-6 text-white" />
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center border-t border-blue-gray-50 p-4 justify-center">
                <Pagination />
            </CardFooter>
            <Modal
                open={open}
                item={item}
                brand={brand}
                ram={ram}
                color={color}
                capacity={capacity}
                category={category}
                handleOpen={handleOpen}
                handleEdit={handleEdit}
                handleClose={handleClose}
            />
            <ToastContainer />
        </Card>
    );
};

export default ManagerProduct;
