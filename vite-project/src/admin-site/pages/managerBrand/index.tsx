import { AiFillDelete, AiFillEdit, AiFillFolderAdd } from "react-icons/ai";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
} from "@material-tailwind/react";
import Pagination from "../../components/pagination";
import Head from "../../components/layout/Head";
import Search from "../../components/search";
import Download from "../../components/download";

const TABLE_HEAD = [
    "Full Name",
    "Email",
    "Role",
    "Account Status",
    "Wallet",
    "",
];

const TABLE_ROWS = [
    {
        name: "Hung 1",
        email: "tuongdanghung37@gmail.com",
        amount: "$2,500",
        role: "admin",
        status: "open",
        account: "visa",
        wallet: "1234",
        expiry: "06/2026",
    },
    {
        name: "Hung 2",
        amount: "$5,000",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "open",
        account: "master-card",
        wallet: "1234",
        expiry: "06/2026",
    },
    {
        name: "Hung 3",
        amount: "$3,400",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "open",
        account: "master-card",
        wallet: "1234",
        expiry: "06/2026",
    },
    {
        name: "Hung 4",
        amount: "$1,000",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "open",
        account: "visa",
        wallet: "1234",
        expiry: "06/2026",
    },
    {
        name: "Hung 5",
        amount: "$14,000",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "block",
        account: "visa",
        wallet: "1234",
        expiry: "06/2026",
    },
];

const ManagerBrand = () => {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <Head title={"Manager Brand"} />
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <Search />
                        <Button className="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-2 rounded text-lg">
                            <AiFillFolderAdd className="h-5 w-6 text-white" />
                        </Button>
                        <Download />
                    </div>
                </div>
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
                        {TABLE_ROWS.map(
                            ({ name, email, role, status, wallet }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3 justify-center">
                                                <Avatar
                                                    alt={name}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {email}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {role}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max m-auto">
                                                <Chip
                                                    size="sm"
                                                    variant="ghost"
                                                    value={status}
                                                    color={
                                                        status === "open"
                                                            ? "green"
                                                            : "red"
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3 justify-center">
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal capitalize"
                                                    >
                                                        {wallet}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className={`${classes} flex justify-center`}
                                        >
                                            <Button className="bg-red-500  hover:bg-red-700 text-white font-bold px-6 py-3 rounded text-lg mr-2">
                                                <AiFillDelete className="h-5 w-6 text-lg text-white" />
                                            </Button>

                                            <Button className="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-lg">
                                                <AiFillEdit className="h-5 w-6 text-white" />
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center border-t border-blue-gray-50 p-4 justify-center">
                <Pagination />
            </CardFooter>
        </Card>
    );
};

export default ManagerBrand;
