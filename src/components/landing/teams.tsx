import { companyLogos } from "../../constants";

export default function Teams() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-white text-xl font-medium">
            Trusted by teams at over 1,000 of the world’s leading organizations
          </h2>
        </div>
        <div className="flex items-center justify-around px-10 md:px-4 w-full flex-wrap gap-6">
          {companyLogos.map((logo, index) => (
            <div key={index} className="h-5 cursor-pointer group min-w-6">
              <img
                src={logo.logo}
                alt={logo.company}
                className="w-full h-full object-cover group-hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
