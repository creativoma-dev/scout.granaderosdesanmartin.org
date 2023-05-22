// Assets
import rama from "../assets/images/rama.jpg";
import rama2 from "../assets/images/rama2.jpg";
import rama3 from "../assets/images/rama3.jpg";
import rama4 from "../assets/images/rama4.jpg";

const Ramas = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto pt-12 text-[#111827] gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <h2 className="text-3xl font-bold lg:text-4xl dark:text-white">
          Ramas
        </h2>
      </div>
      <div className="max-w-[85rem] mb-8 px-4 sm:px-6 lg:px-8 mx-auto p-12 text-[#111827] gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#ffef87] rounded-t-xl">
             <img src={rama} alt="rama" className="w-32 h-32 text-white" />
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-green-600 dark:text-green-500">
                7 a 10 años
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Lobatos 
              </h3>
              <p className="mt-3 text-[#111827]">
                Los lobatos y lobeznas se basan en la vida en la naturaleza y el juego.
              </p>
            </div>
          </div>
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#7ea854] rounded-t-xl">
            <img src={rama2} alt="rama" className="w-32 h-32 text-white" />
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-green-600 dark:text-green-500">
                11 a 14 años
              </span>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-gray-300 dark:hover:text-white">
                Scouts
              </h3>
              <p className="mt-3 text-[#111827]">
                La rama scout se basa en la vida en la naturaleza, la aventura y la exploración.
              </p>
            </div>
          </div>
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6bb1f3] rounded-t-xl">
            <img src={rama3} alt="rama" className="w-32 h-32 text-white" />
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-green-600 dark:text-green-500">
                15 a 17 años
              </span>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-gray-300 dark:hover:text-white">
                Caminantes
              </h3>
              <p className="mt-3 text-[#111827]">
                La rama caminante se basa en la aventura y el servicio a la comunidad.
              </p>
            </div>
          </div>
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#ff5b63] rounded-t-xl">
            <img src={rama4} alt="rama" className="w-32 h-32 text-white" />
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-green-600 dark:text-green-500">
                18 a 20 años
              </span>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-gray-300 dark:hover:text-white">
                Rovers
              </h3>
              <p className="mt-3 text-[#111827]">
              La rama rover se basa en el servicio a la comunidad y ser buen ciudadano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ramas;
