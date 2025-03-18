import React from "react";
import Nav from "./components/navigation/Nav";
import Sidenav from "./components/navigation/Sidenav";
import { PostProvider } from "./contextapi/Postscontext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <PostProvider>
        <Nav />
        <div className="Hidden h-[100px]"></div>
        <div className="flex Pagearea min-h-screen gap-14 bg-gray-100">
          {/* Left Sidebar */}
          <nav className="w-3/12 bg-white  sticky top-[100px]  h-[calc(100vh_-_120px)] rounded-lg overflow-y-scroll">
            <Sidenav />
          </nav>

          {/* Main Content */}
          <main className="flex-1 ">
            <Home />
          </main>

          {/* Right Sidebar */}
          <nav className="w-3/12 bg-white  sticky  top-[100px]  h-[calc(100vh_-_120px)] rounded-lg"></nav>
        </div>
      </PostProvider>
    </>
  );
}

export default App;
