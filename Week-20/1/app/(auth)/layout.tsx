// this lauout will apply to only signin and signup ont user 
// because it is above its level

import { ReactNode } from "react";

export default function ({ children }: {
    children: ReactNode
}) {
    return (
        <div>
            <div>inside header</div>
            {children}
            <div>inside footer</div>
        </div>
    )
}