import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1>Welcome to Shopsaathi</h1>
      <p>A Base44 TanStack Start application with Vercel Speed Insights.</p>
    </div>
  );
}
