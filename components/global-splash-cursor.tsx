"use client"

import { useEffect } from 'react'
import { useEffects } from './effects-context'
import dynamic from 'next/dynamic'

// Dynamic import to prevent SSR issues with WebGL
const SplashCursor = dynamic(() => import('./SplashCursor'), {
    ssr: false,
})

export function GlobalSplashCursor({ children }: { children: React.ReactNode }) {
    const { splashCursorEnabled } = useEffects()

    if (!splashCursorEnabled) {
        return <>{children}</>
    }

    return (
        <div className="relative w-full h-full">
            <div className="fixed inset-0 pointer-events-none z-[9998]">
                <SplashCursor
                    TRANSPARENT={true}
                    SPLAT_RADIUS={0.25}
                    SPLAT_FORCE={6000}
                    COLOR_UPDATE_SPEED={10}
                />
            </div>
            {children}
        </div>
    )
}
