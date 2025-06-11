import React from "react";

interface DataCardProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function Card({
  header,
  body,
  footer,
  className,
}: DataCardProps) {
  return (
    <div
      className={`bg-white shadow-md p-3 w-full flex flex-col gap-2 ${className}`}
    >
      {header && <div className="flex justify-center">{header}</div>}
      {body && <div className="flex flex-col text-center gap-2">{body}</div>}
      {footer && <div className="mt-auto">{footer}</div>}
    </div>
  );
}
