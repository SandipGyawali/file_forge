import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "@/interfaces/auth";

const useAuthStore = create()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setAuthStatus: (status: boolean) => set({ isAuthenticated: status }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export { useAuthStore };
