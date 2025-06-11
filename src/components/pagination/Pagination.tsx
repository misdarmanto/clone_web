export default function Pagination() {
  return (
    <div className="flex items-center justify-between mt-4 px-2">
      <button className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded">
        Previous
      </button>
      <p className="text-sm">Page 1 of 0</p>
      <button className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded">
        Next
      </button>
    </div>
  );
}
