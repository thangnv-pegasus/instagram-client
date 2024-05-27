import { cookies } from "next/headers";

export async function POST(
  request: Request,
  { params }: { params: { post_id: number } }
) {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const fetchData = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/like-post`,
      {
        method: "POST",
        body: JSON.stringify({
          type: "post",
          post_id: params.post_id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const response = await fetchData.json();

    return Response.json({
      cookie: cookie.get("token"),
      params: params.post_id,
      response,
    });
  } catch (e) {
    return Response.json({ message: "like post is failed" });
  }
}
