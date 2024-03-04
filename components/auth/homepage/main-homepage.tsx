export const MainHomepage = () => {
    return (
        <div className="mx-auto mb-10 mt-40 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
          Short Links With
          <br />
          <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
            Superpowers
          </span>
        </h1>
        <h2 className="mt-5 text-gray-600 sm:text-xl">
          LINK is the open-source link management infrastructure for modern
          marketing teams.
        </h2>
        <div className="main__buttons mx-auto mt-5 flex max-w-fit space-x-4">
          <a
            className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
            href="/auth/login"
          >
            Start for Free
          </a>
          <a
            className="rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
            href="#"
          >
            Get a Demo
          </a>
        </div>
      </div>
    )
}