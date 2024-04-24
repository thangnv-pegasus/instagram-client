import ShortPost from "@/components/post/short-post"


const Page = () => {
    return (
        <div className="pl-64">
            <div className="p-8 flex flex-col gap-1">
            <ShortPost bigPostPosition="left" posts={[]}/>
            <ShortPost bigPostPosition="right" posts={[]}/>
        </div>
        </div>
    )
}

export default Page