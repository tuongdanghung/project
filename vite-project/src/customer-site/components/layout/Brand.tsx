import React from "react";
import { Link } from "react-router-dom";
import path from "../../utils/path";
const data = [
    {
        id: 1,
        title: "Mobile",
        img: `https://w7.pngwing.com/pngs/378/624/png-transparent-iphone-14.png`,
        slug: "mobile",
    },
    {
        id: 2,
        title: "Smart TV",
        img: `https://w7.pngwing.com/pngs/258/972/png-transparent-apple-tv-4k-television-set-top-box-apple-television-electronics-fruit-nut.png`,
        slug: "smartTV",
    },
    {
        id: 3,
        title: "Watch",
        img: `https://w7.pngwing.com/pngs/25/277/png-transparent-apple-watch-series-2-apple-watch-series-3-apple-watch-series-1-smart-apple-watch-sports-watch-band-watch-accessory-sport-grey-thumbnail.png`,
        slug: "watch",
    },
    {
        id: 4,
        title: "Earphone",
        img: `https://w7.pngwing.com/pngs/390/309/png-transparent-headphones-apple-earbuds-phone-connector-audio-headphones-electronics-audio-equipment-apple.png`,
        slug: "earPhone",
    },
    {
        id: 5,
        title: "Laptop",
        img: `https://banner2.cleanpng.com/20180607/czk/kisspng-macbook-pro-13-inch-laptop-macbook-air-display-table-5b19b9d373c2a6.1851984215284126274742.jpg`,
        slug: "laptop",
    },
    {
        id: 6,
        title: "Tablet",
        img: `https://img.favpng.com/19/21/21/ipad-1-mac-book-pro-apple-ipad-pro-9-7-png-favpng-GePiGq0nyBN1EeH5zZbU7EiDu.jpg`,
        slug: "tablet",
    },
    {
        id: 7,
        title: "Computer",
        img: `https://e7.pngegg.com/pngimages/848/92/png-clipart-macbook-pro-imac-macbook-air-imac-g3-computer-computer-monitor-accessory.png`,
        slug: "computer",
    },
    {
        id: 8,
        title: "Speaker",
        img: `data:image/jpeg;base64,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`,
        slug: "speaker",
    },
    {
        id: 9,
        title: "Camera",
        img: `https://e7.pngegg.com/pngimages/723/795/png-clipart-canon-camera-classic-canon-camera.png`,
        slug: "camera",
    },
    {
        id: 10,
        title: "Hard drive and storage",
        img: `https://w7.pngwing.com/pngs/652/722/png-transparent-computer-cases-housings-hard-drives-disk-storage-usb-flash-drives-hard-disc-miscellaneous-electronics-hard-disk-drive.png`,
        slug: "hard-drive-and-storage",
    },
    {
        id: 11,
        title: "GPS locating device",
        img: `https://cdn.imgbin.com/8/16/23/imgbin-gps-navigation-systems-vehicle-tracking-system-gps-tracking-unit-global-positioning-system-car-aPP8hVw7zSNfkk2w0PNPkAXS7.jpg`,
        slug: "gps",
    },
    {
        id: 12,
        title: "Gaming equipment",
        img: `https://w7.pngwing.com/pngs/739/230/png-transparent-playstation-3-accessory-joystick-game-controllers-video-game-consoles-joystick-electronics-xbox-video-game.png`,
        slug: "gaming-equipment",
    },
    {
        id: 13,
        title: "IoT devices",
        slug: "IoT-devices",
    },
];
const Brand = () => {
    return (
        <div className="p-4 sticky border border-collapse rounded-md m-0 top-7">
            <h1 className="text-2xl text-center font-semibold mb-5">
                Category
            </h1>
            <ul className="max-w-md list-none list-inside">
                {data.map((item: any) => {
                    return (
                        <li key={item.id} className="mb-4">
                            <Link
                                className="text-gray-900 hover:text-blue-500 flex items-center"
                                to={`/${path.PRODUCTS}/${item.slug}`}
                            >
                                <img
                                    src={item.img}
                                    width="50px"
                                    className="mr-3"
                                    alt=""
                                />
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Brand;
