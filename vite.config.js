import { defineConfig, loadEnv } from 'vite'
import exampleVite from "./vite.example.js";
import libVite from "./vite.lib.js";
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_CLI_TYPE } = env || {};
  if(VITE_CLI_TYPE === "example") {
    return exampleVite();
  }
  if(VITE_CLI_TYPE === "lib") {
    return libVite();
  }
})
