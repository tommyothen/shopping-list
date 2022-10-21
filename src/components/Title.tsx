import { FC, useState } from "react";

export const vals = {
  title: {
    default: "My Shopping List",
    edit: "Add a Title",
  },
  chars: {
    width: 1.13,
    max: 20,
  },
};

interface Props {
  title: string;
  setTitle: (title: string) => void;
}

// TODO: Add pencil icon to edit button
const Title: FC<Props> = ({ title, setTitle }) => {
  const [charCount, setCharCount] = useState(title.length);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= vals.chars.max) {
      setTitle(e.target.value);
      setCharCount(e.target.value.length);

      // Save title to localStorage
      localStorage.setItem("title", e.target.value);
    }
  };

  return (
    <div className="flex justify-center">
      <h1 className="text-4xl font-bold">
        {/* Hover Group */}
        <div className="group flex">
          <input
            type="text"
            value={title}
            placeholder={title === "" ? vals.title.edit : ""}
            onChange={handleTitleChange}
            onFocus={handleTitleChange}
            onBlur={handleTitleChange}
            // Make the width of the input the same as the title
            style={{
              width: `${
                title !== ""
                  ? charCount * vals.chars.width
                  : vals.title.edit.length * vals.chars.width
              }rem`,
            }}
            className="outline-none bg-transparent leading-normal text-center"
          ></input>
          {/* Underline opacity 100% on focus */}
          <div
            className="absolute top-[4.25rem] h-[0.125rem] bg-dark-sky-blue group-focus-within:opacity-100 opacity-0 transition-opacity duration-100"
            style={{
              width: `${
                title !== ""
                  ? charCount * vals.chars.width
                  : vals.title.edit.length * vals.chars.width
              }rem`,
            }}
          ></div>

          <div className="flex">
            {/* Counter opacity 100% on focus */}
            <span
              className={`${
                charCount > vals.chars.max ? "text-burnt-sienna" : "text-light-cyan"
              } text-sm ml-2 group-focus-within:opacity-100 opacity-0 transition-opacity duration-100 select-none absolute pt-6`}
            >
              {charCount}/{vals.chars.max}
            </span>

            {/* Pencil icon */}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-light-cyan group-focus-within:opacity-0 opacity-70 mt-[1.125rem] ml-1"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Title;
