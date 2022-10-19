import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as chatAC from '../../action/chatAC'

const MessagesForm = () => {
  const {createMessageRequest} = bindActionCreators(chatAC, useDispatch());
  const onSubmit = (values, formikBag) => {
    createMessageRequest(values);
  };
  return (
    <Formik initialValues={{ content: "", user: "" }} onSubmit={onSubmit}>
      <Form>
        <Field name="content" placeholder="Content..." />
        <Field name="user" placeholder="User name..." />
        <input type="submit" value="Send new message" />
      </Form>
    </Formik>
  );
};

export default MessagesForm;
