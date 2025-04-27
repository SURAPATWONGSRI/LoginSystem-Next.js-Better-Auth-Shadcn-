"use client";

import { Button } from "@/components/ui/button";
import { AirVent } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <AirVent className="h-6 w-6" />
            <span className="font-bold text-xl">AUTHSYSTEM</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/sign-in" className="text-primary ">
                Sign In
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
