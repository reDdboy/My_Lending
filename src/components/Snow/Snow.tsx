"use client"

import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import { useTheme } from "next-themes";

function Snow() {
    const [showSnow, setShowSnow] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const checkWinterSeason = () => {
            const today = new Date();
            const currentMonth = today.getMonth() + 1;

            // Показываем снег в декабре, январе, феврале
            if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
                setShowSnow(true);
            } else {
                setShowSnow(false);
            }
        };

        checkWinterSeason();

        // Проверяем каждый час
        const interval = setInterval(checkWinterSeason, 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (!showSnow) return null;

    const snowColor = theme === "light" ? "#7ba5feff" : "#ffffff";

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            <Snowfall
                snowflakeCount={150}
                speed={[0.5, 2]}
                wind={[-0.5, 0.8]}
                radius={[0.5, 3.0]}
                color={snowColor}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
}

export default Snow;
