import { useRef, useCallback } from "react"

interface MagneticOptions {
    tilt?: number      // максимальный наклон в градусах (default: 10)
    scale?: number     // масштаб при наведении (default: 1.02)
    speed?: number     // скорость возврата в ms (default: 300)
}

export function useMagnetic({ tilt = 10, scale = 1.02, speed = 300 }: MagneticOptions = {}) {
    const ref = useRef<HTMLDivElement>(null)

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const cx = rect.width / 2
        const cy = rect.height / 2
        const dx = (e.clientX - rect.left - cx) / cx
        const dy = (e.clientY - rect.top - cy) / cy

        el.style.transition = "transform 0.08s ease-out"
        el.style.transform = `perspective(600px) rotateY(${dx * tilt}deg) rotateX(${-dy * tilt}deg) scale(${scale})`
    }, [tilt, scale])

    const onMouseLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transition = `transform ${speed}ms ease-out`
        el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)"
    }, [speed])

    return { ref, onMouseMove, onMouseLeave }
}
