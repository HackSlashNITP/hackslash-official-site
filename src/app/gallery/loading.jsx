export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {/* Simple spinner using Tailwind */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-400 border-solid"></div>
      <h2 className="mt-4 text-xl text-gray-500">Loading Gallery...</h2>
    </div>
  );
}