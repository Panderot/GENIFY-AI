import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="50%" stopColor="#000000" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dde0de" />
            <stop offset="100%" stopColor="#dde0de" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dde0de" />
            <stop offset="50%" stopColor="#dde0de" />
            <stop offset="100%" stopColor="#dde0de" />
          </linearGradient>
        </defs>
        
        {/* Main Circle Background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#bgGradient)"
          stroke="url(#accentGradient)"
          strokeWidth="2"
        />
        
        {/* Inner Accent Ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="1"
          opacity="0.3"
        />
        
        {/* Letter G */}
        <path
          d="M35 35 C35 28, 40 23, 50 23 C60 23, 65 28, 65 35 L65 42 L55 42 L55 38 L60 38 C60 32, 56 28, 50 28 C44 28, 40 32, 40 35 L40 65 C40 68, 44 72, 50 72 C56 72, 60 68, 60 65 L60 58 L50 58 L50 53 L65 53 L65 65 C65 72, 60 77, 50 77 C40 77, 35 72, 35 65 Z"
          fill="url(#letterGradient)"
        />
        
        {/* Accent Dot */}
        <circle
          cx="70"
          cy="30"
          r="3"
          fill="url(#accentGradient)"
        />
        
        {/* Subtle Grid Pattern */}
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="url(#accentGradient)" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="url(#grid)"
        />
      </svg>
    </div>
  );
};

export default Logo;