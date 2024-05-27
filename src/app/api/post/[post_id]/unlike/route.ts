import { cookies } from "next/headers";

export async function POST(
  reqest: Request,
  { params }: { params: { post_id: number } }
) {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;

    const fetchData = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/unlike-post`,
      {
        method: "POST",
        body: JSON.stringify({
          type: "post",
          post_id: params.post_id,
        }),
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await fetchData.json();
    return Response.json({ message: "unlike post is successed", data });
  } catch (e) {
    return Response.json({ message: "unlike is failed",error: e });
  }
}
