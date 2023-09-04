import React, { ChangeEvent, useEffect, useState } from "react";
import { GetAllOrder } from "../../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Pagination from "../../components/pagination";
import Head from "../../components/layout/Head";
import { AiFillEdit } from "react-icons/ai";
import { apiUpdateOrder } from "../../../../apis";
import { ToastContainer, toast } from "react-toastify";

const TABLE_HEAD = ["Code Orders", "Total", "Status", ""];

const ManagerOrder = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: any) => state?.orderReducer?.orders);
  const [newData, setNewData] = useState<any>([]);
  const token = localStorage.getItem("auth");
  const data = newData.length > 0 ? newData : orders !== undefined && orders;

  useEffect(() => {
    dispatch(GetAllOrder(token));
  }, []);
  const handleChange = async (
    event: ChangeEvent<HTMLSelectElement>,
    orderId: string
  ) => {
    const value = event.target.value;
    const updatedData = orders?.map((order: any) => {
      if (order._id === orderId) {
        return { ...order, status: value };
      }
      return order;
    });

    setNewData(updatedData);
    const response = await apiUpdateOrder({
      id: orderId,
      status: value,
      token,
    });
    if ((response as any).data.success) {
      dispatch(GetAllOrder(token));
      toast.success("Updated user successfully");
    } else {
      toast.error("Updated user failed");
    }
  };
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Head title={"Manager Order"} slug="manager-order" />
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
            {data?.map((item: any, index: any) => {
              const isLast = index === orders.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={item._id}>
                  <td className={classes}>
                    <div className="flex items-center justify-center gap-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        MDH {item._id}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center justify-center gap-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {item.total} $
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center justify-center gap-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        <select
                          className="border border-collapse rounded-lg w-full"
                          value={item.status}
                          onChange={(e) => handleChange(e, item._id)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipping">Shipping</option>
                          <option value="Done">Done</option>
                          <option value="Cancel">Cancel</option>
                        </select>
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center justify-center gap-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        <Button
                          //   onClick={() => {
                          //     handleOpen(item._id);
                          //   }}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-lg"
                        >
                          <AiFillEdit className="h-5 w-6 text-white" />
                        </Button>
                      </Typography>
                    </div>
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
      <ToastContainer />
    </Card>
  );
};

export default ManagerOrder;
