import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("post");
    const page = searchParams.get('page')
    const fetchBackend = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/comments?postId=${postId}&page=${page}`,
      {
        method: "get",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const res = await fetchBackend.json();
    return Response.json({
      status: 200,
      message: "get comments of posts is successed",
      comments: res.comments.data,
    });
  } catch (e) {
    return Response.json({ message: "get comment of post is failed" });
  }
}
