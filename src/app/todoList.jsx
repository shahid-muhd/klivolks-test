"use client";
import axios from "axios";
import React, { useState } from "react";

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [listItems, setListItems] = useState([]);

  const addItem = () => {
    axios.post("http://localhost:8000/", { list_item: newItem }).then((res) => {
      const newList = listItems;
      listItems.push(newList);

      setListItems(newList);
    });
  };

  const removeItem = (item) => {
    const newList = listItems.filter((item) => item != item);

    setListItems(newList);
  };

  return (
    <div classname="w-1/2 h-fit">
      <div classname="w-full flex gap-3">
        <div>
          <input
            classname='text-black '
            value={newItem}
            type="text"
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={() => addItem(newItem)}
            classname=" btn border rounded-md bg-white w-12 h-12"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        {listItems.length > 0 &&
          listItems.map((item, index) => (
            <div classname="flex text-slate-300" key={index}>
              <p>{item}</p>
              <button
                onClick={() => {
                  removeItem(item);
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
