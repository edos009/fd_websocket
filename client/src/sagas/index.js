import { takeLatest } from "redux-saga/effects";

import ACTIONS from "../action";
import {
  createMessageSaga,
  getMessagesSaga,
} from "./chatSagas";

function* rootSaga() {
  yield takeLatest(ACTIONS.CREATE_MESSAGE_REQUEST, createMessageSaga);
  yield takeLatest(ACTIONS.GET_MESSAGES_REQUEST, getMessagesSaga);
}

export default rootSaga;