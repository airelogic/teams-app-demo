import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [reactRefresh()],
    base: "/teams-app-demo/",
  };
});
