import { defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    theme: {
      tokens: {
        colors: {
          brand: {
            50: { value: "#1B8FC5" },
          },
        },
      },
      semanticTokens: {
        colors: {
          brand: {
            solid: { value: "{colors.brand.50}" },
            contrast: { value: "{colors.brand.100}" },
            fg: { value: "{colors.brand.700}" },
            muted: { value: "{colors.brand.100}" },
            subtle: { value: "{colors.brand.200}" },
            emphasized: { value: "{colors.brand.300}" },
            focusRing: { value: "{colors.brand.500}" },
          },
        },
      },
    },
  })