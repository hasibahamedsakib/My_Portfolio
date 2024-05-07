import React from "react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <div className="Container text-green-600 text-2xl pt-24 grid items-center justify-center h-screen w-full">
      <div>
        <h1>All Projects Page is hear...</h1>
        <p>Page under construction</p>
        <p>More change will coming soon</p>
        <Link to="/">
          <button className="btn-primary mt-3">Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default AllProjects;
