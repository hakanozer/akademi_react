import { createContext, FC, PropsWithChildren, useState } from "react";

interface ILikeContext {
    likes: number[],
    setLikes: React.Dispatch<React.SetStateAction<number[]>>
}

export const LikesContext = createContext<ILikeContext>({
    likes: [],
    setLikes: () => {}
})

export const LikesProvider:FC<PropsWithChildren> = (props) => {
    const [likes, setLikes] = useState<number[]>([])
    const likesObj = {likes, setLikes}    
    return (
        <LikesContext.Provider value={likesObj}>
            {props.children}
        </LikesContext.Provider>
    )
}