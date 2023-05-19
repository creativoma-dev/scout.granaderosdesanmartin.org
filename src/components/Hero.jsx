// Assets
import imgBack from "../assets/images/back.jpg";
import imgLogo from "../assets/svg/favicon.svg";

const Hero = () => {
  return (
    <>
      <section className="p-8">
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto text-gray-800 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <figure className="flex-none">
              <img
                src={imgLogo}
                className="w-48"
                alt="Identidad Grupo Scout 'Granaderos de San Martín'"
                title="Identidad Grupo Scout 'Granaderos de San Martín'"
              />
            </figure>
            <h2 className="text-3xl text-[#111827] font-extrabold md:text-4xl dark:text-white">
              Grupos Scout "Granaderos de San Martín"
            </h2>
            <p className="text-lg text-[#111827] dark:text-white">
              Somos una organización de jóvenes que busca desarrollar en ellos
              valores y actitudes que les permitan ser personas útiles para la
              sociedad, a través de la educación y el trabajo en equipo.
            </p>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src={imgBack}
              className="rounded-xl"
              alt="Cima del Cerro Champaquí"
              title="Cima del Cerro Champaquí"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
