import { createContext, FC, PropsWithChildren, SetStateAction, useState } from "react";

interface IPageCount {
    countPage: number,
    setCountPage: React.Dispatch<React.SetStateAction<number>>
}

export const PageCountContext = createContext<IPageCount>({
    countPage: 0,
    setCountPage: () => {}
})

export const PageCountProvider:FC<PropsWithChildren> = (props) => {
    const [countPage, setCountPage] = useState(0)
    const pageObj = {countPage, setCountPage}
    return (
        <PageCountContext.Provider value={pageObj}>
            {props.children}
        </PageCountContext.Provider>
    )
}