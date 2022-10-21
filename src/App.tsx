import { HeadProvider, Link, Meta, Title as HeadTitle } from "react-head";
import List from "./components/List";
import Title, { vals } from "./components/Title";
import { EditableShoppingListItem, ShoppingListItem } from "./types/ShoppingListItem";
import { useEffect, useState } from "react";
import "./App.css";
import ItemInput from "./components/AddItem";
import reactLogo from "./assets/react.svg";

// Create a uuid for each item
const createID = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

function App() {
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [title, setTitle] = useState<string>(vals.title.default);

  // Load items and title from local storage
  useEffect(() => {
    const localItems = localStorage.getItem("items");
    if (localItems) {
      setItems(JSON.parse(localItems));
    }

    const localTitle = localStorage.getItem("title");
    if (localTitle) {
      setTitle(localTitle);
    }

    setLoading(false);
  }, [setLoading, setItems]);

  const updateLocalStorage = (items: ShoppingListItem[]) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const setItemsAndLocalStorage = (items: ShoppingListItem[]) => {
    setItems(items);
    updateLocalStorage(items);
  };

  const addItem = (name: string) => {
    const newItem: ShoppingListItem = {
      name,
      id: createID(),
      checked: false,
    };

    setItemsAndLocalStorage([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItemsAndLocalStorage(items.filter((item) => item.id !== id));
  };

  const editItem = (item: EditableShoppingListItem) => {
    setItemsAndLocalStorage(
      items.map((i) => {
        if (i.id === item.id) {
          if ("name" in item) {
            return { ...i, name: item.name };
          } else {
            return { ...i, checked: item.checked };
          }
        }
        return i;
      })
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-30" />

      <div className="absolute w-screen h-screen grid place-items-center text-light-cyan z-10">
        <div className="h-full pt-5 flex flex-col w-5/6">
          <Title title={title} setTitle={setTitle} />
          <span>
            {items.filter((item) => !item.checked).length} {items.length === 1 ? "item" : "items"}
          </span>
          {/* Input to add items to the list */}
          <ItemInput addItem={addItem} />

          {/* List of items */}
          <List items={items} removeItem={removeItem} editItem={editItem} />
        </div>
      </div>
    </>
  );
}

export default App;
