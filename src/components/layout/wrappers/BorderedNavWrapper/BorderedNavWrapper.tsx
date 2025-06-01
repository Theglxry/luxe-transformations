"use client";

function BorderedNavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "bg-inherit sm:bg-white p-[0] md:p-[5px] h-screen overflow-hidden relative"
      }>
      <div
        className={
          "relative h-full w-full mx-auto overflow-auto rounded-[0px] md:rounded-[10px]"
        }>
        {children}
      </div>
    </div>
  );
}

export default BorderedNavWrapper;
