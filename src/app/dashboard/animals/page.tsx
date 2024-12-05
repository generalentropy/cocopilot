import { getUserData } from "@/app/actions/user";
import Cards from "@/components/dashboard/animals-cards/Cards";

export default async function Animals() {
  const userData = await getUserData();

  return (
    <div className="flex flex-wrap gap-4 p-2 sm:p-8">
      <Cards userData={userData} />
    </div>
  );
}
