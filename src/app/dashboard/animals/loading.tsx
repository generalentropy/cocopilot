import CardsLoader from "@/app/components/dashboard/animals-cards/CardsLoader";

export default function Loading() {
  return (
    <div className="flex w-full flex-wrap gap-4 p-2 sm:p-8">
      <CardsLoader />
    </div>
  );
}
