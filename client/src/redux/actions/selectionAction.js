import { axiosClient } from "../../components/axios/axiosClient";

const id = localStorage.getItem("userId");
const token = localStorage.getItem("token");

export const getSelection = () => async (dispatch) => {
  try {
    const data = await axiosClient.get(`/user/selection/${localStorage.getItem("userId")}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "GET_SELECTION", payload: data.data.selection });
    // console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};

export const addSelection = (selectionData) => async (dispatch) => {
  try {
    const data = await axiosClient.post(
      `/add/selection`,
      {
        user: localStorage.getItem("userId"),
        selection: selectionData,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "CREATE_SELECTION", payload: data.data.selection });
    // console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
