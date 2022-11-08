import Link from "next/link";
import React, { FormEventHandler, useRef, useState } from "react";
import { Alert, AlertType } from "../../ts/interfaces/Alert";
import { useAlertStore } from "../../ts/store/AlertStore";

export const Login: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const alertStore = useAlertStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validate() {
    return form.current?.reportValidity();
  }

  const submit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!validate()) {
      alertStore.addAlert(
        new Alert(
          "I'm a teapot.",
          "Please fill out the fields correctly!",
          AlertType.error
        )
      );
      return;
    }

    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        username,
        password,
      }),
    });

    if (response.status !== 200) {
      if (response.status === 401) {
        alertStore.addAlert(
          new Alert(
            "You shall not pass",
            "Your credentials are incorrect.",
            AlertType.error
          )
        );
      } else {
        alertStore.addAlert(
          new Alert(
            "Login failed",
            "Are your credentials correct?",
            AlertType.error
          )
        );
      }
      return;
    }

    alertStore.addAlert(
      new Alert("Login successful", "Welcome back!", AlertType.success)
    );
  };

  return (
    <>
      <div className="card shadow-xl bg-base-200">
        <form ref={form} onSubmit={submit} className="card-body">
          <h1 className="card-title">Welcome back!</h1>
          <h2>Please log in to continue.</h2>

          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">Email or username</span>
            </label>
            <input
              required
              className="input input-primary w-full max-w-xs"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="password"
              className="input input-primary w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="card-actions justify-between items-center">
            <div className="flex flex-col items-start">
              <Link href="/login/forgot" className="link link-hover">
                Forgot password?
              </Link>
              <Link href="/login/register" className="link link-hover">
                Not registered yet?
              </Link>
            </div>
            <button className="btn btn-primary" role="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
