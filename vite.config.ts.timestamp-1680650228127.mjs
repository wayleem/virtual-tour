var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// tailwind.config.cjs
var require_tailwind_config = __commonJS({
  "tailwind.config.cjs"(exports, module) {
    "use strict";
    module.exports = {
      mode: "jit",
      content: [
        "./pages/**/*.{html,js}",
        "./src/**/*.{html,ts, tsx}",
        "./index.html"
      ],
      theme: {
        extend: {
          fontFamily: {
            "main": ["Jost", "sans-serif"]
          }
        }
      },
      plugins: []
    };
  }
});

// postcss.config.cjs
import tailwind from "file:///C:/Users/wayle/OneDrive/Desktop/groupforeastend/groupforeastend-virtualtour/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/wayle/OneDrive/Desktop/groupforeastend/groupforeastend-virtualtour/node_modules/autoprefixer/lib/autoprefixer.js";
var require_postcss_config = __commonJS({
  "postcss.config.cjs"(exports, module) {
    "use strict";
    var import_tailwind_config = __toESM(require_tailwind_config());
    module.exports = {
      plugins: [tailwind(import_tailwind_config.default), autoprefixer]
    };
  }
});

// vite.config.ts
var import_postcss_config = __toESM(require_postcss_config(), 1);
import { defineConfig } from "file:///C:/Users/wayle/OneDrive/Desktop/groupforeastend/groupforeastend-virtualtour/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/wayle/OneDrive/Desktop/groupforeastend/groupforeastend-virtualtour/node_modules/@vitejs/plugin-react-swc/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  css: {
    postcss: import_postcss_config.default
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidGFpbHdpbmQuY29uZmlnLmNqcyIsICJwb3N0Y3NzLmNvbmZpZy5janMiLCAidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YXlsZVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGdyb3VwZm9yZWFzdGVuZFxcXFxncm91cGZvcmVhc3RlbmQtdmlydHVhbHRvdXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdheWxlXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcZ3JvdXBmb3JlYXN0ZW5kXFxcXGdyb3VwZm9yZWFzdGVuZC12aXJ0dWFsdG91clxcXFx0YWlsd2luZC5jb25maWcuY2pzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy93YXlsZS9PbmVEcml2ZS9EZXNrdG9wL2dyb3VwZm9yZWFzdGVuZC9ncm91cGZvcmVhc3RlbmQtdmlydHVhbHRvdXIvdGFpbHdpbmQuY29uZmlnLmNqc1wiO21vZHVsZS5leHBvcnRzID0ge1xuICBtb2RlOiAnaml0JyxcbiAgY29udGVudDogW1xuICAgIFwiLi9wYWdlcy8qKi8qLntodG1sLGpzfVwiLFxuICAgIFwiLi9zcmMvKiovKi57aHRtbCx0cywgdHN4fVwiLFxuICAgIFwiLi9pbmRleC5odG1sXCIsXG4gIF0sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOlxuICAgIHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgJ21haW4nOiBbJ0pvc3QnLCAnc2Fucy1zZXJpZiddXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtdLFxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2F5bGVcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxncm91cGZvcmVhc3RlbmRcXFxcZ3JvdXBmb3JlYXN0ZW5kLXZpcnR1YWx0b3VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YXlsZVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGdyb3VwZm9yZWFzdGVuZFxcXFxncm91cGZvcmVhc3RlbmQtdmlydHVhbHRvdXJcXFxccG9zdGNzcy5jb25maWcuY2pzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy93YXlsZS9PbmVEcml2ZS9EZXNrdG9wL2dyb3VwZm9yZWFzdGVuZC9ncm91cGZvcmVhc3RlbmQtdmlydHVhbHRvdXIvcG9zdGNzcy5jb25maWcuY2pzXCI7aW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJ1xuaW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gJy4vdGFpbHdpbmQuY29uZmlnLmNqcydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGx1Z2luczogW3RhaWx3aW5kKHRhaWx3aW5kQ29uZmlnKSwgYXV0b3ByZWZpeGVyXVxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcd2F5bGVcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxncm91cGZvcmVhc3RlbmRcXFxcZ3JvdXBmb3JlYXN0ZW5kLXZpcnR1YWx0b3VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YXlsZVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXGdyb3VwZm9yZWFzdGVuZFxcXFxncm91cGZvcmVhc3RlbmQtdmlydHVhbHRvdXJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3dheWxlL09uZURyaXZlL0Rlc2t0b3AvZ3JvdXBmb3JlYXN0ZW5kL2dyb3VwZm9yZWFzdGVuZC12aXJ0dWFsdG91ci92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xuaW1wb3J0IHBvc3Rjc3MgZnJvbSAnLi9wb3N0Y3NzLmNvbmZpZy5janMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBMmEsV0FBTyxVQUFVO0FBQUEsTUFDMWIsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLFFBQ0E7QUFBQSxVQUNFLFlBQVk7QUFBQSxZQUNWLFFBQVEsQ0FBQyxRQUFRLFlBQVk7QUFBQSxVQUMvQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTLENBQUM7QUFBQSxJQUNaO0FBQUE7QUFBQTs7O0FDaEJ5YSxPQUFPLGNBQWM7QUFFOWIsT0FBTyxrQkFBa0I7QUFGekI7QUFBQTtBQUFBO0FBQ0EsaUNBQTJCO0FBRzNCLFdBQU8sVUFBVTtBQUFBLE1BQ2YsU0FBUyxDQUFDLFNBQVMsdUJBQUFBLE9BQWMsR0FBRyxZQUFZO0FBQUEsSUFDbEQ7QUFBQTtBQUFBOzs7QUNKQSw0QkFBb0I7QUFGNlksU0FBUyxvQkFBb0I7QUFDOWIsT0FBTyxXQUFXO0FBSWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixLQUFLO0FBQUEsSUFDSCwrQkFBQUM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsidGFpbHdpbmRDb25maWciLCAicG9zdGNzcyJdCn0K
