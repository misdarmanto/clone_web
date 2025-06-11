import Button from "../buttons/Button";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  className = "",
}: PaginationProps) {
  return (
    <div
      className={clsx(`flex items-center justify-between mt-4 px-2`, className)}
    >
      <Button
        variant="outlined"
        size="small"
        onClick={onPrev}
        disabled={currentPage <= 1}
      >
        Previous
      </Button>

      <p className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </p>

      <Button
        variant="outlined"
        size="small"
        onClick={onNext}
        disabled={currentPage >= totalPages}
      >
        Next
      </Button>
    </div>
  );
}
