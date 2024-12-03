"use client";

import { useFormStatus } from "react-dom";

import { CirclePlus, Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export function SubmitCardButton({ text }: { text: string }) {
  // https://react.dev/reference/react-dom/hooks/useFormStatus#noun-labs-1201738-(2)
  // useFormStatusHook must be called from a component that is rendered inside a <form>.
  const { pending } = useFormStatus();
  const params = useParams() as { id?: string };

  if (pending)
    return (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {params.id ? "Édition en cours..." : "Création en cours..."}
      </Button>
    );

  return (
    <Button type="submit">
      <CirclePlus className="mr-2 h-5 w-5" />
      {text}
    </Button>
  );
}
