import React from "react";
import { Typography } from "@material-tailwind/react";
const Head = (props: any) => {
    return (
        <Typography variant="h5" color="blue-gray">
            {props.title}
        </Typography>
    );
};

export default Head;
