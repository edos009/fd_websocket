import { put } from "redux-saga/effects";
import * as API from "../api";

import * as ActionChatCreator from "../actions/chatAC";

export function* createMessageSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.createMessage(action.payload.message);
    yield put(ActionChatCreator.createMessageSuccess(data));
  } catch (error) {
    yield put(ActionChatCreator.createMessageError(error));
  }
}

export function* getMessagesSaga(action) {
  try {
    const {
      data: { data },
    } = yield API.getAllMessages();
    yield put(ActionChatCreator.getMessagesSuccess(data));
  } catch (error) {
    yield put(ActionChatCreator.getMessagesError(error));
  }
}
