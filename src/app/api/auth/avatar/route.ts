import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  url: z.string().url(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const avatarUrl = searchParams.get("url");

  if (!avatarUrl) {
    return NextResponse.json(
      { error: "Avatar URL is missing" },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse({ url: avatarUrl });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    const response = await fetch(parsed.data.url);

    if (!response.ok) {
      return NextResponse.json({ error: "Avatar not found" }, { status: 404 });
    }

    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.startsWith("image/")) {
      return NextResponse.json(
        { error: "URL does not point to an image" },
        { status: 400 },
      );
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(imageBuffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400", // Cache pour un jour
      },
    });
  } catch (error) {
    console.error("Failed to fetch avatar:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
