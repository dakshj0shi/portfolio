"use client"

import { useEffect, useRef } from 'react'
import { useEffects } from './effects-context'

export function GlobalClickSpark({ children }: { children: React.ReactNode }) {
    const { clickSparkEnabled } = useEffects()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const sparksRef = useRef<Array<{
        x: number
        y: number
        angle: number
        startTime: number
    }>>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationId: number

        const draw = (timestamp: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            sparksRef.current = sparksRef.current.filter(spark => {
                const elapsed = timestamp - spark.startTime
                const duration = 400
                if (elapsed >= duration) {
                    return false
                }

                const progress = elapsed / duration
                const eased = progress * (2 - progress) // ease-out

                const sparkRadius = 15
                const sparkSize = 10
                const distance = eased * sparkRadius
                const lineLength = sparkSize * (1 - eased)

                const x1 = spark.x + distance * Math.cos(spark.angle)
                const y1 = spark.y + distance * Math.sin(spark.angle)
                const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
                const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

                ctx.strokeStyle = '#7C3AED' // Purple color matching the theme
                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.moveTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.stroke()

                return true
            })

            animationId = requestAnimationFrame(draw)
        }

        animationId = requestAnimationFrame(draw)

        const handleClick = (e: MouseEvent) => {
            if (!clickSparkEnabled) return

            const now = performance.now()
            const sparkCount = 8
            const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
                x: e.clientX,
                y: e.clientY,
                angle: (2 * Math.PI * i) / sparkCount,
                startTime: now
            }))

            sparksRef.current.push(...newSparks)
        }

        window.addEventListener('click', handleClick)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('click', handleClick)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [clickSparkEnabled])

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[9999]"
                style={{ width: '100vw', height: '100vh' }}
            />
            {children}
        </>
    )
}
