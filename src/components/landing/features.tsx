import { features } from "../../constants";
import FeatureCard from "../ui/feature-card";

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-md mx-auto">
          <h2 className="text-4xl lg:text-5xl text-[#ECECEC] font-medium mb-6">
            Features that work for your future.
          </h2>

          <p className="text-[#ECECEC] font-medium">
            Check out our amazing features and experience the power of Vaultflow
            for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, key) => (
            <FeatureCard
              key={key}
              index={key}
              icon={<img src={feat.iconSrc} alt={feat.title} />}
              title={feat.title}
              description={feat.description}
              hasImage={feat.hasImage}
              imageUrl={feat.imageUrl}
              cta={feat.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
