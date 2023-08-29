import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import path from "../../utils/path";
const TABLE_HEAD = ["Title", "Image", "Quantity", "Total", ""];
const TABLE_ROWS = [
    {
        name: "John Michael",
        date: "23/04/18",
        image: "https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp",
    },
    {
        name: "Alexa Liras",
        date: "23/04/18",
        image: "https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp",
    },
];
const Cart = () => {
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
                        {TABLE_ROWS.map(({ name, image, date }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name} className="m-auto">
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {name}
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
                                                src={`${image}`}
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
                                            total
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
                                            <Button className="bg-[#ea4335] hover:bg-[#a03329]">
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
                <p>
                    SubTotal: <span>xxxxxxx</span>
                </p>
                <Link to={`/${path.CHECKOUT}`} className="mt-4">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
