const Badge = ({ discount }: { discount?: number }) => {
    return (
      <span
        className={`absolute  text-white rounded-br-[24px] rounded-tl-[24px] px-4 py-3 font-semibold text-sm 
          ${discount ? "bg-yellow-500" : "bg-blue-700"
        }`}
      >
        {discount ? `%${discount} İndirim` : "Yeni"}
      </span>
    );
  };
  
  export default Badge;