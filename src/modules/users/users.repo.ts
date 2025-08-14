import prisma from "@/lib/prisma";

export function list(skip?: number, take?: number) {
  return prisma.user.findMany({ skip, take });
}

export function byId(id: number) {
  return prisma.user.findUniqueOrThrow({ where: { id } });
}

export function create(data: { email: string; name?: string }) {
  return prisma.user.create({ data });
}

export function update(data: any, id: number) {
  return prisma.user.update({
    where: {
      id: id,
    },
    data: { ...data },
  });
}
