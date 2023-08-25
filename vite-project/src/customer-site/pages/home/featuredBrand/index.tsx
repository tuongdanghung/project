import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const FeaturedBrand: React.FC = () => {
    return (
        <div className="mt-6 customer-care p-6 bg-white border border-collapse rounded-md">
            <div className="flex">
                <h1>
                    Featured Brand :{" "}
                    <span className="text-red-700 font-bold">SAMSUNG</span>
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-5">
                <Card className="mt-6 border border-collapse">
                    <CardBody>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2"
                        >
                            <img
                                src={
                                    "https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                                }
                                alt=""
                            />
                        </Typography>
                        <Typography className="m-auto">
                            <span className="text-2xl font-bold">xxxxx</span>{" "}
                            <br />
                            <span>Price: 123$</span>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
                <Card className="mt-6 border border-collapse">
                    <CardBody>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2"
                        >
                            <img
                                src={
                                    "https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                                }
                                alt=""
                            />
                        </Typography>
                        <Typography className="m-auto">
                            <span className="text-2xl font-bold">xxxxx</span>{" "}
                            <br />
                            <span>Price: 123$</span>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
                <Card className="mt-6 border border-collapse">
                    <CardBody>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2"
                        >
                            <img
                                src={
                                    "https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                                }
                                alt=""
                            />
                        </Typography>
                        <Typography className="m-auto">
                            <span className="text-2xl font-bold">xxxxx</span>{" "}
                            <br />
                            <span>Price: 123$</span>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
                <Card className="mt-6 border border-collapse">
                    <CardBody>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2"
                        >
                            <img
                                src={
                                    "https://salt.tikicdn.com/cache/280x280/ts/product/ca/0d/b0/e183f5f1d1e66d8c402b50b476e4a486.jpg.webp"
                                }
                                alt=""
                            />
                        </Typography>
                        <Typography className="m-auto">
                            <span className="text-2xl font-bold">xxxxx</span>{" "}
                            <br />
                            <span>Price: 123$</span>
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default FeaturedBrand;
