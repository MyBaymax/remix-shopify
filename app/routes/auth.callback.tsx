import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { shopify } from "~/shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log(`%c[Auth 回调]`, "color:#0ee0f0;");
  const callback = await shopify.auth.callback({
    rawRequest: request,
  });
  // 现在可以使用callback.session发出API请求
  console.log(callback);
  return redirect("/app", {
    headers: callback.headers,
  });
};
