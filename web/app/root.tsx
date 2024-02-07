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

        <link rel="icon" type="image/png" href="favicon.png" />

        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50 overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script type="module" src="/animations/main.js"></script>


      <script dangerouslySetInnerHTML={{
        __html: `
        // quick hacky script to play/pause as video enters/leaves viewport
        // https://stackoverflow.com/a/58914563
        let video = document.querySelector('video');
          let isPaused = false;
          let observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio!=1  && !video.paused){
              video.pause();
              isPaused = true;
            }
            else if(isPaused) {
              video.play();
              isPaused=false}
          });
        }, {threshold: 1});
          observer.observe(video);`
      }} />
      </body>
    </html>
  );
}
