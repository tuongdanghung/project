import { Route, Routes } from "react-router-dom";
import {
    Cart,
    Checkout,
    Extend,
    Home,
    Login,
    Product,
    ProductDetail,
    Profile,
} from "./customer-site/pages";
import {
    ExtendAdmin,
    Dashboard,
    ManagerUsers,
    ManagerProduct,
    ManagerOrder,
    ManagerBrand,
} from "./admin-site/pages";
import path from "./customer-site/utils/path";
import pathAdmin from "./admin-site/utils/path";
import "react-toastify/dist/ReactToastify.css";

import ManagerComment from "./admin-site/pages/managerComment";
// import Notifications from "react-push-notification";
// function App() {
//   const handleClick = () => {
//     console.log("xxxxx");
//     Notifications({
//       title: "ngol",
//       message: "xxxxx",
//       duration: 4000,
//       native: true,
//       onClick: () => (window.location.href = "https://www.youtube.com/"),
//     });
//   };
//   return (
//     <div className="app">
//       {/* <Notifications /> */}
//       <div className="row">
//         <button className="border-2 border-sky-500" onClick={handleClick}>
//           Hello world.
//         </button>
//       </div>
//     </div>
//   );
// }

function App() {
    return (
        <div className="App font-main w-main h-main text-main">
            <div>
                <Routes>
                    <Route path={path.PUBLIC} element={<Extend />}>
                        <Route path={path.HOME} element={<Home />}></Route>
                        <Route
                            path={path.PRODUCTS_CATEGORY}
                            element={<Product />}
                        ></Route>

                        <Route
                            path={path.PRODUCT_DETAIL}
                            element={<ProductDetail />}
                        ></Route>
                        <Route path={path.CART} element={<Cart />}></Route>
                        <Route
                            path={path.CHECKOUT}
                            element={<Checkout />}
                        ></Route>
                        <Route
                            path={path.MYPROFILE}
                            element={<Profile />}
                        ></Route>

                        {/* 
            <Route path={path.BLOG} element={<Blog />}></Route>
             */}
                        <Route path={path.ALL} element={<Home />}></Route>
                    </Route>
                    <Route path={pathAdmin.ADMIN} element={<ExtendAdmin />}>
                        <Route
                            path={pathAdmin.DASHBOARD}
                            element={<Dashboard />}
                        ></Route>
                        <Route
                            path={pathAdmin.MANAGER_USER}
                            element={<ManagerUsers />}
                        ></Route>
                        <Route
                            path={pathAdmin.MANAGER_PRODUCT}
                            element={<ManagerProduct />}
                        ></Route>
                        <Route
                            path={pathAdmin.MANAGER_ORDER}
                            element={<ManagerOrder />}
                        ></Route>
                        <Route
                            path={pathAdmin.MANAGER_BRAND}
                            element={<ManagerBrand />}
                        ></Route>
                        <Route
                            path={pathAdmin.MANAGER_COMMENT}
                            element={<ManagerComment />}
                        ></Route>
                    </Route>
                    <Route path={path.LOGIN} element={<Login />}></Route>
                    {/*
          <Route path={path.FORGOT} element={<Forgot />}></Route>
        <Route path={path.FINALREGISTER} element={<FinalRegister />}></Route> */}
                </Routes>
            </div>
        </div>
    );
}

export default App;
