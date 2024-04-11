

const Page = ({ params }: { params: { slug: string } }) => {
    console.log(params)
    return (
        <div>
            this is {params.slug} page
        </div>
    )
}

export default Page