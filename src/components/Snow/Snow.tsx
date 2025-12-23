import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import { useTheme } from "next-themes";

function Snow() {
    const [showSnow, setShowSnow] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const checkWinterSeason = () => {
            const today = new Date();
            const currentMonth = today.getMonth() + 1;

            if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
                if (currentMonth === 2) {
                    const day = today.getDate();
                    const isLeapYear =
                        (today.getFullYear() % 4 === 0 && today.getFullYear() % 100 !== 0) ||
                        (today.getFullYear() % 400 === 0);
                    const lastDay = isLeapYear ? 29 : 28;

                    if (day <= lastDay) {
                        setShowSnow(true);
                        return;
                    }
                } else {
                    setShowSnow(true);
                    return;
                }
            }
            setShowSnow(false);
        };

        checkWinterSeason();
        const interval = setInterval(checkWinterSeason, 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (!showSnow) return null;

    const isLight = resolvedTheme === "light";
    const snowColor = isLight ? "#8fc5ffff" : "#ffffff";

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Snowfall
                key={resolvedTheme}
                snowflakeCount={100}
                speed={[0.3, 1.5]}
                radius={[0.5, 2]}
                color={snowColor}
                opacity={[0.1, 0.25]}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
}

export default Snow;
