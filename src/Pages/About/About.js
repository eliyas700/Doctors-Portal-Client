import React from "react";
import img from "../../assets/images/Layer-1200.png";
const About = () => {
  return (
    <div className="py-20 w-[96%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1 className="text-2xl">
            <span className="text-4xl font-bold">About</span> Doctors Portal
          </h1>
          <div className="w-[70%] mt-11">
            <div
              tabindex="0"
              class="collapse collapse-arrow border border-base-300 bg-base-100 "
            >
              <input type="checkbox" class="peer" />
              <div class="collapse-title text-xl font-medium">
                Laboratory Analysis
              </div>
              <div class="collapse-content">
                <p className="text-neutral">
                  attribute is necessary to make the Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Est vel nostrum necessitatibus
                  quisquam, velit voluptate eum ab reiciendis saepe expedita.
                </p>
              </div>
            </div>
            <div
              tabindex="0"
              class="collapse collapse-arrow border border-base-300 bg-base-100 "
            >
              <input type="checkbox" class="peer" />
              <div class="collapse-title text-xl font-medium">
                Medical Consulting
              </div>
              <div class="collapse-content">
                <p className="text-neutral">
                  attribute is necessary to make the Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Est vel nostrum necessitatibus
                  quisquam, velit voluptate eum ab reiciendis saepe expedita.
                </p>
              </div>
            </div>
            <div
              tabindex="0"
              class="collapse collapse-arrow border border-base-300 bg-base-100 "
            >
              <input type="checkbox" class="peer" />
              <div class="collapse-title text-xl font-medium">
                Diagnostic Clinic
              </div>
              <div class="collapse-content">
                <p className="text-neutral">
                  attribute is necessary to make the Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Est vel nostrum necessitatibus
                  quisquam, velit voluptate eum ab reiciendis saepe expedita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
