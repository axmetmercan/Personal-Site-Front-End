import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        "/home/mercan/node_modules/remixicon/fonts/remixicon.woff",
        "/home/mercan/node_modules/remixicon/fonts/remixicon.woff2",
      ],
    },
  },
});
