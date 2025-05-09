// scripts/prebuild.js
// This script is run before the build process to ensure that the dist directory is clean.
// This script copies the index.html file to 404.html in the dist directory.
// This is useful for single-page applications (SPAs) that use client-side routing.
import { copyFileSync } from 'fs'
import { join } from 'path'

const distPath = join('dist', 'index.html')
const errorPath = join('dist', '404.html')

try {
  copyFileSync(distPath, errorPath)
  console.log('🕊️ Copied index.html to 404.html for SPA fallback')
} catch (err) {
  console.error('❌ Failed to copy 404.html:', err)
}
