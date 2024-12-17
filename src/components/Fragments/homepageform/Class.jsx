import { useEffect, useState } from "react";
import Backdrop from "../../Elements/Search/Backdrop";
import SetClass from "../../Elements/Input/SetClass";
import { fetchClassPrice } from "../../../services/classPriceService";

function Class({ change, data }) {
  const [showSetClass, setShowSetClass] = useState(false);
  const [classData, setClassData] = useState(null);
  const [seat, setSeats] = useState("");

  const handleSetSeats = (newSeat) => {
    setSeats(newSeat);
    change(newSeat);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchClassPrice(data);
        setClassData(response);
      } catch (err) {}
    };
    if (showSetClass) {
      fetchData();
    }
  }, [showSetClass]);

  return (
    <>
      <input
        type="text"
        value={
          seat == "PremiumEconomy"
            ? "Premium Economy"
            : seat == "FirstClass"
              ? "First Class"
              : seat
        }
        onClick={() => setShowSetClass(true)}
        className="w-[30vw] cursor-pointer border-b border-gray-500 bg-white py-2 font-medium text-black placeholder-gray-300 focus:border-slate-400 focus:outline-none md:w-[150px]"
        placeholder="Select Class"
        readOnly
      />

      {showSetClass && (
        <>
          <Backdrop />
          <SetClass
            close={() => setShowSetClass(false)}
            setSeat={handleSetSeats}
            data={classData}
          />
        </>
      )}
    </>
  );
}

export default Class;
