import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router';
import { SpeedInsights } from '@vercel/speed-insights/react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shopsaathi</title>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <SpeedInsights />
        <script type="module" src="/@vite/client"></script>
      </body>
    </html>
  );
}
