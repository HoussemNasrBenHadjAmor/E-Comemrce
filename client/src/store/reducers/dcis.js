import * as actions from "../constants/actionTypes";

export default (dcis = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL:
      return action.payload;

    case actions.CREATE:
      return action.payload;

    case actions.GETONE:
      return dcis.map((dci) =>
        dci._id === action.payload._id ? action.payload : dcis
      );

    /**
     * * ----------------------------------------------------------------------------
     */

    case actions.UPDATA:
      /**
       * ? the first return worked cool
       * ! but the second return did not worked
       */
      return dcis.filter((dci) => dci._id === action.payload._id);
    // return dcis.map((dci) =>
    //   dci._id === action.payload._id ? action.payload : dcis
    // );

    /**
     * * ----------------------------------------------------------------------------
     */

    case actions.DELETE:
      return dcis.filter((dci) => dci._id !== action.payload);

    default:
      return dcis;
  }
};
