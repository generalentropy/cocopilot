import { CARD_SKELETON_COUNT } from "@/app/lib/constants";
import { Skeleton } from "@/app/components/ui/skeleton";

const skeletons = Array.from({ length: CARD_SKELETON_COUNT });

export default function CardsLoader() {
  return (
    <>
      {skeletons.map((_, i) => (
        <Skeleton
          key={i}
          className="flex h-[425px] rounded-xl bg-muted sm:w-[300px]"
        />
      ))}
    </>
  );
}
