import React, { Suspense } from "react";
import Tiger from "./models/Tiger";
import Loading from "./components/Loading";
import { FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import IconButton from "./components/IconButton";
import Button from "./components/Button";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col max-w-4xl items-center justify-center">
        <div className="w-2/3 md:w-1/3 flex flex-col items-center justify-center">
          <img
            src="./profile.png"
            className="rounded-full w-2/3 md:w-full border-2 p-2"
          />
          <div className="w-2/3 md:w-full flex justify-evenly text-4xl pt-5 pb-5">
            <IconButton
              link={"https://github.com/amogh-w"}
              text={<FaGithub />}
            />
            <IconButton
              link={
                "https://scholar.google.com/citations?user=9refg3wAAAAJ&hl=en"
              }
              text={<SiGooglescholar />}
            />
            <IconButton
              link={"https://www.linkedin.com/in/amogh-w/"}
              text={<FaLinkedin />}
            />
          </div>
        </div>
        <div className="md:w-full flex flex-col  items-center justify-center p-2">
          <div className="text-pretty text-lg md:text-xl lg:text-2xl text-center">
            Hello, I'm Amogh Warkhandkar.
            <br />
            Studying M.Sc. Data Science at{" "}
            <span className="font-bold text-ctp-blue">
              RWTH Aachen University
            </span>
            .
            <br />
            Interested in{" "}
            <span className="font-bold text-ctp-red">
              Computer Vision
            </span> and{" "}
            <span className="font-bold text-ctp-red">Computer Graphics</span>.
            <div className="flex flex-col md:flex-row items-center justify-center text-xl mt-5 mb-2">
              <Button
                link={"https://amogh-w.github.io/resume.pdf"}
                text={"Resume"}
                icon={<MdAttachFile />}
              />
              <Button
                link={"https://amogh-w.vercel.app/"}
                text={"Blog"}
                icon={<IoMdBook />}
              />
            </div>
          </div>
          <Tiger />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
