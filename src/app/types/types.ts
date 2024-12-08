import { Prisma } from "@prisma/client";

export type AnimalWithWeights = Prisma.AnimalGetPayload<{
  include: {
    weights: {
      orderBy: { recordedAt: "desc" };
      //   take: 1;
      select: { weight: true; recordedAt: true };
    };
  };
}>;
