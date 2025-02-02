"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useFormik } from "formik";

const LoginPage = () => {
  const navigate = useNavigate();
  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
    { "p-input-filled": "filled" }
  );

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      sessionStorage.setItem("token", JSON.stringify(values));
      navigate("/");
    },
  });

  return (
    <div className={containerClassName}>
      <div className="flex flex-column align-items-center justify-content-center px-5">
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div
              className=" surface-card py-4 px-5 sm:px-8"
              style={{ borderRadius: "53px" }}
            >
              <div className="mb-4">
                <div className="text-900 text-xl font-bold mb-2 ">Log in</div>
                <span className="text-600 font-medium">
                  Please enter your details
                </span>
              </div>

              <div className="flex flex-column">
                <IconField iconPosition="left" className="mb-4">
                  <InputIcon className="pi pi-envelope"> </InputIcon>
                  <InputText
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full md:w-25rem w-full md:w-25rem"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </IconField>

                <IconField iconPosition="left" className="mb-4">
                  <InputIcon className="pi pi-lock"> </InputIcon>
                  <InputText
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="w-full md:w-25rem w-full md:w-25rem"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </IconField>

                <Button
                  label="Sign In"
                  className="w-full p-3 text-xl"
                  type="submit"
                ></Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
