import React from "react";
import { Button, Rating, Textarea } from "@material-tailwind/react";
const ProductDetail = () => {
    return (
        <div>
            <div className="p-4 border border-collapse rounded-md m-0">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col">
                        <img
                            width="100%"
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                            alt=""
                        />
                        <ul className="grid grid-cols-3 gap-5 mt-3">
                            <li>
                                <img
                                    src="https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                                    alt=""
                                />
                            </li>
                            <li>
                                <img
                                    src="https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                                    alt=""
                                />
                            </li>
                            <li>
                                <img
                                    src="https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Title: xxxxxx</h1>
                        <h1>Price: 100$</h1>
                        <h1>
                            <Rating value={4} readonly />
                        </h1>
                        <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
                        <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
                        <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
                        <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
                        <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
                        <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
                        <p>Technology: GSM / CDMA / HSPA / EVDO / LTE</p>
                        <div className="mt-4 flex">
                            <span className="w-[100px] block">Capacity</span>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                1
                            </button>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                2
                            </button>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                3
                            </button>
                        </div>
                        <div className="mt-2 flex">
                            <span className="w-[100px] block">Ram</span>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                1
                            </button>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                2
                            </button>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                3
                            </button>
                        </div>
                        <div className="mt-2 flex">
                            <span className="w-[100px] block">Color</span>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                1
                            </button>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                2
                            </button>
                            <button className="border border-collapse py-1 px-3 ml-2">
                                3
                            </button>
                        </div>
                        <div className="mt-2 flex">
                            <span className="w-[100px] block">Quantity</span>
                            <button className="border h-[30px] border-collapse py-1 px-3 ml-2">
                                -
                            </button>
                            <input
                                className="w-[50px] h-[30px] ml-2"
                                type="number"
                                value={0}
                            />
                            <button className="border h-[30px] border-collapse py-1 px-3 ml-2">
                                +
                            </button>
                        </div>
                        <button className=" bg-red-500 hover:bg-red-600 text-white border border-collapse mt-6 px-3 py-2 w-full">
                            Add to cart
                        </button>
                    </div>
                    <div className="col">3</div>
                </div>
                <div className="mt-6">
                    <h1>DESC</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Non minus animi debitis eum vitae facere excepturi
                        sequi ab. Aliquam cumque aperiam quo assumenda
                        reiciendis dolorum ipsum. Corporis asperiores eaque
                        quis.
                    </p>
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur quas cupiditate
                                velit eius facilis consequuntur ad nesciunt
                                accusantium. Totam dolorum quos labore itaque
                                voluptatem quidem eius adipisci pariatur.
                                Sapiente, veritatis.
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur quas cupiditate
                                velit eius facilis consequuntur ad nesciunt
                                accusantium. Totam dolorum quos labore itaque
                                voluptatem quidem eius adipisci pariatur.
                                Sapiente, veritatis.
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
        </div>
    );
};

export default ProductDetail;
