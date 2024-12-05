import { getUserData } from "@/app/actions/user";
import Cards from "@/components/dashboard/animals-cards/Cards";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Animals() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(),
  });

  return (
    <div className="flex flex-wrap gap-4 p-2 sm:p-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Cards />
      </HydrationBoundary>
    </div>
  );
}
