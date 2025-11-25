import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://github.com/changyuj/portfolio",
  plugins: [react()],
});