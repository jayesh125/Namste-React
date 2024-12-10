const Shimmer = () => {
  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-white w-56 animate-pulse rounded-lg p-4 flex flex-col space-y-4"
            >
              <div className="h-36 bg-gray-300 rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
