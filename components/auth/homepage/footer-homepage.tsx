export const FooterHomepage = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid gap-y-4  md:grid-cols-3 md:gap-y-0">
          <div>
            <h3 className="text-center font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="text-center">
              <li className="my-2">
                <a
                  href="#"
                  className=" text-gray-300 hover:text-blue-400 inline-block"
                >
                  FAQs
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Give us feedback
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center font-semibold mb-4">LEGAL STUFF</h3>
            <ul className="text-center">
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Privacy policy
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-semibold mb-4">
              CONNECT WITH US
            </h3>
            <ul className="text-center">
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Github
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-center text-gray-300 hover:text-blue-400 inline-block"
                >
                  Google +
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            2024{" "}
            <a href="#">
              <span className="hover:text-blue-400">© LINK</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
