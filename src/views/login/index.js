import { Field, Form, Formik } from "formik";
import React from "react";
import { LoginSchema } from "../../components/Schemas";
import { useDispatch } from "react-redux";
import { setUser, showUser } from "../../store/slices/userReducer";

const Login = () => {
  const dispatch = useDispatch();

  const testFunc = () => {
    dispatch(setUser({ token: "HOLA MUNDO" }));
  };
  const test2 = () => {
    dispatch(showUser());
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          //console.log(values);
          testFunc();
        }}
      >
        {({ errors, touched }) => (
          <section>
            <Form>
              <p>Email</p>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <p>password</p>
              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
            <button onClick={()=>test2()}>weqweqwe</button>
          </section>
        )}
      </Formik>
    </div>
  );
};

export default Login;
