import { FC, useRef, useState } from "react";
import HorizontalDivider from "./HorizontalDivider";

interface Props {
  addItem: (name: string) => void;
}

const ItemInput: FC<Props> = ({ addItem }) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleAddItem = () => {
    if (!inputElement.current) return;

    if (inputElement.current.value !== "") {
      addItem(inputElement.current.value);
      inputElement.current.value = "";
    }
  };

  return (
    <>
      <div className="flex mb-1">
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <svg
            aria-hidden="true"
            className="transition ease-in-out w-6 h-6 motion-safe:group-hover:scale-[1.05] fill-light-cyan"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleAddItem}
          >
            {hovered ? (
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            ) : (
              <>
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </>
            )}
          </svg>
        </div>

        <input
          ref={inputElement}
          className="w-full ml-2 pl-1 bg-transparent placeholder-lavender-blush"
          type="text"
          placeholder="Add an item..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItem(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
      <HorizontalDivider />
    </>
  );
};

export default ItemInput;
