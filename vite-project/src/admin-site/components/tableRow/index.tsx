import React, { useState } from "react";
import { Typography, Button, Avatar } from "@material-tailwind/react";
import { BiDetail } from "react-icons/bi";
import "./index.scss";
const TableRow = ({ rowData, data }: any) => {
    const [selectedStatus, setSelectedStatus] = useState(rowData.status);

    const handleStatusChange = (event: any) => {
        setSelectedStatus(event.target.value);
    };

    const statusToBgColor: { [key: string]: string } = {
        pending: "bg-orange-600",
        processing: "bg-blue-500",
        delivery: "bg-teal-500",
        done: "bg-green-400",
        cancel: "bg-red-600",
    };

    return (
        <tr>
            <td className="p-4">
                <div className="flex items-center gap-3 justify-center">
                    <Avatar
                        alt={rowData.name}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                    >
                        {rowData.name}
                    </Typography>
                </div>
            </td>
            <td className="p-4">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    {rowData.email}
                </Typography>
            </td>
            <td className="p-4">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    {rowData.role}
                </Typography>
            </td>
            <td className="p-4">
                <div className="w-max m-auto">
                    <select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        className={` text-white border border-spacing-1 border-gray-800 w-full px-4 py-2 max-w-xs ${
                            statusToBgColor[rowData.status]
                        }`}
                    >
                        {data.map((row: any, index: any) => (
                            <option
                                key={index}
                                value={row.status}
                                className={`${statusToBgColor[row.status]}`}
                            >
                                {row.status}
                            </option>
                        ))}
                    </select>
                </div>
            </td>
            <td className="p-4">
                <div className="flex items-center gap-3 justify-center">
                    <div className="flex flex-col">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                        >
                            {rowData.wallet}
                        </Typography>
                    </div>
                </div>
            </td>
            <td className="p-4 flex justify-center">
                <Button className="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-lg">
                    <BiDetail className="h-5 w-6 text-white" />
                </Button>
            </td>
        </tr>
    );
};
export default TableRow;
