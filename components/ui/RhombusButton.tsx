"use client";

import React from "react";

interface RhombusButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const RhombusButton: React.FC<RhombusButtonProps> = ({
  label,
  active = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative h-10 px-8 flex items-center justify-center cursor-pointer transform -skew-x-12 
        transition-all duration-300 ease-in-out shadow-[0_3px_10px_rgba(0,0,0,0.25)] 
        ${
          active
            ? "bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white"
            : "bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3B82F6] text-white"
        } ${className}`}
    >
      <span className="skew-x-12 text-sm tracking-wider font-semibold select-none">
        {label}
      </span>
    </button>
  );
};

export default RhombusButton;
