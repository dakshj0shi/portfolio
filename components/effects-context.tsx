"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface EffectsContextType {
    clickSparkEnabled: boolean
    splashCursorEnabled: boolean
    toggleClickSpark: () => void
    toggleSplashCursor: () => void
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined)

export function EffectsProvider({ children }: { children: ReactNode }) {
    const [clickSparkEnabled, setClickSparkEnabled] = useState(true)
    const [splashCursorEnabled, setSplashCursorEnabled] = useState(false)

    const toggleClickSpark = () => setClickSparkEnabled(prev => !prev)
    const toggleSplashCursor = () => setSplashCursorEnabled(prev => !prev)

    return (
        <EffectsContext.Provider
            value={{
                clickSparkEnabled,
                splashCursorEnabled,
                toggleClickSpark,
                toggleSplashCursor,
            }}
        >
            {children}
        </EffectsContext.Provider>
    )
}

export function useEffects() {
    const context = useContext(EffectsContext)
    if (context === undefined) {
        throw new Error('useEffects must be used within an EffectsProvider')
    }
    return context
}
