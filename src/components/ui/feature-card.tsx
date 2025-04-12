import { motion } from "motion/react";
import { Link } from "react-router-dom";

const FeatureCard = ({
  icon,
  title,
  description,
  index,
  hasImage = false,
  cta = "",
  imageUrl = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  hasImage?: boolean;
  imageUrl?: string;
  cta: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-xl shadow-[0_-2px_12px_#BB9BFF40] w-full border border-[#282D45] transition-all duration-300 p-8
        ${
          hasImage
            ? "bg-gradient-to-br from-[#ffffff08] to-[#BB9BFF08] drop-shadow-[0_0_40px_#BB9BFF40] flex flex-col md:flex-row gap-6"
            : "bg-gradient-to-b from-[#ffffff05] to-[#ffffff00] drop-shadow-[0_0_25px_#BB9BFF30] flex flex-col"
        }
        ${index === 2 ? "md:col-span-2 md:items-center" : ""}
        `}
    >
      <div className={`${hasImage ? "flex-1" : ""}`}>
        <div className=" border-b border-[#ECECEC20] pb-6">
          <div className="mb-4">{icon}</div>
          <h3 className="text-[#ECECEC] text-3xl font-semibold mb-2">
            {title}
          </h3>
          <p className="text-white/70 text-sm">{description}</p>
        </div>

        <div className="text-[#ECECEC] block w-full py-4 text-sm font-medium hover:underline">
          <Link to="/">{cta}</Link>
        </div>
      </div>
      {hasImage && imageUrl && (
        <div className="flex items-center justify-center rounded-xl bg-[#BB9BFF0A] shadow-[0_0_60px_#BB9BFF40] mt-6">
          <img src={imageUrl} alt={title} />
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;

// import { motion } from "motion/react";

// const FeatureCard = ({
//   icon,
//   title,
//   description,
//   index,
//   className = "",
//   hasImage = false,
//   imageUrl = "",
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   index: number;
//   className?: string;
//   hasImage?: boolean;
//   imageUrl?: string;
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className={`bg-gradient-to-bottom from-[#ffffff05] to-[#ffffff00] inset-shadow inset-shadow-[#282D45] drop-shadow-xl drop-shadow-[#BB9BFF26] px-12 py-8 rounded-xl border border-[#282D45] hover:border-[#7214FF60] duration-300 transition-colors ${className} ${
//         hasImage ? "flex flex-col items-center md:flex-row" : ""
//       }`}
//     >
//       <div>
//         <div className="mb-4 text-purple-500">{icon}</div>
//         <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-white/70 text-sm">{description}</p>
//       </div>
//       {hasImage && imageUrl && (
//         <div className="mt-4 md:mt-0 p-6 flex items-center justify-center">
//           <img src={imageUrl} alt={title} />
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default FeatureCard;
