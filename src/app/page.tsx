"use client";
import { Button } from "@/components/ui/button";

const page = () => {
  const onClick = () => {
    alert("Hello World");
  };

  return (
    <div>
      <h1 className="text-4xl font-sebold mb-2">
        Login System With BetterAuth Next.js Prisma Neon
      </h1>
      <Button onClick={onClick} size={"lg"}>
        Click me
      </Button>
    </div>
  );
};

export default page;
