import { cookies } from "next/headers";

export async function GET(request: Request) {
  const token = cookies().get("token")?.value;
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  if (token) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/posts-paginate?page=${page}`,
      {
        method: "get",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((res) => res.json());
    // console.log(response);
    return Response.json(response, {
      status: 200,
    });
  } else {
    return Response.json(
      {
        message: "Unauthorization",
      },
      {
        status: 401,
      }
    );
  }
}
