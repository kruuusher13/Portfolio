import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
    text: string;
    className?: string;
    scrambleSpeed?: number;
    revealSpeed?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

const ScrambleText: React.FC<ScrambleTextProps> = ({
    text,
    className = "",
    scrambleSpeed = 40, // Slower for better performance
    revealSpeed = 100
}) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startScramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current as NodeJS.Timeout);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 3;
        }, scrambleSpeed);
    };

    useEffect(() => {
        startScramble();
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }, [text]);

    return (
        <h1
            className={`inline-block cursor-default ${className}`}
            onMouseEnter={startScramble}
            style={{
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))'
            }}
        >
            {displayText}
        </h1>
    );
};

export default ScrambleText;
