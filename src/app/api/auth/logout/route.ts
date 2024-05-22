import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookie = cookies();
  const token = cookie.get("token")?.value;

  if (token) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_API}/logout`,
        {
          method: "post",
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      ).then((res) => res.json());
      console.log(response);
      cookie.delete("token");
      return Response.json(response, {
        status: 200,
        headers: {
          "Set-Cookie": "",
        },
      });
    } catch (error) {
      return Response.json(
        {
          message: error,
        },
        { status: 401 }
      );
    }
  } else {
    return Response.json({ message: "token is not define" }, { status: 401 });
  }
}
