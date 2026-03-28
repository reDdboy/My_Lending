import { useCallback } from "react"
import { useTheme } from "next-themes"

export function useSpotlight() {
    const { resolvedTheme } = useTheme()

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const spotlight = el.querySelector<HTMLDivElement>(".spotlight-effect")
        if (!spotlight) return

        const isDark = resolvedTheme === "dark"
        const color = isDark
            ? "rgba(255,255,255,0.10)"  // белое пятно на тёмном
            : "rgba(0,0,0,0.06)"        // тёмное пятно на светлом

        spotlight.style.background = `radial-gradient(circle, ${color} 0%, transparent 65%)`
        spotlight.style.left = `${x}px`
        spotlight.style.top = `${y}px`
        spotlight.style.opacity = "1"
    }, [resolvedTheme])

    const onMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const spotlight = e.currentTarget.querySelector<HTMLDivElement>(".spotlight-effect")
        if (!spotlight) return
        spotlight.style.opacity = "0"
    }, [])

    return { onMouseMove, onMouseLeave }
}
