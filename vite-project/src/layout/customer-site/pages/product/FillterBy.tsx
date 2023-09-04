import { useState } from "react";
import { Collapse, Button } from "@material-tailwind/react";
import { Select, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
interface DataItem {
  id: number;
  title?: string;
  color?: string;
  size?: number;
}

interface CollectionItem {
  id: number;
  title: string;
}

const brand = [
  {
    id: 1,
    title: "Apple",
  },
  {
    id: 2,
    title: "Sam Sung",
  },
  {
    id: 3,
    title: "Xiaomi",
  },
  {
    id: 4,
    title: "Oppo",
  },
];
const color = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "blue",
  },
  {
    id: 3,
    color: "green",
  },
  {
    id: 4,
    color: "yellow",
  },
];
const ram = [
  {
    id: 1,
    size: 8,
  },
  {
    id: 2,
    size: 16,
  },
  {
    id: 3,
    size: 32,
  },
  {
    id: 4,
    size: 64,
  },
];
const Collection: CollectionItem[] = [
  {
    id: 1,
    title: "brand",
  },
  {
    id: 2,
    title: "color",
  },
  {
    id: 3,
    title: "ram",
  },
];

const FilterProduct = () => {
  const dataMap: { [key: string]: DataItem[] } = {
    brand,
    color,
    ram,
  };
  const [openCollapseMap, setOpenCollapseMap] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleOpen = (id: number) => {
    setOpenCollapseMap((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Đảo trạng thái mở/đóng của collapse có id tương ứng
    }));
  };

  return (
    <div className="p-4 border border-collapse rounded-md m-0 top-7">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-3 grid grid-cols-5 gap-5">
          {Collection.map((collectionItem) => {
            const collectionTitle = collectionItem.title;
            const correspondingData = dataMap[collectionTitle];
            return (
              <div key={collectionItem.id}>
                <Button onClick={() => toggleOpen(collectionItem.id)}>
                  {collectionTitle.charAt(0).toUpperCase() +
                    collectionTitle.slice(1)}
                </Button>
                <Collapse open={openCollapseMap[collectionItem.id]}>
                  {correspondingData?.map((dataItem) => (
                    <div key={dataItem.id}>
                      <input type="checkbox" />
                      <span className="ml-3">
                        {dataItem.title || dataItem.color || dataItem.size}
                        {dataItem.size ? "GB" : null}
                      </span>
                    </div>
                  ))}
                </Collapse>
              </div>
            );
          })}
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-5">
          <div>
            <div className="max-w-md" id="select">
              <Select id="countries" required>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </Select>
            </div>
          </div>
          <div>
            <div className="max-w-md">
              <TextInput
                id="email4"
                placeholder="name@flowbite.com"
                required
                rightIcon={HiMail}
                type="email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
