import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import { PostProvider } from "./contextapi/Postscontext";
import Home from "./pages/Home";
import { UserProvider } from "./contextapi/Usercontext";
import { NewsProvider } from "./contextapi/Newscontext";
import Notfoundpage from "./pages/Notfoundpage";
import Profile from "./pages/Profile";
import Message from "./pages/Message";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Friends from "./pages/Friends";
import News from "./pages/News";

function App() {
  return (
    <>
      <UserProvider>
        <PostProvider>
          <NewsProvider>
            <Router>
              <Nav />
              <div className="Hidden h-[100px]"></div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Notfoundpage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Home />} />
                <Route path="/messages" element={<Message />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/bookmarks" element={<Home />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </Router>
          </NewsProvider>
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default App;
