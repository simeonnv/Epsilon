import { Title } from "@solidjs/meta";
import { Button } from "@/components/ui/button"
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main class="dark">
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />

      <div class="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p class="text-xl mb-8 text-center max-w-md">Oops! The page you're looking for doesn't exist or has been moved.</p>
        <a href="/">
          <Button variant="default">
            Return to Home
          </Button>
        </a>
      </div>

    </main>
  );
}
