import { auth } from "@/app/lib/auth";
import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await prisma.availability.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json(data);
} 