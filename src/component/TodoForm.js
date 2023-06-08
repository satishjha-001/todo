import React, { useId } from "react";
import { Formik } from "formik";
import "../App.css";
import * as Yup from "yup";
import { TodoContext } from "../App";
import { message } from "./SnackAlert";

const validate = Yup.object({
  name: Yup.string()
    .min(3, "must be 3 charecters or more")
    .required("Required"),
  email: Yup.string().email("Email is invalid").required("Required"),
  age: Yup.string().min(1, " 1 year or more").required("Required"),
  mobile: Yup.string()
    .min(10, "Mobile number must be at least 10 digit")
    .required("Required"),
  address: Yup.string().required("Required"),
});

const TodoForm = ({todo,handleClose,data}) => {
  const setTodo = React.useContext(TodoContext);
  const id = useId(); 

  const updateState = (val) => {
    const newState = todo?.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === data.id) {
        return {...obj, id:val.id,
            name: val.name,
            email:val.email,
            age:val.age,
            mobile:val.mobile,
            address:val.address,};
      }

      // 👇️ otherwise return the object as is
      return obj;
    });

    setTodo(newState);
  };
  return (
    <div className="app">
      <h1>Add Todo</h1>

      <Formik
        initialValues={{
            id:data?data?.id:id,
          name: data?data?.name:"",
          email:data?data?.email:"",
          age:data?data?.age:"",
          mobile:data?data?.mobile:"",
          address:data?data?.address:"",
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          message.success(`Todo has been ${data?"updated":"inserted"} successfully`);
          // alert(JSON.stringify(values, null, 2));
          data?updateState(values): setTodo([...todo,values]);
          handleClose();

        }}
        validationSchema={validate}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: "block" }}>
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="age" style={{ display: "block" }}>
                Age
              </label>
              <input
                id="age"
                placeholder="Enter your age"
                type="text"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.age && touched.age ? "text-input error" : "text-input"
                }
              />
              {errors.age && touched.age && (
                <div className="input-feedback">{errors.age}</div>
              )}

              <label htmlFor="mobile" style={{ display: "block" }}>
                Mobile
              </label>
              <input
                id="mobile"
                placeholder="Enter your mobile"
                type="text"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.mobile && touched.mobile
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.mobile && touched.mobile && (
                <div className="input-feedback">{errors.mobile}</div>
              )}

              <label htmlFor="address" style={{ display: "block" }}>
                Address
              </label>
              <input
                id="address"
                placeholder="Enter your address"
                type="text"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.address && touched.address
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.address && touched.address && (
                <div className="input-feedback">{errors.address}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                {data? "Update":"Submit"}
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TodoForm;
