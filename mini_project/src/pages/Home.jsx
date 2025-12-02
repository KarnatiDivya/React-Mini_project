import React from "react";
import InfoBox from "../components/InfoBox";

export default function Home() {
  return (
    <div className="container mx-auto home-wrapper">
      
      {/* Banner Section */}
      <div className="home-banner">
        <img 
          src="https://schoolsystemsoftware.wordpress.com/wp-content/uploads/2016/07/school-management-system-banner.jpg" 
          alt="Students learning"
          className="banner-img"
        />
      </div>

      {/* Text Section */}
      <h1 className="home-title">Welcome to Student Dashboard</h1>

      <p className="home-subtext">
        A clean and interactive platform to practice React fundamentals — routing, context, hooks, forms, memoization, and more.
      </p>

      {/* Info Box */}
      <InfoBox title="Tip">
        Explore the <strong>Students</strong> page to view fetched data.  
        Use <strong>Add Student</strong> to create new entries that are stored globally using Context API.
      </InfoBox>
    </div>
  );
}
