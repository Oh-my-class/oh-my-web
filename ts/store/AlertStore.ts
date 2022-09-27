import { Alert } from "../interfaces/Alert";
import create from "zustand";

interface IAlertStore {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
}

export const useAlertStore = create<IAlertStore>()((set) => ({
  alerts: [],
  addAlert: (alert) => set((state) => ({ alerts: [alert, ...state.alerts] })),
}));
