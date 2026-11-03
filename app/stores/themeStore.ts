import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Theme {
  type: string;
  color: string;
}

const DarkTheme: Theme = {
  type: 'dark',
  color: '#111'
};

const AvailableThemes: Theme[] = [DarkTheme];

interface ThemeStore {
  themes: Theme[];
  theme: Theme;
  nextTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      themes: [...AvailableThemes],
      theme: DarkTheme,
      nextTheme: () => {
        set(() => ({ theme: DarkTheme }));
      },
    }),
    {
      name: "theme-storage",
      partialize: () => ({ theme: DarkTheme }),
    }
  )
);
