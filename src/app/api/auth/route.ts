import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const res = await request.json();
  cookies().set({
    name: 'token',
    value: res.token,
    httpOnly: true,
    path: '/'
  })
  return Response.json(res,{
    status: 200,
    headers: {
        'Set-Cookie' : `token=${res.token}`
    }
  });
}
