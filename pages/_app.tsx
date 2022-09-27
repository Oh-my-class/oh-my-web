import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { useAlertStore } from "../ts/store/AlertStore";

function MyApp({ Component, pageProps }: AppProps) {
  const alertStore = useAlertStore();
  return (
    <div data-theme="night">
      <Component {...pageProps} />
      <div className="flex fixed top-0 right-0 bottom-0 flex-col gap-2 p-2 overflow-scroll w-full md:w-auto pointer-events-none">
        {alertStore.alerts.map((alert) => (
          <div
            className={`alert alert-${alert.type} shadow-lg flex-row w-full pointer-events-auto`}
            key={alert.id}
          >
            <div>
              <div className="text-left">
                <h3 className="font-bold text-lg">{alert.title}</h3>
                <div className="text-xs">{alert.message}</div>
              </div>
            </div>
            <div className="flex-none">
              <button className="btn btn-sm">X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApp;
