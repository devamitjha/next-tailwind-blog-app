"use client";
import React from 'react'
import TitleDecoration from '../TitleDecoration';
import ListCard from '../listCard/ListCard';
import Sidebar from '../sidebar/Sidebar';

const FeaturePost = ({title}) => {
  return (
    <div className="w-full my-20">
      <div className="max-w-[1280px] w-[90%] mx-auto"> 
        <div className="mb-10">
          <TitleDecoration title={title} size="big"/>
        </div>
        <div className="flex justify-between items-start w-full gap-15 relative">
            <div className="w-[68%]">
                <ListCard/>
            </div>
            <div className="w-[32%] sticky top-10">
                <Sidebar/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturePost