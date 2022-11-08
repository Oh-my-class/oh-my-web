import { Alert } from "../interfaces/Alert";
import create from "zustand";

interface IAlertStore {
  alerts: Alert[];
  nextId: number;
  addAlert: (alert: Alert) => void;
  removeAlert: (alert: Alert) => void;
}

export const useAlertStore = create<IAlertStore>()((set, get) => ({
  alerts: [],
  nextId: 0,
  addAlert: (alert) => {
    alert.id = get().nextId;
    setTimeout(() => get().removeAlert(alert), alert.duration * 1000);

    set((state) => ({
      alerts: [alert, ...state.alerts],
      nextId: state.nextId + 1,
    }));
  },
  removeAlert: (alert) =>
    set((state) => ({
      alerts: state.alerts.filter((item) => item.id !== alert.id),
    })),
}));
