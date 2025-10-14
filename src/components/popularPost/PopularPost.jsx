"use client";
import TabLayout from "../tab/TabLayout";

const tabs = [
  { key: "1", label: "Block Chain"},
  { key: "2", label: "World Politics"},
  { key: "3", label: "Artificial Intelligence"},
];

const PopularPost = () => { 

  return (
    <div className="w-full my-20">
      <div className="max-w-[1280px] w-[90%] mx-auto"> 
        <TabLayout title="Popular Post" tabItem={tabs} layOutType="feature"/>     
      </div>
    </div>
  );
};

export default PopularPost;
