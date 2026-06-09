export default function PostLoading() {
    return (
        <main>
            <div className="flex flex-col p-12">
                <div className="flex items-center
                justify-between">
                    <div className="flex items-center gap-4">
                        <div
                        className="bg-gray-500
                        animate-pulse w-8 h-8
                        rounded-full"/>
                        <div className="bg-gray-500
                        w-30 h-6 rounded-md
                        animate-pulse"/>
                        </div>
                    </div>
                <div className="bg-gray-500
                w-30 h-6 mt-4 rounded-md
                animate-pulse"/>

                <div className="bg-gray-500
                w-full h-100 mt-4 rounded-md
                animate-pulse"/>
            </div>
        </main>
    )
}