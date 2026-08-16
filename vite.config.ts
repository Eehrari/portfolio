import vinext from "vinext";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vinext(), tailwindcss(), nitro()],
});
