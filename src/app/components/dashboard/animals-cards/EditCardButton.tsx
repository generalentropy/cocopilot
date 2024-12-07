import { Button } from "@/app/components/ui/button";
import { X } from "lucide-react";

import { useState } from "react";
import DeleteCardButton from "./DeleteCardButton";

export default function EditCardButton({ animalId }: { animalId: string }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <div className="group my-4 flex h-9 w-full select-none justify-between">
          <div className="flex gap-2">
            <DeleteCardButton animalId={animalId} />
            <Button className="bg-amber-500 transition-colors hover:bg-amber-500 hover:bg-opacity-95">
              Modifier
            </Button>
          </div>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <X />
          </Button>
        </div>
      ) : (
        <div
          className="group my-4 flex h-9 w-full cursor-pointer select-none items-center justify-center rounded-md border bg-gray-50 transition-colors hover:border-gray-500 hover:bg-gray-100"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          <span className="text-gray-300 transition-colors group-hover:text-gray-500">
            Modifier
          </span>
        </div>
      )}
    </>
  );
}
