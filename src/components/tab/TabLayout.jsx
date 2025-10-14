"use client";
import { useState, useRef, useId } from "react";
import { motion, LayoutGroup } from "framer-motion";
import TitleDecoration from "../TitleDecoration";

const TabLayout = ({title, tabItem, layOutType }) => {
  const [activeTab, setActiveTab] = useState(tabItem[0]?.key || "1");
  const [activeCategory, setActiveCategory] = useState(tabItem[0]?.label);
  const tabRefs = useRef({});
  const containerRef = useRef(null);
  const layoutIdPrefix = useId();

  const handleTabClick = (key, label) => {
    setActiveTab(key);
    setActiveCategory(label);  

    // Center active tab if scrollable
    const tabEl = tabRefs.current[key];
    const container = containerRef.current;
    if (tabEl && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = tabEl.getBoundingClientRect();
      const offset = tabRect.left - containerRect.left;
      const scrollTarget =
        container.scrollLeft +
        offset -
        container.clientWidth / 2 +
        tabEl.clientWidth / 2;
      container.scrollTo({ left: scrollTarget, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <TitleDecoration title={title} size="big"/>
        </div>

        {/* Tabs */}
        <div ref={containerRef} className="overflow-x-auto">
          <div className="flex space-x-2">
            <LayoutGroup id={layoutIdPrefix}>
              {tabItem.map((tab) => (
                <div
                  key={tab.key}
                  ref={(el) => (tabRefs.current[tab.key] = el)}
                  className={`relative cursor-pointer px-6 py-2 text-sm font-medium rounded-md transition-colors border border-black-100 ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-gray-500 hover:text-black"
                  }`}
                  onClick={() => handleTabClick(tab.key, tab.label)}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId={`activeTab-${layoutIdPrefix}`}
                      className="absolute inset-0 bg-[var(--primary-theme-color)] shadow-lg rounded-md border border-[var(--primary-theme-color)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </div>
              ))}
            </LayoutGroup>
          </div>
        </div>
      </div>

      {/* Active tab content */}
      <div className="mt-6">
        {/* {tabItem.find((tab) => tab.key === activeTab)?.label} */}
        {
          layOutType === "sidebar" && 
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-7">
            <div className="w-full lg:w-3/5">
             {tabItem.find((tab) => tab.key === activeTab)?.label}
            </div>
            <div className="w-full lg:w-2/5">
             {tabItem.find((tab) => tab.key === activeTab)?.label}
            </div>
          </div>
        }

        {
          layOutType === "feature" && 
            <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-7 pt-5">
              <div className="w-full lg:w-1/3">
                {tabItem.find((tab) => tab.key === activeTab)?.label}
              </div>
              <div className="w-full lg:w-2/3">
                {tabItem.find((tab) => tab.key === activeTab)?.label}
              </div>
            </div>
        }
      </div>
    </>
  );
};

export default TabLayout;
