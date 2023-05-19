// assets
import foto2 from "../assets/images/photo-history-1.jpg";
import foto3 from "../assets/images/photo-history-2.jpg";
import foto4 from "../assets/images/photo-history-3.jpg";

const Historia = () => {
  return (
    <div className="max-w-[85rem] p-8 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-1 gap-y-8 lg:gap-y-0 lg:gap-x-12">
        <div className="lg:col-span-2">
          <div className="py-8 lg:pr-8">
            <div className="space-y-5 lg:space-y-8">
              <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                Historia
              </h2>
              <p className="text-lg text-[#111827] dark:text-white">
                Magnis fringilla libero rutrum vulputate taciti vivamus pulvinar
                mattis id mollis, egestas sagittis velit ultricies nunc nibh
                nascetur mauris bibendum. Feugiat netus vel libero orci quis
                habitasse, primis integer at fames pulvinar sociis, nec ante
                duis lectus sem. Et primis ornare a aliquam accumsan nullam
                rhoncus torquent luctus ad lacinia commodo, porta tincidunt
                vehicula tortor id vel eu pharetra eget facilisi nisl.
              </p>
              <div className="text-center">
                <div className="grid lg:grid-cols-2 gap-3">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <figure className="relative w-full h-80">
                      <img
                        className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                        src={foto4}
                        alt="Image Description"
                      />
                    </figure>
                    <figure className="relative w-full h-80">
                      <img
                        className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                        src={foto2}
                        alt="Image Description"
                      />
                    </figure>
                  </div>
                  <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                      src={foto3}
                      alt="Image Description"
                    />
                  </figure>
                </div>
              </div>

              <p className="text-lg text-[#111827] dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, pharetra
                tincidunt himenaeos cras mollis aliquam curae, magnis imperdiet
                lectus primis nibh consequat. Eu fusce nam est interdum pretium
                justo natoque auctor mi, litora nulla varius mauris in cursus
                ridiculus placerat, tellus platea sem tincidunt et facilisi non
                gravida. Eget lectus lobortis etiam phasellus egestas habitasse
                mi quam sapien, malesuada purus scelerisque porttitor per
                placerat platea justo feugiat, fermentum facilisis gravida
                pharetra ultrices rutrum nunc velit.
              </p>

              <p className="text-lg text-[#111827] dark:text-white">
                Magnis fringilla libero rutrum vulputate taciti vivamus pulvinar
                mattis id mollis, egestas sagittis velit ultricies nunc nibh
                nascetur mauris bibendum. Feugiat netus vel libero orci quis
                habitasse, primis integer at fames pulvinar sociis, nec ante
                duis lectus sem. Et primis ornare a aliquam accumsan nullam
                rhoncus torquent luctus ad lacinia commodo, porta tincidunt
                vehicula tortor id vel eu pharetra eget facilisi nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
