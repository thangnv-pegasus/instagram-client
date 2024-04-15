import Bar from "@/components/layout/nav-bar"


const RootLayout = ({children} : {children: React.ReactNode}) => {
    // trong 
    // trang chu, kham pha, reels, trang ca nhan
    return (
        <>
            <Bar />
            <div className="pl-64">
            {children}
            </div>
        </>
    )
}

export default RootLayout