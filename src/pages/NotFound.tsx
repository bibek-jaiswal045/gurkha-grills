import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="grid min-h-screen place-items-center bg-background px-4 text-center">
    <div className="grid justify-items-center gap-5">
      <p className="eyebrow">404</p>
      <h1 className="text-5xl">This street's empty</h1>
      <p className="text-mist">The page you're looking for isn't here. The trailer is back on the homepage.</p>
      <Button asChild variant="chilli" size="lg">
        <a href={import.meta.env.BASE_URL}>Back to the homepage</a>
      </Button>
    </div>
  </div>
);

export default NotFound;
