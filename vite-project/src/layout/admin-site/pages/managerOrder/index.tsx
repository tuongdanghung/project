import React, { useState } from "react";

import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
} from "@material-tailwind/react";
import Pagination from "../../components/pagination";
import Head from "../../components/layout/Head";
import Search from "../../components/search";
import Download from "../../components/download";
import TableRow from "../../components/tableRow";

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
        role: "admin",
        status: "pending",
        wallet: "1234",
    },
    {
        name: "Hung 2",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "processing",
        wallet: "1234",
    },
    {
        name: "Hung 3",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "delivery",
        wallet: "1234",
    },
    {
        name: "Hung 4",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "done",
        wallet: "1234",
    },
    {
        name: "Hung 5",
        email: "tuongdanghung37@gmail.com",
        role: "user",
        status: "cancel",
        wallet: "1234",
    },
];

const ManagerOrder = () => {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <Head title={"Manager Order"} />
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <Search />
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
                        {TABLE_ROWS.map((row) => (
                            <TableRow
                                data={TABLE_ROWS}
                                key={row.name}
                                rowData={row}
                            />
                        ))}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center border-t border-blue-gray-50 p-4 justify-center">
                <Pagination />
            </CardFooter>
        </Card>
    );
};

export default ManagerOrder;
