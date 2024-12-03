import { Card } from "@/components/ui/card";
import { BadgePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CreateCard() {
  return (
    <Dialog>
      <DialogTrigger className="w-full sm:w-[300px]">
        <Card className="flex h-[357px] flex-col items-center justify-center overflow-hidden border-2 border-dashed bg-gray-50 shadow-none sm:w-[300px]">
          <div className="flex items-center justify-center rounded-full bg-amber-100 p-4">
            <BadgePlus size={42} className="text-amber-500" />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">
            Ajouter un animal
          </p>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-[95%] rounded-lg">
        <DialogHeader>
          <DialogTitle>Ajouter un animal</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
