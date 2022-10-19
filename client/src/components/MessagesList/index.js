import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as chatAC from "../../action/chatAC";

const MessagesList = () => {
  const { messages, isFetching, error } = useSelector((state) => state.chat);

  const { getMessagesRequest } = bindActionCreators(chatAC, useDispatch());

  useEffect(() => {
    getMessagesRequest();
    // eslint-disable-next-line
  }, []);
  
  return (
    <section>
      {isFetching && <div>Loading...</div>}
      {error && <div>{JSON.stringify(error)}</div>}
      <ul>
        {messages.length > 0 &&
          messages.map((m) => (
            <li key={m._id}>
              {m.content} from {m.user}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default MessagesList;
