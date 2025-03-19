import React from "react";
import Nav from "./components/navigation/Nav";
import Sidenav from "./components/navigation/Sidenav";
import { PostProvider } from "./contextapi/Postscontext";
import Home from "./pages/Home";
import { UserProvider } from "./contextapi/Usercontext";
import Rightsidenav from "./components/navigation/Rightsidenav";
import { NewsProvider } from "./contextapi/Newscontext";

function App() {
  return (
    <>
      <UserProvider>
        <PostProvider>
          <NewsProvider>
            <Nav />
            <div className="Hidden h-[100px]"></div>
            <div className="flex Pagearea min-h-screen gap-14 bg-gray-100">
              {/* Left Sidebar */}
              <nav className="w-3/12 bg-white  sticky top-[100px]  h-[calc(100vh_-_120px)] rounded-lg">
                <Sidenav />
              </nav>

              {/* Main Content */}
              <main className="flex-1 ">
                <Home />
              </main>

              {/* Right Sidebar */}
              <nav className="w-3/12 bg-white  sticky  top-[100px]  h-[calc(100vh_-_120px)] rounded-lg">
                <Rightsidenav />
              </nav>
            </div>
          </NewsProvider>
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default App;
