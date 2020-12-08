import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    // < !--component -- >
    <div className="flex bg-gray-200 h-full fixed">
      {/* <!-- container --> */}

      <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
        {/* <!-- Side Nav Bar--> */}

        <div className="h-16 flex items-center w-full">
          {/* <!-- Logo Section --> */}
          <Link to="/" className="h-6 w-6 mx-auto">
            <svg
              className="fill-current h-8 w-8"
              width="50"
              height="50"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
          </Link>
        </div>

        <ul>
          {/* <!-- Items Section --> */}
          <li className="hover:bg-gray-100">
            <Link
              to="/"
              className="h-16 px-6 flex justify-center items-center w-full
                            focus:text-orange-500"
              title="Home"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path
                  d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                                    2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
                                    0-1.79 1.11z"
                ></path>
              </svg>
            </Link>
          </li>

          <li className="hover:bg-gray-100">
            <Link
              to="/user"
              className="h-16 px-6 flex justify-center items-center w-full
                            focus:text-orange-500"
              title="Users"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
