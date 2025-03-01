"use client";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="size-16 border-4 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
