interface TechTabsProps {
  onClick: (key: string) => void;
  activeTab: {
    all: boolean;
    lang: boolean;
    tools: boolean;
  };
}

function TechTabs({ onClick, activeTab }: TechTabsProps) {
  return (
    <div className="flex gap-2 w-full">
      <button
        onClick={() => onClick("all")}
        className={`${
          activeTab.all
            ? "purple-border--active text-white"
            : "purple-border text-gray-400"
        } h-14 md:h-10 md:text-xs  w-full rounded-l-xl font-roboto text-[0.8rem] font-bold `}
      >
        ALL
      </button>
      <button
        onClick={() => onClick("lang")}
        className={`${
          activeTab.lang
          ? "purple-border--active text-white"
            : "purple-border text-gray-400"
        } h-14 md:h-10 md:text-xs w-full font-roboto text-[0.8rem] font-bold `}
      >
        LANGUAGES
      </button>
      <button
        onClick={() => onClick("tools")}
        className={`${
          activeTab.tools
            ? "purple-border--active text-white"
            : "purple-border text-gray-400"
        } h-14 md:h-10 md:text-xs w-full rounded-r-xl font-roboto text-[0.8rem] font-bold `}
      >
        TOOLS
      </button>
    </div>
  );
}

export default TechTabs;
