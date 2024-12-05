import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SubmitCardButton({ isCreating }: { isCreating: boolean }) {
  // https://react.dev/reference/react-dom/hooks/useFormStatus#noun-labs-1201738-(2)
  // useFormStatusHook must be called from a component that is rendered inside a <form>.

  if (isCreating)
    return (
      <Button disabled>
        <Loader2 className="animate-spin-fast h-4 w-4" />
        Création en cours...
      </Button>
    );

  return <Button type="submit">Enregistrer</Button>;
}
