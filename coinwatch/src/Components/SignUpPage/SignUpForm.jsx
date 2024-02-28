import React from "react";
import { Form, Field } from "react-final-form";

const SignUpForm = () => {
  const onSubmit = () => {};
  const validate = () => {};

  const MyForm = () => (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h2 className="font-bold">Email Address</h2>
          <div className="border w-full py-2 px-2 rounded-lg">
            <Field
              name="email"
              component="input"
              placeholder="dummy@abc.com"
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="border w-full py-2 px-2 rounded-lg bg-black text-white"
          >
            Sign Up
          </button>
        </form>
      )}
    />
  );

  return (
    <div className="noto-sans-1 flex flex-col w-full h-full items-left justify-center noto-sans-1">
      {MyForm()}
    </div>
  );
};

export default SignUpForm;
