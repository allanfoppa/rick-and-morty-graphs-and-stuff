import { defineConfig } from "@playwright/test";

export default defineConfig({
  // ... other config ...
  webServer: {
    command: "cd ../rick-and-morty-graphs-and-stuff && pnpm run dev", // Adjust path if using submodules
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
