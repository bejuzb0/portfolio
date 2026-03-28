/** Base path for GitHub Pages project site (`vite.config` `base`). */
export const BASE = import.meta.env.BASE_URL;

export function pub(path: string): string {
  const p = path.replace(/^\//, "");
  return `${BASE}${p}`;
}
