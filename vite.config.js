import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tailwindClipPath from "tailwind-clip-path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tailwindClipPath()],
});
