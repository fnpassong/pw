#Proyecto Web

- [Descargas]

```
## En vite.config.js

## Primero:  npm add -D sass-embedded

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import sass from "vite-plugin-sass"

export default defineConfig({
  plugins: [
    react(),
    sass({
      sassOptions: {
        implementation: require("sass-embedded"),
      },
    }),
  ],
})

```

## Notas
