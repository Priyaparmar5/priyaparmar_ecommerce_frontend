import React from "react";
import InputField from "../../components/InputField";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup.string().required("Password is required").min(4).max(20),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    // Form data is valid, perform further actions (e.g., submit form)
    if (Object.keys(errors).length === 0) {
      console.log(data);
    }
  };

  return (
    <div>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit((data) => onSubmit(data, errors))}>
                <h2>Login</h2>
                <InputField
                  label="Email address"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  // onChange={onChangeHandler}
                />
                <span className="span1">{errors.email?.message}</span>
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  register={register}
                  error={errors.password?.message}
                  //   onChange={onChangeHandler}
                />
                <p className="span1">{errors.password?.message}</p>

                <div class="d-flex justify-content-around align-items-right mb-4">
                  <div className="ms-auto">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-lg btn-block">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
