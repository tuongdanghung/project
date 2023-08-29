import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../index.scss";
import "swiper/css";
const NewArrivals = (props: any) => {
    return (
        <div className="grid grid-cols-1 gap-5">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {props.product.map((item: any) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Card className="mt-6 border border-collapse">
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-2"
                                    >
                                        <img src={item.image} alt="" />
                                    </Typography>
                                    <Typography className="m-auto">
                                        <span className="text-2xl font-bold">
                                            {item.title}
                                        </span>{" "}
                                        <br />
                                        <span>Price: {item.price}$</span>
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default NewArrivals;
