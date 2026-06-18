import React from 'react';

interface KonjoLogoProps {
  className?: string;
  size?: number;
}

export default function KonjoLogo({ className = '', size = 48 }: KonjoLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Subtle luxury Liquid Titanium / Deep Space Gray metallic gradient matching Apple premium aesthetic */}
          <linearGradient id="konjoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="40%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#8E8E93" />
          </linearGradient>
          <linearGradient id="circleBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F5F7" />
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <dropShadow dx="0" dy="2" stdDeviation="4" floodColor="#121212" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Outer Circular frame backing */}
        <circle cx="100" cy="100" r="92" fill="url(#circleBg)" stroke="#E5D5C8" strokeWidth="1" filter="url(#softShadow)" />

        {/* Elegant circle ring outline (interrupted like the logo) */}
        <path
          d="M 100,12 C 148.6,12 188,51.4 188,100 C 188,142.4 158,177.8 118,185.8"
          stroke="url(#konjoGoldGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Flowing hair wave 1 */}
        <path
          d="M 52,48 C 76,28 116,28 136,52 C 156,76 112,96 100,132 C 92,156 120,168 152,152 C 112,176 84,156 88,124 C 92,92 128,76 112,56 C 100,44 76,44 52,48 Z"
          fill="url(#konjoGoldGrad)"
        />

        {/* Hair wave 2 (outer sweep) */}
        <path
          d="M 38,72 C 52,44 84,36 108,44 C 74,48 58,72 52,100 C 46,128 66,152 82,166 C 60,154 42,124 38,72 Z"
          fill="url(#konjoGoldGrad)"
        />

        {/* Hair wave 3 (inner elegant contour) */}
        <path
          d="M 32,104 C 40,84 60,72 80,76 C 58,84 48,104 46,128 C 44,148 54,164 68,172 C 48,162 30,136 32,104 Z"
          fill="url(#konjoGoldGrad)"
        />

        {/* Beautiful face profile silhouette (looking to the right) */}
        <path
          d="M 120,56 C 122,60 126,64 128,68 C 130,72 134,75 136,78 C 131,80 128,81 123,81 C 127,85 131,89 135,93 C 139,97 141,100 142,104 C 136,105 132,104 128,103 C 132,108 136,112 138,116 C 139,119 138,122 133,123 C 128,124 122,124 116,122 C 111,126 107,130 106,134 C 116,131 126,135 130,140 C 134,145 132,154 126,154 C 118,154 112,143 105,137 C 98,131 92,124 94,115 C 96,106 104,88 108,76 C 112,64 116,60 120,56 Z"
          fill="url(#konjoGoldGrad)"
        />

        {/* Elegant circle ring return curve (right side flourish) */}
        <path
          d="M 152,152 C 168,144 176,124 172,104 C 168,84 152,80 138,82"
          stroke="url(#konjoGoldGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
