import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const { searchParams } = new URL(request.url);

    const fetchApi = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL_API
      }/profile?nickname=${searchParams.get("nickname")}`,
      {
        method: "get",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const response = await fetchApi.json();
    return Response.json(
      {
        status: 200,
        message: "get profile user is successed",
        user: response.user,
        followers: response.followers,
        mefollow: response.mefollow
      },
    );
  } catch (e) {
    return Response.json([
      {
        status: 401,
        message: "Get profile of user is failed",
      },
    ]);
  }
}
