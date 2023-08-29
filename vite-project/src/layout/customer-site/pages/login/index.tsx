import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
    const data = [
        {
            label: "Sign in",
            value: "html",
            desc: <SignIn />,
        },
        {
            label: "Sign up",
            value: "react",
            desc: <SignUp />,
        },
        {
            label: "Forgot password",
            value: "forgot",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga itaque tempore, illum in pariatur facere praesentium,
              voluptates repellendus at porro sed est perspiciatis officia cum 
              expedita aliquam enim rerum labore.`,
        },
    ];

    return (
        <div className=" h-screen flex">
            <Tabs
                id="custom-animation"
                value="html"
                className="w-[500px] m-auto p-3 border border-collapse"
            >
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default Login;