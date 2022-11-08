import Link from "next/link";
import React, { FormEventHandler, useRef, useState } from "react";
import { Alert, AlertType } from "../../ts/interfaces/Alert";
import { useAlertStore } from "../../ts/store/AlertStore";

export const Register: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alertStore = useAlertStore();

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

    // TODO centralize API somewhere
    const response = await fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.status !== 200) {
      alertStore.addAlert(
        new Alert(
          "Registration failed",
          "Your registration could not be finished. Are you already registered or is your username already taken?",
          AlertType.error
        )
      );
      return;
    }

    alertStore.addAlert(
      new Alert(
        "Registration successful",
        "Thanks for choosing Oh my Class!",
        AlertType.success
      )
    );
  };

  return (
    <>
      <div className="card shadow-xl bg-base-200">
        <form ref={form} onSubmit={submit} className="card-body">
          <h1 className="card-title">
            Let&apos;s make your school life easier!
          </h1>
          <h2>Start by creating a free account.</h2>

          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              required
              placeholder="SuperKaren52"
              className="input input-primary w-full max-w-xs"
              minLength={6}
              maxLength={32}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              placeholder="john.doe@ohmyclass.ch"
              className="input input-primary w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
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
              <Link href="/login" className="link link-hover">
                Already have an account?
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
