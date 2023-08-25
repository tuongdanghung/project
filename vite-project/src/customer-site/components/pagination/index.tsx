import React from "react";
import { IconButton } from "@material-tailwind/react";
const Pagination = () => {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index: any) =>
        ({
            variant: active === index ? "filled" : "text",
            color: "gray",
            onClick: () => setActive(index),
        } as any);
    return (
        <div className="flex items-center gap-4 mt-5 justify-center">
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
                <IconButton {...getItemProps(3)}>3</IconButton>
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
        </div>
    );
};

export default Pagination;
