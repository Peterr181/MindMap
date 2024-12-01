interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  isPrimaryButton?: boolean;
  onClick: () => void;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  isPrimaryButton = false,
  onClick,
}) => (
  <div className="text-center bg-white rounded-[32px] shadow-md mt-[32px] p-[32px] lg:w-[400px] w-full lg:h-[450px] h-full flex flex-col justify-between">
    <h3 className="font-fontSecondary text-lg font-semibold leading-[33px] text-[#074A68] mb-[18px]">
      {title}
    </h3>
    <span className="text-[#074A68] font-fontSecondary text-[24px] font-light text-center mb-[18px]">
      {price}
    </span>
    <p className="text-[#074A68] text-lg font-normal leading-[28px] tracking-[0.2px] text-center pt-[16px] pb-[32px]">
      {description}
    </p>
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`flex justify-center hover:bg-inherit transition-all duration-300 items-center gap-2 w-full h-[60px] px-6 py-3 rounded-[32px] font-bold ${
          isPrimaryButton
            ? "bg-[#074A68] text-white hover:text-[#074A68]"
            : "bg-[#A0D195] hover:text-[#A0D195]"
        }`}
      >
        Choose
      </button>
    </div>
  </div>
);
