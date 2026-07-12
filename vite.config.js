import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "EasyAsPieUI",
      fileName: (format) =>
        format === "es" ? "easy-as-pie-ui.js" : "easy-as-pie-ui.cjs",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "@emotion/react",
        "@emotion/styled",
        "prop-types",
        "react",
        "react-dom",
        "react/jsx-runtime",
      ],
    },
  },
})
