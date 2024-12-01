import OnBoarding from "@/components/front/Onboarding";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function HomeRoute() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) redirect("/dashboard");

  return <OnBoarding />;
}
