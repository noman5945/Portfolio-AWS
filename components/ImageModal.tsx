"use client";
import React from "react";
type ImageModalProps = {
  open: boolean;
  onClose: () => void;
  image: string;
  title: string;
};
export default function ImageModal({
  open,
  onClose,
  image,
  title,
}: ImageModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-10
            rounded-lg
            bg-black/60
            px-3
            py-2
            text-white
            cursor-pointer
          "
        >
          ✕
        </button>

        <img
          src={image}
          alt={title}
          className="max-h-[90vh] w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
