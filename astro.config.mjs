import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://simetrik-agent.mgy.one.com/",
  integrations: [tailwind(), icon()],
  optimizeDeps: {
    include: ["firebase/app", "firebase/analytics"],
  },
});
