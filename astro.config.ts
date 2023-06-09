import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://dragons.mx",
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
