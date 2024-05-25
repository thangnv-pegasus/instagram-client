import { cookies } from "next/headers";
import { useParams } from "next/navigation";

export async function GET(request: Request) {
  try {
    const cookie = cookies();
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/story-paginate?page=${page}`,
      {
        method: "get",
        headers: {
          Authorization: "Bearer " + cookie.get("token")?.value,
        },
      }
    );
    const data = await res.json();

    return Response.json({ data: data.story.data, page });
  } catch (e) {
    return Response.json({ message: "get story is failed", error: e });
  }
}
