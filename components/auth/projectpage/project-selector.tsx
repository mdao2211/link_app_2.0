export const ProjectSelector = () => {
  return (
    <div className="scrollbar-hide mb-[-3px] flex h-12 items-center justify-start space-x-2 overflow-x-auto">
      <a className="relative group" href="#">
        <div className="m-1 rounded-md px-3 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
          <p className="text-sm text-gray-600 hover:text-black">Links</p>
        </div>
        <div
          className="absolute bottom-0 w-full px-1.5"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          <div className="h-0.5 bg-black"></div>
        </div>
      </a>
      <a className="relative group" href="#">
        <div className="m-1 rounded-md px-3 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
          <p className="text-sm text-gray-600 hover:text-black">Domains</p>
        </div>
        <div className="absolute bottom-0 w-full px-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-0.5 bg-black"></div>
        </div>
      </a>
      <a className="relative group" href="#">
        <div className="m-1 rounded-md px-3 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
          <p className="text-sm text-gray-600 hover:text-black">Settings</p>
        </div>
        <div className="absolute bottom-0 w-full px-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-0.5 bg-black"></div>
        </div>
      </a>
    </div>
  );
};
