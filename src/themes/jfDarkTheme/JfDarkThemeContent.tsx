import { ResourceComponent } from "@/lib"
import React from "react"


export const JfDarkThemeContent = ({
    children,
    breakpoint,
    contentRef
}: ResourceComponent) => {
    const style: React.CSSProperties = breakpoint === 'tablet' || breakpoint === 'mobile' ? {
        height: 'calc( 100% - 120px)',
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative'
    } : {
        height: 'calc( 100% - 120px)',
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: 'relative'
    }
    return (
        <div style={style} ref={contentRef}>{children}</div>
    )
}
