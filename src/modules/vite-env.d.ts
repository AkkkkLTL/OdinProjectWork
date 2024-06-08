/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_RAWG_API_URL: string,
  readonly VITE_RAWG_API_KEY: string,
  readonly VITE_CGAME_API_URL: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}