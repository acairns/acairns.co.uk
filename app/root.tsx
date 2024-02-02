import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta key="og:site_name" property="og:site_name" content="Andrew Cairns" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:image" property="og:image" content="https://acairns.co.uk/andrewcairns_400x400.jpeg" />

        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta key="twitter:site" name="twitter:site" content="@andrewcairns" />
        <meta key="twitter:creator" name="twitter:creator" content="@andrewcairns" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
