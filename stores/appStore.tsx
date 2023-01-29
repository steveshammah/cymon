import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface OrgInfo {
  alias?: string;
}

interface AppState extends OrgInfo {
  [key: string]: any;
}
const defaultState = {
  alias: undefined,
};

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        ...defaultState,
        setOrg: (data: OrgInfo) =>
          set((state: AppState) => ({
            ...state,
            ...data,
          })),
        resetUserInfo: () => {
          set({ ...defaultState });
        },
      }),
      {
        name: "Org-Info",
        onRehydrateStorage: (state) => {
          if (state) {
            state.setHydrated();
            state.hydrated = true;
          }
        },
      }
    )
  )
);
