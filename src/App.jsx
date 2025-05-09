import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

import News from "./pages/News";
import { AuthProvider } from "./contextapi/Authentication";
import Loginpage from "./pages/Loginpage";
import Mobilemenupage from "./pages/Mobilemenupage";
import PostPrevew from "./pages/extrapage/PostPrevew";
import { StoryDataProvider } from "./contextapi/Storydatacontext";
import Discover from "./pages/Discover";
import Shorts from "./pages/Shorts";

function App() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <StoryDataProvider>
              <NewsProvider>
                <Router>
                  <Nav />
                  <div className="Hidden h-[110px] md:h-[72px] "></div>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Notfoundpage />} />
                    <Route path="/home" element={<Home />} />
                    {
                      //<Route path="/Login" element={<Loginpage />} />
                    }
                    <Route path="/profile/:uniqueId" element={<Profile />} />
                    <Route path="/settings" element={<Home />} />
                    <Route path="/messages" element={<Message />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/shorts" element={<Shorts />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/bookmarks" element={<Home />} />
                    <Route path="/post/:postid" element={<PostPrevew />} />
                    <Route path="/menu" element={<Mobilemenupage />} />
                    <Route path="/news" element={<News />} />
                  </Routes>
                </Router>
              </NewsProvider>
            </StoryDataProvider>
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;
