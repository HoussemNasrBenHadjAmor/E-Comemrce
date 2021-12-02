import * as actions from "../constants/actionTypes";

import * as api from "../../api/dciApi";

export const create = (dci) => async (dispatch) => {
  try {
    const { data } = await api.createDci(dci);
    dispatch({ type: actions.CREATE, payload: data });
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllDcis = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.getAllDcis();
    dispatch({ type: actions.FETCH_ALL, payload: data });
  } catch (error) {
    return error;
  }
};

export const getOneDci = (id) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.getByIdDci(id);
    dispatch({ type: actions.GETONE, payload: data });
  } catch (error) {
    return error;
  }
};

export const updateOne = (id, dci) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.updateDci(id, dci);
    dispatch({ type: actions.UPDATA, payload: data });
  } catch (error) {
    return error;
  }
};

export const deleteOne = (id) => async (dispatch) => {
  try {
    await api.deleteOneDci(id);
    dispatch({ type: actions.DELETE, payload: id });
  } catch (error) {
    return error;
  }
};
