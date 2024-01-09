import "@shopify/shopify-api/adapters/node";

import {
  ApiVersion,
  LATEST_API_VERSION,
  shopifyApi,
} from "@shopify/shopify-api";

export const shopify = shopifyApi({
  apiKey: "050bf6fdc04b3df2e0ea6b607b3ed2b2",
  apiSecretKey: "de88a068d1a9de361c1be0ca08a7f3ee",
  scopes: ["read_products", "write_products"],
  hostName: "127.0.0.1:3000",
  hostScheme: "http",
  isEmbeddedApp: false,
  apiVersion: ApiVersion.October23,
});
