/**
 * Project: chromadb-embedding-visualizer
 * File:    postcss.config.mjs
 *
 * Description:
 * PostCSS configuration that loads Tailwind for the frontend.
 *
 * Author:
 * Jan Alexandr Kopřiva
 * jan.alexandr.kopriva@gmail.com
 *
 * License: AGPL-3.0-or-later
 */

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
