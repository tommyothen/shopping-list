import { FC, RefObject, useState } from "react";
import { EditableShoppingListItem } from "../types/ShoppingListItem";

interface Props {
  id: string;
  name: string;
  checkboxEl: RefObject<HTMLInputElement>;
  editItem: (item: EditableShoppingListItem) => void;
}

const EditableListItem: FC<Props> = ({ id, checkboxEl, editItem, ...rest }) => {
  const [name, setName] = useState(rest.name);
  const [_, setReloads] = useState(0);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    editItem({ id, name: e.target.value });
  };

  if (checkboxEl.current === null) {
    // TODO: THIS IS JANKEY AF
    // Wait 100ms and try reloading the component
    setTimeout(() => setReloads((prev) => prev + 1), 100);
    return <></>;
  }

  return (
    <li key={id}>
      <input
        type="text"
        value={name}
        className="bg-transparent outline-none"
        onChange={handleNameChange}
        onBlur={handleNameChange}
        onFocus={handleNameChange}
        style={{
          textDecoration: checkboxEl.current.checked ? "line-through" : "none",
        }}
      />
    </li>
  );
};

export default EditableListItem;
