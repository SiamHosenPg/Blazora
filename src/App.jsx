import React from "react";

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/loader/Loading";
import { PostProvider } from "./contextapi/Postscontext";
import { UserProvider } from "./contextapi/Usercontext";
import { NewsProvider } from "./contextapi/Newscontext";
import { AuthProvider } from "./contextapi/Authentication";
import { MessageProvider } from "./contextapi/Messagecontext";
import { StoryDataProvider } from "./contextapi/Storydatacontext";

const Nav = lazy(() => import("./components/navigation/Nav"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Message = lazy(() => import("./pages/Message"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Explore = lazy(() => import("./pages/Explore"));
const News = lazy(() => import("./pages/News"));
const Mobilemenupage = lazy(() => import("./pages/Mobilemenupage"));
const Shorts = lazy(() => import("./pages/Shorts"));
const PostPrevew = lazy(() => import("./pages/extrapage/PostPrevew"));
const Notfoundpage = lazy(() => import("./pages/Notfoundpage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <UserProvider>
            <PostProvider>
              <StoryDataProvider>
                <NewsProvider>
                  <MessageProvider>
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
                        <Route
                          path="/profile/:uniqueId"
                          element={<Profile />}
                        />
                        <Route path="/settings" element={<Home />} />
                        <Route path="/messages" element={<Message />} />
                        <Route
                          path="/notifications"
                          element={<Notifications />}
                        />
                        <Route path="/shorts" element={<Shorts />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/bookmarks" element={<Home />} />
                        <Route path="/post/:postid" element={<PostPrevew />} />
                        <Route path="/menu" element={<Mobilemenupage />} />
                        <Route path="/news" element={<News />} />
                      </Routes>
                    </Router>
                  </MessageProvider>
                </NewsProvider>
              </StoryDataProvider>
            </PostProvider>
          </UserProvider>
        </AuthProvider>
      </Suspense>
    </>
  );
}

export default App;
