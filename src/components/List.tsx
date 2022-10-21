import { FC } from "react";
import { EditableShoppingListItem, ShoppingListItem } from "../types/ShoppingListItem";
import ListItem from "./ListItem";

interface Props {
  items: ShoppingListItem[];
  removeItem: (id: string) => void;
  editItem: (item: EditableShoppingListItem) => void;
}

const List: FC<Props> = ({ items, editItem, removeItem }) => {
  return (
    <ul
      style={{
        // Max height should be calculated to be the height of the screen minus the height of the elements above the list
        maxHeight: `calc(100vh - 200px)`,
      }}
      className="list overflow-auto"
    >
      {items.map((item) => (
        <ListItem {...item} editItem={editItem} removeItem={removeItem} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
