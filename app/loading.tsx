import React from 'react'

const Loading = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-zinc-950">
            <div className="flex gap-2">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" />
                <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:-.3s]" />
                <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:-.5s]" />
            </div>
        </div>
    )
}

export default Loading