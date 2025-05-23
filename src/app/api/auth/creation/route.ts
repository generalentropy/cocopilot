import { BASE_URL } from "@/app/lib/constants";
import prisma from "@/app/lib/db";
import { generateRandomString } from "@/app/utils/helpers";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Il y a eu une erreur");
  }

  let dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage:
          user.picture ??
          `https://avatar.vercel.sh/${user.given_name || generateRandomString()}`,
      },
    });
  }

  return NextResponse.redirect(`${BASE_URL}/dashboard`);
}
