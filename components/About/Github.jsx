import React from 'react';
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-10">
      <h1 className="project-heading text-[45px] font-bold text-center mb-5">
        Days I <strong className="text-[#c770f0]">Code</strong>
      </h1>
      <div className="w-full overflow-hidden flex justify-center">
        <GitHubCalendar
          username="Olatech01"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default Github;
