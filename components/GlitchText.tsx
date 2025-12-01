import React from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
    return (
        <div className="glitch-wrapper">
            <h1
                className={`glitch ${className}`}
                data-text={text}
            >
                {text}
            </h1>
        </div>
    );
};

export default GlitchText;
