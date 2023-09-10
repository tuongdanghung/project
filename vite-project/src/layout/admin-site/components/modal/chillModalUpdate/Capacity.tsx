import React, { useEffect, useState } from "react";
import { GetCapacity } from "../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../store";
type Props = {
    id: string;
    handleChange: (title: string) => void;
};

const Capacity: React.FC<Props> = (props) => {
    const [id, setId] = useState<string>(props.id);
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState<any>({ size: 0 });

    const handleChange = (value: string) => {
        setTitle(value);
        props.handleChange(value);
    };
    const capacity = useSelector(
        (state: any) => state?.productReducer.capacity
    );
    const token = localStorage.getItem("auth");
    useEffect(() => {
        dispatch(GetCapacity(null));
        setId(props.id);
        setTitle(capacity.find((item: any) => item._id === id));
    }, [props.id]);
    return (
        <div>
            <label className="block">Title</label>
            <input
                className="border border-collapse rounded-lg w-full"
                type="number"
                value={title.size}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
export default Capacity;
