import { FC, useRef, useState } from "react";
import { EditableShoppingListItem } from "../types/ShoppingListItem";
import EditableListItem from "./EditableListItem";
import HorizontalDivider from "./HorizontalDivider";

interface Props {
  id: string;
  name: string;
  checked: boolean;
  editItem: (item: EditableShoppingListItem) => void;
  removeItem: (id: string) => void;
}

const ListItem: FC<Props> = ({ id, name, checked, editItem, removeItem }) => {
  const checkboxEl = useRef<HTMLInputElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const handleCheck = () => {
    if (checkboxEl.current) {
      editItem({ id, checked: checkboxEl.current.checked });
    }
  };

  return (
    <>
      <div className="flex mb-1 mt-1 group justify-between">
        <div className="flex">
          <input
            ref={checkboxEl}
            className="w-6 h-6 mr-3 accent-dark-sky-blue"
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
          />
          <EditableListItem id={id} name={name} checkboxEl={checkboxEl} editItem={editItem} />
        </div>

        {/* Icon for bin */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-6 h-6 group-hover:opacity-100 opacity-0 transition-opacity duration-50"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => removeItem(id)}
        >
          {!hovered ? (
            <>
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </>
          ) : (
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          )}
        </svg>
      </div>

      <HorizontalDivider />
    </>
  );
};

export default ListItem;
