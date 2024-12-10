const Shimmer2 = () => {
  return (
    <div className="p-4 bg-white space-y-4 w-full max-w-4xl mx-auto">
      {/* Restaurant Info Shimmer */}
      <div className="h-8 w-[420px] mt-2 bg-gray-200 rounded-lg animate-pulse"></div>

      {/* Menu Section Shimmer */}
      <div className="h-28 w-[100%] m-5 bg-gray-200 rounded-lg animate-pulse"></div>

      <div className="h-8 w-[120px] mx-4 justify-center bg-gray-200 rounded-lg animate-pulse"></div>

      {/* Placeholder for multiple items */}
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between space-x-4"
          >
            <div className="flex-1 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-24 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer2;
