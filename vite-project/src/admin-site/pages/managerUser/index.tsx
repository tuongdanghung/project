import { useEffect } from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
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
import { GetAllUsersByAdmin } from "../../../store/actions";
import { AppDispatch } from "../../../store";
const TABLE_HEAD = [
    "Full Name",
    "Email",
    "Role",
    "Account Status",
    "Wallet",
    "",
];

const ManagerUsers = () => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: any) => state?.userReducer?.users);
    const token = localStorage.getItem("auth");
    useEffect(() => {
        dispatch(GetAllUsersByAdmin(token));
    }, []);

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <Head title={"Manager User"} />
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <Search />
                        <Download />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-0">
                <table className="w-full min-w-max table-auto text-left">
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
                        {data?.map((item: any, index: any) => {
                            const isLast = index === data.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={item.id}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <Avatar
                                                alt={item.name}
                                                size="md"
                                                className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                            />
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold"
                                            >
                                                {item.name}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.role}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className="w-max">
                                            <Chip
                                                size="sm"
                                                variant="ghost"
                                                value={
                                                    item.isBlocked === false
                                                        ? "false"
                                                        : "true"
                                                }
                                                color={
                                                    item.isBlocked === false
                                                        ? "green"
                                                        : "red"
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal capitalize"
                                                >
                                                    {item.wallet}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        {item.isBlocked === false ? (
                                            <Button className="bg-red-500  hover:bg-red-700 text-white font-bold px-6 py-3 rounded text-lg">
                                                <AiFillLock className="h-5 w-6 text-lg text-white" />
                                            </Button>
                                        ) : (
                                            <Button className="bg-green-500  hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-lg">
                                                <AiFillUnlock className="h-5 w-6  text-white" />
                                            </Button>
                                        )}
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
        </Card>
    );
};

export default ManagerUsers;