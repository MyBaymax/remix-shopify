import { LoaderFunctionArgs } from "@remix-run/node";
import { shopify } from "~/shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const shop = shopify.utils.sanitizeShop(url.searchParams.get("shop") || "");
  if (!shop) throw new Error("Expected a valid shop query parameter");
  return shopify.auth.begin({
    shop,
    callbackPath: "/auth/callback",
    isOnline: false,
    rawRequest: request,
  });
};
