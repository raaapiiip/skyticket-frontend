import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import BoxSearch from "../Search/BoxSearch";

function SetClass({ close, setSeat, data }) {
  const [openClass, setOpenClass] = useState(null);
  const text = ["Economy", "Premium Economy", "Business", "First Class"];

  const toggleClass = (id) => {
    setOpenClass(openClass === id ? null : id);
  };

  const handleSave = (x) => {
    setSeat(x);
    close();
  };

  return (
    <BoxSearch
      save={() => handleSave(data?.[openClass]?.input_value || text[openClass])}
      closeHandler={close}
    >
      <div className="w-full select-none p-4 py-0">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`flex w-full items-center justify-between border-b-2 px-4 py-1 text-black ${
              data?.[index] ? "cursor-pointer" : "cursor-not-allowed"
            } ${openClass === index ? "bg-[#4B1979]" : ""}`}
            onClick={data?.[index] ? () => toggleClass(index) : ""}
          >
            <div className="flex flex-col">
              <div
                className={`text-left font-medium ${
                  openClass === index ? "text-white" : ""
                }`}
              >
                {data?.[index]?.seat_class_type || text[index]}
              </div>
              <div
                className={`text-left font-medium ${
                  openClass === index ? "text-white" : "text-[#7126B5]"
                }`}
              >
                {data?.[index]?.seat_class_price || "IDR 0"}
              </div>
            </div>
            {openClass === index ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-5 w-5 text-green-600"
              />
            ) : null}
          </div>
        ))}
      </div>
    </BoxSearch>
  );
}

export default SetClass;
