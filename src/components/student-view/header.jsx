import { GraduationCap, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import Chatbot from "./AiChat";
import { AiFillRobot } from "react-icons/ai";
import { useState } from "react";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);
  const [showChatbot, setShowChatbot] = useState(false); // State for chatbot visibility


  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-4 " />
          <span className="font-extrabold md:text-xl text-[14px]">
            LMS LEARN
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[14px] md:text-[16px] font-medium"
          >
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* AI Chatbot Button */}
        <button
            onClick={toggleChatbot}
            className=" w-12 btn btn-ghost btn-circle lg:flex items-center justify-center mr-7"
          ><AiFillRobot />
            <span className="text-lg font-bold text-grey">AI</span>
          </button>
            {/* Floating Chatbot */}
      {showChatbot && (
        <div className="fixed bottom-16 right-4 z-50 bg-white p-4 rounded-lg shadow-xl w-50 mr-6 top-7">
          <Chatbot className="fixed bottom-16 right-4 z-50 bg-white p-4 rounded-lg shadow-xl w-80 mr-6 top-7" />
        </div>
      )}
        <div className="flex gap-4 items-center">
          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-3"
          >
            <span className="font-extrabold md:text-xl text-[14px]">
              My Courses
            </span>
            <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
          </div>
          <Button onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;
