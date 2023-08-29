import { Link, useParams } from "react-router-dom";
import Brand from "../../components/layout/Brand";
import FillterProduct from "./FillterBy";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Pagination from "../../components/pagination";
import path from "../../utils/path";
const Product = () => {
    const params = useParams();
    return (
        <div>
            <FillterProduct />
            <div className="p-4 border border-collapse rounded-md m-0 mt-6">
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
                                <br />
                                <span>Price: 123$</span>
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Link to={`/${path.PRODUCTS}/mobile/1`}>
                                Read More xxx
                            </Link>
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
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
                                <span className="text-2xl font-bold">
                                    xxxxx
                                </span>{" "}
                                <br />
                                <span>Price: 123$</span>
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button>Read More</Button>
                        </CardFooter>
                    </Card>
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default Product;
