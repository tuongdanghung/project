import React, { useEffect, useState } from "react";
import { GetCategory } from "../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../store";
type Props = {
    id: string;
    handleChange: (title: string) => void;
};

const Category: React.FC<Props> = (props) => {
    const [id, setId] = useState<string>(props.id);
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState<any>({ title: "" });

    const handleChange = (value: string) => {
        setTitle(value);
        props.handleChange(value);
    };
    const category = useSelector(
        (state: any) => state?.productReducer.category
    );
    const token = localStorage.getItem("auth");
    useEffect(() => {
        dispatch(GetCategory(token));
        setId(props.id);
        setTitle(category.find((item: any) => item._id === id));
    }, [props.id]);
    return (
        <div>
            <label className="block">Title</label>
            <input
                className="border border-collapse rounded-lg w-full"
                type="text"
                value={title.title}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
export default Category;
