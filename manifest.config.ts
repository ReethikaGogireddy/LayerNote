import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "LayerNote",

  version: "0.0.1",

  description: "Annotate LeetCode problems.",

  permissions: ["storage"],

  host_permissions: ["https://leetcode.com/*"],

  action: {
    default_popup: "src/popup/popup.html",
  },

  background: {
    service_worker: "src/background/service-worker.ts",
    type: "module",
  },

  content_scripts: [
    {
      matches: ["https://leetcode.com/problems/*"],
      js: ["src/content/content.ts"],
      run_at: "document_idle",
    },
  ],
});