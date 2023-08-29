import React, { ChangeEvent, useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Checkbox,
} from "@material-tailwind/react";
import { CheckValidInterface, ModalCreate } from "../../../../interface/client";
import {
    GetBrand,
    GetCategory,
    GetRam,
    GetCapacity,
    GetColor,
    GetAllProduct,
} from "../../../../store/actions";
import { getBase64 } from "../../utils/helper";
import Required from "../required";
import "./index.scss";
import { apiCreateBrand, apiCreateProduct } from "../../../../apis";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";
import { ToastContainer, toast } from "react-toastify";
import Snipper from "../snipper";
import Brand from "./brand";
const ModalCreateComponent: React.FC<ModalCreate> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isSnipper, setIsSnipper] = useState(false);
    const [slug, setSlug] = useState<string>(props.slug);
    const dispatch = useDispatch<AppDispatch>();
    const token = localStorage.getItem("auth");
    const [watch, setWatch] = useState<any>("listen");
    const brand = useSelector((state: any) => state?.productReducer.brand);
    const ram = useSelector((state: any) => state?.productReducer.ram);
    const color = useSelector((state: any) => state?.productReducer.color);
    const [file, setFile] = useState<any>([]);
    const [image, setImage] = useState<any>([]);
    const [itemValueRam, setItemValueRam] = useState<any>([]);
    const [itemValueColor, setItemValueColor] = useState<any>([]);
    const [itemValueCapacity, setItemValueCapacity] = useState<any>([]);
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [itemValueBrand, setItemValueBrand] = useState<any>("");
    const [itemValueCategory, setItemValueCategory] = useState<any>("");
    const capacity = useSelector(
        (state: any) => state?.productReducer.capacity
    );
    const category = useSelector(
        (state: any) => state?.productReducer.category
    );
    //
    const [valueAddNewBrand, setValueAddNewBrand] = useState<string>("");
    const [checkValid, setCheckValid] = useState<CheckValidInterface>({
        title: false,
        price: false,
        category: false,
        brand: false,
        image: false,
        ram: false,
        capacity: false,
        color: false,
        description: false,
        quantity: false,
        valueAddNewBrand: false,
    });
    const toBase64 = async (watch: any) => {
        const newFileArray = [];
        if (watch !== "listen") {
            for (let item of watch) {
                const base64Data = await getBase64(item);
                newFileArray.push({ name: item.name, image: base64Data });
            }
        }
        setFile(newFileArray);
    };

    useEffect(() => {
        setOpen(props.open);
        setSlug(props.slug);
        dispatch(GetRam(token));
        dispatch(GetCapacity(token));
        dispatch(GetColor(token));
        dispatch(GetBrand(token));
        dispatch(GetCategory(token));
        toBase64(watch);
    }, [props.open, props.slug]);
    const handleClose = () => {
        props.handleClose(false);
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files);
        setImage(event.target.files);
        toBase64(event.target.files);
    };

    const handleCheckboxRamChange = (size: any) => {
        const updatedCheckBoxSizes = [...itemValueRam];
        const sizeIndex = updatedCheckBoxSizes.findIndex(
            (selectItem) => selectItem.title === size
        );
        console.log(updatedCheckBoxSizes);
        if (sizeIndex !== -1) {
            updatedCheckBoxSizes.splice(sizeIndex, 1); // Loại bỏ nếu đã tồn tại
        } else {
            updatedCheckBoxSizes.push({ title: size }); // Thêm nếu chưa tồn tại
        }
        setItemValueRam(updatedCheckBoxSizes);
    };
    const handleCheckboxColorChange = (color: any) => {
        const updatedCheckBoxColor = [...itemValueColor];
        const colorIndex = updatedCheckBoxColor.findIndex(
            (selectItem) => selectItem.color === color
        );
        if (colorIndex !== -1) {
            updatedCheckBoxColor.splice(colorIndex, 1);
        } else {
            updatedCheckBoxColor.push({ color: color });
        }
        setItemValueColor(updatedCheckBoxColor);
    };
    const handleCheckboxCapacityChange = (size: any) => {
        const updatedCheckBoxSizes = [...itemValueCapacity];
        const sizeIndex = updatedCheckBoxSizes.findIndex(
            (selectItem) => selectItem.title === size
        );
        if (sizeIndex !== -1) {
            updatedCheckBoxSizes.splice(sizeIndex, 1);
        } else {
            updatedCheckBoxSizes.push({ title: size });
        }
        setItemValueCapacity(updatedCheckBoxSizes);
    };
    const handleCreate = async () => {
        if (slug === "manager-product") {
            if (title === "") {
                setCheckValid((prevState) => ({
                    ...prevState,
                    title: true,
                }));
            }
            if (price === 0) {
                setCheckValid((prevState) => ({
                    ...prevState,
                    price: true,
                }));
            }
            if (quantity === 0) {
                setCheckValid((prevState) => ({
                    ...prevState,
                    quantity: true,
                }));
            }
            if (itemValueCategory === "") {
                setCheckValid((prevState) => ({
                    ...prevState,
                    category: true,
                }));
            }
            if (itemValueBrand === "") {
                setCheckValid((prevState) => ({
                    ...prevState,
                    brand: true,
                }));
            }
            if (description === "") {
                setCheckValid((prevState) => ({
                    ...prevState,
                    description: true,
                }));
            }
            if (image.length === 0) {
                setCheckValid((prevState) => ({
                    ...prevState,
                    image: true,
                }));
            }
            if (itemValueColor.length === 0) {
                setCheckValid((prevState) => ({
                    ...prevState,
                    color: true,
                }));
            }
            if (itemValueRam.length === 0) {
                setCheckValid((prevState) => ({
                    ...prevState,
                    ram: true,
                }));
            }
            if (itemValueCapacity.length === 0) {
                setCheckValid((prevState) => ({
                    ...prevState,
                    capacity: true,
                }));
            }
            const payload = {
                title,
                price,
                description,
                image,
                brand: itemValueBrand,
                category: itemValueCategory,
                quantity,
                ram: JSON.stringify(itemValueRam),
                capacity: JSON.stringify(capacity),
                color: JSON.stringify(itemValueCapacity),
            };
            const formData = new FormData();
            for (let i of Object.entries(payload)) formData.append(i[0], i[1]);
            for (let img of image) formData.append("image", img);
            if (
                title !== "" &&
                price !== 0 &&
                quantity !== 0 &&
                description !== "" &&
                image.length !== 0 &&
                brand !== "" &&
                category !== "" &&
                itemValueColor.length !== 0 &&
                itemValueBrand.length !== 0 &&
                itemValueCapacity.length !== 0
            ) {
                setIsSnipper(true);
                const response = await apiCreateProduct(formData);
                if (response.data.success) {
                    setIsSnipper(false);
                    dispatch(GetAllProduct(token));
                    toast.success("Create product successfully");
                } else {
                    toast.error("Create product failed");
                }
                props.handleClose(false);
            }
        }
        if (slug === "manager-brand") {
            if (valueAddNewBrand === "") {
                setCheckValid((prevState) => ({
                    ...prevState,
                    valueAddNewBrand: true,
                }));
            }
            if (valueAddNewBrand !== "") {
                console.log(valueAddNewBrand);
                const response = await apiCreateBrand({
                    title: valueAddNewBrand,
                });
                if (response.data.success) {
                    setIsSnipper(false);
                    dispatch(GetBrand(token));
                    props.handleClose(false);
                    toast.success("Create brand successfully");
                } else {
                    toast.error("Create brand failed");
                }
            }
        }
    };
    const handleBrand = (title: any) => {
        setValueAddNewBrand(title);
    };
    return (
        <Dialog
            className="modal-dialog"
            open={open}
            handler={props.handleClose}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            {isSnipper ? <Snipper /> : null}
            <DialogHeader>{props.title}</DialogHeader>
            <DialogBody divider>
                {slug === "manager-product" && (
                    <div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block">Title</label>
                                <input
                                    className="border border-collapse rounded-lg w-full"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <Required
                                    value={title}
                                    valid={checkValid.title}
                                    keywords="Title"
                                    setShow={setCheckValid}
                                />
                            </div>
                            <div>
                                <label className="block">Price</label>
                                <input
                                    className="border border-collapse rounded-lg w-full"
                                    type="number"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(Number(e.target.value))
                                    }
                                />
                                <Required
                                    value={price}
                                    valid={checkValid.price}
                                    keywords="Price"
                                    setShow={setCheckValid}
                                />
                            </div>
                            <div>
                                <label className="block">Description</label>
                                <textarea
                                    style={{ height: "238px" }}
                                    className="border border-collapse rounded-lg w-full"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                                <Required
                                    value={description}
                                    valid={checkValid.description}
                                    keywords=" Description"
                                    setShow={setCheckValid}
                                />
                            </div>
                            <div>
                                <div>
                                    <label className="block">Quantity</label>
                                    <input
                                        className="border border-collapse rounded-lg w-full"
                                        type="number"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(Number(e.target.value))
                                        }
                                    />
                                    <Required
                                        value={quantity}
                                        valid={checkValid.quantity}
                                        keywords="Quantity"
                                        setShow={setCheckValid}
                                    />
                                </div>
                                <div>
                                    <label className="block">Brand</label>
                                    <select
                                        className="border border-collapse rounded-lg w-full"
                                        value={itemValueBrand}
                                        onChange={(e) =>
                                            setItemValueBrand(e.target.value)
                                        }
                                    >
                                        <option>Choose option</option>
                                        {brand?.map((brandItem: any) => (
                                            <option
                                                key={brandItem._id}
                                                value={brandItem.title}
                                            >
                                                {brandItem.title}
                                            </option>
                                        ))}
                                    </select>
                                    <Required
                                        value={itemValueBrand}
                                        valid={checkValid.brand}
                                        keywords="Brand"
                                        setShow={setCheckValid}
                                    />
                                </div>
                                <div>
                                    <label className="block">Category</label>
                                    <select
                                        className="border border-collapse rounded-lg w-full"
                                        value={itemValueCategory}
                                        onChange={(e) =>
                                            setItemValueCategory(e.target.value)
                                        }
                                    >
                                        <option>Choose option</option>
                                        {category?.map((brandItem: any) => (
                                            <option
                                                key={brandItem._id}
                                                value={brandItem.title}
                                            >
                                                {brandItem.title}
                                            </option>
                                        ))}
                                    </select>
                                    <Required
                                        value={itemValueCategory}
                                        valid={checkValid.category}
                                        keywords="Category"
                                        setShow={setCheckValid}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" rounded-lg border border-separate mt-5 p-4">
                            <label>Color</label>
                            <div className="grid grid-cols-6 gap-5">
                                {color?.map((item: any, index: any) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center checked-button"
                                        >
                                            <label className="label-css">
                                                {item.color}
                                            </label>
                                            <Checkbox
                                                value={item.color}
                                                onChange={() =>
                                                    handleCheckboxColorChange(
                                                        item.color
                                                    )
                                                }
                                                crossOrigin={undefined}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <Required
                                value={itemValueColor}
                                valid={checkValid.color}
                                keywords="Color"
                                setShow={setCheckValid}
                            />
                        </div>
                        <div className=" rounded-lg border border-separate mt-5 p-4">
                            <label>Ram</label>
                            <div className="grid grid-cols-5 gap-5">
                                {ram?.map((item: any, index: any) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center checked-button"
                                        >
                                            <label className="label-css">
                                                {item.size} GB
                                            </label>
                                            <Checkbox
                                                value={item.size}
                                                onChange={() =>
                                                    handleCheckboxRamChange(
                                                        item.size
                                                    )
                                                }
                                                crossOrigin={undefined}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <Required
                                value={itemValueRam}
                                valid={checkValid.ram}
                                keywords="Ram"
                                setShow={setCheckValid}
                            />
                        </div>
                        <div className=" rounded-lg border border-separate mt-5 p-4">
                            <label>Capacity</label>
                            <div className="grid grid-cols-5 gap-5">
                                {capacity?.map((item: any, index: any) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center checked-button"
                                        >
                                            <label className="label-css">
                                                {item.size} GB
                                            </label>
                                            <Checkbox
                                                value={item.size}
                                                onChange={() =>
                                                    handleCheckboxCapacityChange(
                                                        item.size
                                                    )
                                                }
                                                crossOrigin={undefined}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <Required
                                value={itemValueCapacity}
                                valid={checkValid.capacity}
                                keywords="Capacity"
                                setShow={setCheckValid}
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block">Image</label>
                            <input
                                className="rounded-lg mt-3 border border-separate"
                                onChange={handleFileChange}
                                type="file"
                                multiple
                            />
                            <Required
                                value={image}
                                valid={checkValid.image}
                                keywords=" Image"
                                setShow={setCheckValid}
                            />
                            {file && Array.isArray(file) && file.length > 0 && (
                                <div className="grid grid-cols-5 gap-5 mt-4">
                                    {file.map((item: any, index: number) => (
                                        <div>
                                            <img
                                                key={index}
                                                width={100}
                                                src={item.image}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {slug === "manager-brand" && (
                    <div>
                        <Brand handleBrand={handleBrand} />
                        <Required
                            value={valueAddNewBrand}
                            valid={checkValid.valueAddNewBrand}
                            keywords="Title"
                            setShow={setCheckValid}
                        />
                    </div>
                )}
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleClose}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleCreate}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
            <ToastContainer />
        </Dialog>
    );
};

export default ModalCreateComponent;