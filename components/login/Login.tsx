import Link from "next/link";
import React, { FormEventHandler, useRef } from "react";
import { Alert, AlertType } from "../../ts/interfaces/Alert";
import { useAlertStore } from "../../ts/store/AlertStore";

export interface LoginProps {
  dummy: string;
}

export const Login: React.FC<LoginProps> = ({ dummy }: LoginProps) => {
  const form = useRef<HTMLFormElement>(null);
  const alertStore = useAlertStore();

  function validate() {
    return form.current?.reportValidity();
  }

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
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
    alertStore.addAlert(
      new Alert("Amogus", "Schono sus was du da machsch", AlertType.error)
    );
    // TODO send login request
  };

  return (
    <>
      <div className="card shadow-xl">
        <form ref={form} onSubmit={submit} className="card-body">
          <h1 className="card-title">Please login to continue!</h1>

          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              placeholder="john.doe@ohmyclass.ch"
              className="input input-primary w-full max-w-xs"
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
            />
          </div>

          <div className="card-actions justify-between items-center">
            <Link href="/login/forgot">
              <a className="link link-hover">Forgot password?</a>
            </Link>
            <button className="btn btn-primary" role="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
