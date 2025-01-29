function Button({ children, type, onClick, disabled }) {
  const styles = {
    go: "desktop:h-8 lgdesktop:h-14 tablet:text-[12px] lgdesktop:w-52 tablet:h-7 tablet:w-32 desktop:w-36 bg-[#3B1606] lgdesktop:text-xl desktop:text-sm text-xs text-[#ffff] h-5 w-28 shadow-[3px_3px_1px_rgba(202,141,37)]",
    add: " h-7 w-28  ipadpro:h-8 ipad-pro:w-36 bg-[#3B1606] text-xs  text-[#ffff] rounded-xl text-center  ",
    return:
      "mr-1 mt-1 flex h-10 w-32 text-sm font-vaziri items-center justify-center rounded-lg bg-[#3B1606] text-[#ffff] tablet:mr-3 tablet:mt-3",
    call: " h-7 w-32 flex  gap-3 pr-4 items-center  ipadpro:h-8 ipad-pro:w-36 bg-[#3B1606] text-md font-vaziri  text-[#ffff] rounded-xl   ",
    enter:
      "h-[46px] w-full    ipadpro:h-8 ipad-pro:w-36 bg-[#3B1606] text-xs  text-[#ffff]  text-center ",
    signup:
      "h-[46px] w-full    ipadpro:h-8 ipad-pro:w-36 bg-[#F2F2F2] text-xs  text-slate-700  text-center ",
    backtologin:
      " h-7 w-28  ipadpro:h-8 ipad-pro:w-36 bg-[#3B1606] text-xs  text-[#ffff]  text-center  ",
    branch:
      "h-[46px] w-1/2    ipadpro:h-8 ipad-pro:w-36 bg-[#3B1606] text-xs  text-[#ffff]  text-center ",
    delete:
      "w-10 flex justify-center items-center  text-sm rounded-md bg-red-800  text-[#ffff]",
    deletebasket:
      " h-7 w-32 flex  gap-3  items-center  justify-center  ipadpro:h-8 ipad-pro:w-36 bg-red-800 text-md font-vaziri  text-[#ffff] rounded-md   ",
    continue:
      " h-7 w-32 flex  gap-3  items-center justify-center  ipadpro:h-8 ipad-pro:w-36 bg-[#3B1606] text-md font-vaziri  text-[#ffff] rounded-md   ",
    deletebasketalert:
      " h-7 w-28  ipadpro:h-8 ipad-pro:w-36 bg-red-800 text-xs  text-[#ffff]  text-center  ",
  };
  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
