import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { BiSolidDiscount } from "react-icons/bi";
import { MdFiberNew, MdFeaturedPlayList } from "react-icons/md";
import Seller from "./Seller";
import NewArrivals from "./NewArrivals";
import FeaturedProducts from "./FeaturedProducts";
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}
const Panel = () => {
    const product: Product[] = [
        {
            id: 0,
            title: "iphone 11",
            price: 100,
            image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 1,
            title: "iphone 12",
            price: 100,
            image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 2,
            title: "iphone 13",
            price: 100,
            image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 3,
            title: "iphone 14",
            price: 100,
            image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 4,
            title: "iphone 15",
            price: 100,
            image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        },
    ];
    const data = [
        {
            label: "BEST SELLER",
            value: "bestSeller",
            icon: BiSolidDiscount,
            desc: <Seller product={product} />,
        },
        {
            label: "NEW ARRIVALS",
            value: "newArrivals",
            icon: MdFiberNew,
            desc: <NewArrivals product={product} />,
        },
        {
            label: "FEATURED PRODUCTS",
            value: "featuredProducts",
            icon: MdFeaturedPlayList,
            desc: <FeaturedProducts product={product} />,
        },
    ];
    return (
        <Tabs
            value="bestSeller"
            className="mt-6 border border-collapse p-6 rounded-md "
        >
            <TabsHeader>
                {data.map(({ label, value, icon }) => (
                    <Tab key={value} value={value}>
                        <div className="flex items-center gap-2">
                            {React.createElement(icon, {
                                className: "w-5 h-5",
                            })}
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="p-0">
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
};

export default Panel;
