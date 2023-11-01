import React, { useEffect, useState } from "react";
import CommSelection from "../../components/selection/CommSelection";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelection,
  getSelection,
} from "../../redux/actions/selectionAction";
import { ToastContainer, toast } from "react-toastify";

const Selection = () => {
  const [value, setValue] = useState();
  const [selection, setSelection] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Selection.selections);

  useEffect(() => {
    dispatch(getSelection());
    // eslint-disable-next-line
  }, []);

  const handleAdd = (e) => {
    setSelection((prevSelection) => [...prevSelection, value]);
    setValue("");
  };

  const handleSave = () => {
    if (selection.length > 0) {
      dispatch(addSelection(selection));
      setSelection([]);
      toast.success("Selection added successfully");
    } else {
      toast.error("Please select atleast one value");
    }
  };


  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="h-[300px]  overflow-y-auto">
        <div className="mt-10 ml-5 flex flex-col md:flex-row items-center justify-center">
          <select
            name="gender"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          >
            <option>Choose value</option>
            <option value="t">t</option>
            <option value="r">r</option>
          </select>
          <div className="mt-5 md:mt-0">
            <button
              type="button"
              onClick={handleAdd}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setSelection([])}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 ml-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 ml-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
          </div>
        </div>
        <div className="">
          <CommSelection center={true} selection={selection} />
        </div>
      </div>
      <div className="pt-2 ml-5 bg-slate-100">
        <h2 className="text-center text-xl  border-b-2">All Selections</h2>
        {state?.length === 0 ? (
          <p className="text-black text-center p-5">No Selections Found</p>
        ) : (
          <div className="mt-3 gap-3 grid grid-cols-2 md:grid-cols-4">
            {state?.map((e) => (
              <div
                onClick={() => setSelection(e.selection)}
                key={e._id}
                className="cursor-pointer h-[200px] w-[200px]"
              >
                <CommSelection center={true} selection={e.selection} />
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Selection;
