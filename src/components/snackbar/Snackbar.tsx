import React, { useState, useEffect } from "react";

type SnackbarSeverity = "success" | "error" | "info" | "warning";

interface SnackbarProps {
  open: boolean;
  message: string;
  severity?: SnackbarSeverity;
  duration?: number; // milliseconds
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  severity = "info",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [visible, duration]);

  useEffect(() => {
    if (!visible && !open) {
      const fadeOutTimer = setTimeout(() => {
        onClose();
      }, 300); // Match transition time

      return () => clearTimeout(fadeOutTimer);
    }
  }, [visible, open, onClose]);

  const getBgColor = () => {
    switch (severity) {
      case "success":
        return "bg-green-600 text-white";
      case "error":
        return "bg-red-600 text-white";
      case "warning":
        return "bg-yellow-600 text-white";
      default:
        return "bg-blue-600 text-white";
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg transform transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${getBgColor()}`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={() => setVisible(false)} className="ml-4 font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
