import produce from "immer";
import ACTIONS from "../action";

const initialState = {
  messages: [],
  isFetching: false,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_MESSAGE_REQUEST:
    case ACTIONS.GET_MESSAGES_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isFetching = true;
      });
    }
    case ACTIONS.CREATE_MESSAGE_SUCCESS: {
      const {
        payload: { message },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(message);
      });
    }
    case ACTIONS.GET_MESSAGES_SUCCESS: {
      const {
        payload: { messages },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.messages.push(...messages);
      });
    }
    case ACTIONS.CREATE_MESSAGE_ERROR:
    case ACTIONS.GET_MESSAGES_ERROR: {
      const {
        payload: { error },
      } = action;

      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.error = error;
      });
    }

    default:
      return state;
  }
};

export default chatReducer;
