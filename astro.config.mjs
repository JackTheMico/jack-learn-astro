// @ts-check
import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	integrations: [sentry(), spotlightjs(), preact()],
	site: "https://jack-learn-astro.netlify.app",
});
