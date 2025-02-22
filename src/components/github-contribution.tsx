"use client";

import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <div className="w-full mx-auto">
      <GitHubCalendar
        username="ezeslucky"
        colorScheme="dark"
        fontSize={12}
        blockSize={12}
        theme={{
          dark: ["#1b1b1b", "#2ecc71", "#2ecc71", "#2ecc71", "#2ecc71"],
        }}
      />
    </div>
  );
};

export default GitHubContributions;
