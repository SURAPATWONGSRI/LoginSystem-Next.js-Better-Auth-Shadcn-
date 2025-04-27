"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <Container>
        <Card className="w-full max-w-lg mx-auto ">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center">
              Login System
            </CardTitle>
            <CardDescription className="text-center">
              With BetterAuth Next.js Prisma Neon
            </CardDescription>
          </CardHeader>
        </Card>
      </Container>
    </div>
  );
};

export default Page;
