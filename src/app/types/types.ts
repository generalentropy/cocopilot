import { Prisma } from "@prisma/client";

export type WeightRecord = Prisma.WeightRecordGetPayload<{
  select: {
    weight: true;
    recordedAt: true;
  };
}>;

export type AnimalWithWeights = Prisma.AnimalGetPayload<{
  include: {
    weights: {
      orderBy: { recordedAt: "desc" };
      select: { weight: true; recordedAt: true };
    };
  };
}>;

export type UserData = Prisma.UserGetPayload<{
  include: {
    ownedAnimals: {
      include: {
        weights: {
          orderBy: { recordedAt: "desc" };
          select: { weight: true; recordedAt: true };
        };
      };
      orderBy: [{ createdAt: "desc" }, { id: "asc" }];
    };
  };
}>;
