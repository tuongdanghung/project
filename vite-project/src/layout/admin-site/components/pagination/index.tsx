import React from "react";
import { IconButton } from "@material-tailwind/react";
const Pagination = () => {
    return (
        <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
                1
            </IconButton>
            <IconButton variant="text" size="sm">
                2
            </IconButton>
            <IconButton variant="text" size="sm">
                3
            </IconButton>
            <IconButton variant="text" size="sm">
                ...
            </IconButton>
            <IconButton variant="text" size="sm">
                8
            </IconButton>
            <IconButton variant="text" size="sm">
                9
            </IconButton>
            <IconButton variant="text" size="sm">
                10
            </IconButton>
        </div>
    );
};

export default Pagination;
