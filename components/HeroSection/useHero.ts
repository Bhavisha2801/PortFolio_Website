import { useAnimation } from "framer-motion";
import { useRef, useState } from "react";

export const useHero = () => {
    const x = new Array(47).fill(0);
    const y = new Array(30).fill(0);
    const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
    const [clickedCell, setClickedCell] = useState<any>(null);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const heroRef = useRef<any>(null);

    const handleMouseMove = (event: any) => {
        const rect = heroRef.current && heroRef.current.getBoundingClientRect();
        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const size = 300;

    const controls = useAnimation();

    const clickCell = (rowIdx: any, colIdx: any) => {
        if (clickedCell) {
            const distance = Math.sqrt(
                Math.pow(clickedCell[0] - rowIdx, 2) +
                Math.pow(clickedCell[1] - colIdx, 2)
            );
            controls.start({
                opacity: [0, 1 - distance * 0.1, 0],
                transition: { duration: distance * 0.2 },
            });
        }
    }

    return {
        matrix,
        clickedCell,
        setClickedCell,
        controls,
        clickCell,
        x,
        y,
        mousePosition,
        heroRef,
        handleMouseMove,
        size
    }
}