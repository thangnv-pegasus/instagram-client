import { cookies } from "next/headers";


export async function GET(request : Request){
    try{
        const cookie = cookies()
        const token = cookie.get('token')?.value
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get('user_id')
        const page = searchParams.get('page')
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/my-post?user_id=${userId}&page=${page}`, {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const response = await fetchData.json()

        return Response.json({
            status: 200,
            message: 'get post of user is successed',
            data: response.data.data
        })


    }catch(e){
        return Response.json({
            status: 400,
            message: 'get post of user is failed'
        });
    }
}