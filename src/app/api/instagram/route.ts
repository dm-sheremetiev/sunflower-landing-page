import { NextResponse } from "next/server";

export interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

export async function GET() {
  try {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "Access token is missing" },
        { status: 400 }
      );
    }

    // Запрос на получение списка медиа
    const mediaResponse = await fetch(
      `https://graph.instagram.com/v21.0/me?fields=media&access_token=${token}`
    );

    if (!mediaResponse.ok) {
      return NextResponse.json(
        { error: `Failed to fetch media: ${mediaResponse.statusText}` },
        { status: mediaResponse.status }
      );
    }

    const mediaData = await mediaResponse.json();
    const mediaItems = mediaData.media?.data.slice(0, 8);

    if (!Array.isArray(mediaItems)) {
      return NextResponse.json({ error: "No media found" }, { status: 404 });
    }

    // Получаем подробности для каждого медиа объекта
    const mediaDetailsPromises = mediaItems.map(async (media) => {
      const mediaDetailsResponse = await fetch(
        `https://graph.instagram.com/${media.id}?fields=id,media_type,media_url,thumbnail_url,permalink,caption&access_token=${token}`
      );
      return mediaDetailsResponse.json();
    });

    const mediaDetails: InstagramPost[] = await Promise.all(
      mediaDetailsPromises
    );

    // Возвращаем JSON-ответ
    return NextResponse.json({ data: mediaDetails });
  } catch (error) {
    console.error("Error fetching Instagram media:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
