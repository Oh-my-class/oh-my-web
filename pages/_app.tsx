import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { useAlertStore } from "../ts/store/AlertStore";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const alertStore = useAlertStore();
  return (
    <div data-theme="night">
      <Component {...pageProps} />
      <div className="flex fixed top-0 right-0 bottom-0 flex-col gap-2 p-2 overflow-scroll w-full md:w-auto pointer-events-none">
        <AnimatePresence>
          {alertStore.alerts.map((alert) => (
            <motion.div
              layout
              className={`alert alert-${alert.type} shadow-lg flex-row w-full pointer-events-auto`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={alert.id}
            >
              <div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">{alert.title}</h3>
                  <div className="text-xs">{alert.message}</div>
                </div>
              </div>
              <div className="flex-none">
                <button
                  onClick={() => alertStore.removeAlert(alert)}
                  className="btn btn-sm"
                >
                  X
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MyApp;
