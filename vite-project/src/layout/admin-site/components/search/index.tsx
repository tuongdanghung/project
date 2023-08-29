import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
const Search = () => {
    return (
        <div className="w-full md:w-72">
            <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
        </div>
    );
};

export default Search;
