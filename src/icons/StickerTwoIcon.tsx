import React from "react";

const StickerTwoIcon = ({ color, class: cs }: IconType) => {
  return (
    <svg
      className={cs}
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_107)">
        <rect width="65" height="65" rx="14" fill="#E1F3FF" />
        <g filter="url(#filter0_d_0_107)">
          <path
            d="M8 18C8 14.6863 10.6863 12 14 12H51C54.3137 12 57 14.6863 57 18V77H8V18Z"
            fill="white"
          />
          <circle cx="15" cy="29" r="3" fill="#E60A2B" />
          <rect x="20" y="26" width="20" height="6" fill="#FEE7EA" />
          <rect x="42" y="26" width="11" height="6" fill="#FEF0F2" />
          <circle cx="15" cy="39" r="3" fill="#0EA3FD" />
          <rect x="20" y="36" width="20" height="6" fill="#E1F3FF" />
          <rect x="42" y="36" width="11" height="6" fill="#F5F5F5" />
          <circle cx="15" cy="49" r="3" fill="#F9C320" />
          <rect x="20" y="46" width="20" height="6" fill="#FEF7E1" />
          <rect x="42" y="46" width="11" height="6" fill="#F5F5F5" />
          <circle cx="15" cy="59" r="3" fill="#F5F5F5" />
          <rect x="20" y="56" width="20" height="6" fill="#F5F5F5" />
          <rect x="42" y="56" width="11" height="6" fill="#F5F5F5" />
          <rect x="12" y="16" width="17" height="6" fill="#F5F5F5" />
          <rect x="42" y="18" width="11" height="2" fill="#F5F5F5" />
        </g>
      </g>
      <rect
        x="0.3"
        y="0.3"
        width="64.4"
        height="64.4"
        rx="13.7"
        stroke="#B3E2FE"
        strokeWidth="0.6"
      />
      <defs>
        <filter
          id="filter0_d_0_107"
          x="-2"
          y="6"
          width="69"
          height="85"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0 0.4 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_107"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_107"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_0_107">
          <rect width="65" height="65" rx="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StickerTwoIcon;
