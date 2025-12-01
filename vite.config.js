import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
    plugins: [solid()],
    homepage: "/aliens/#",
    base: "./",
    version: "1.0.0",
})
