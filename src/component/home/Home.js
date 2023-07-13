import React from "react";
import mypic from "../../assets/image/mypic.png";
import sign from "../../assets/image/sign.png";
import myworks from "../../assets/image/my-works.png";
import gfonts from "../../assets/image/gfonts.png";
import camera from "../../assets/image/camera.png";
import pen from "../../assets/image/pen.png";
import connection from "../../assets/image/connection.png";
import smartphone from "../../assets/image/smartphone.png";
import ball from "../../assets/image/ball.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <>
      <div className="md:container md:mx-auto px-36">
        <div className="flex mt-24 space-x-5">
          <div className="w-2/4 text-center bg-white m-10 p-4 border-solid  rounded-3xl">
            <div className="flex items-start ">
              <div className="2/4 bg-blue-500 m-5 rounded-tl-3xl h-52">
                <img src={mypic} alt="" className="h-52 w-56 " />
              </div>
              <div className="w-2/4">
                <div className="mt-10 text-left">
                  <span className="text-xl opacity-50">A Web Designer</span>
                  <br />
                  <span className="text-[30px] font-semibold">Deveid</span>
                  <br />
                  <span className="text-[30px] font-semibold">Hederson</span>
                  <br />
                  <p className="text-xl opacity-50">
                    I am a web Designer bansed in san fransisco
                  </p>
                </div>
              </div>
            </div>
            <Link to="/about">
              <span className="float-right">
                <div class="box-1">
                  <div class="btn btn-one text-center">
                    <span>About Me</span>
                  </div>
                </div>
              </span>
            </Link>
          </div>
          <div className="w-2/4 text-center m-10">
            <div className=" grid-cols-1 bg-white px-5 py-2 border-solid  rounded-3xl">
              <Swiper
                loop={true}
                freeMode={true}
                grabCursor={true}
                spaceBetween={30}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={3}
                modules={[Autoplay]}
                className="mySwiper"
                speed={5000}
                freeModeMomentum={false}
              >
                <div className="flex space-x-10 ">
                  <SwiperSlide>
                    {" "}
                    <div>
                      <span className="text-[10px] opacity-50 font-semibold">
                        LETEST WORK AND
                      </span>
                      <span className="text-blue-500 text-[10px]">
                        FEATURED
                      </span>{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div>
                      <span className="text-[10px] opacity-50 font-semibold">
                        LETEST WORK AND
                      </span>
                      <span className="text-blue-500 text-[10px]">
                        FEATURED
                      </span>{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div>
                      <span className="text-[10px] opacity-50 font-semibold">
                        LETEST WORK AND
                      </span>
                      <span className="text-blue-500 text-[10px]">
                        FEATURED
                      </span>{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div>
                      <span className="text-[10px] opacity-50 font-semibold">
                        LETEST WORK AND
                      </span>
                      <span className="text-blue-500 text-[10px]">
                        FEATURED
                      </span>{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div>
                      <span className="text-[10px] opacity-50 font-semibold">
                        LETEST WORK AND
                      </span>
                      <span className="text-blue-500 text-[10px]">
                        FEATURED
                      </span>{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div>
                      <span className="text-[10px] opacity-50 font-semibold">
                        LETEST WORK AND
                      </span>
                      <span className="text-blue-500 text-[10px]">
                        FEATURED
                      </span>{" "}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div>
                      <span className="text-[10px] opacity-50 font-semibold">
                        LETEST WORK AND
                      </span>
                      <span className="text-blue-500 text-[10px]">
                        FEATURED
                      </span>{" "}
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <br />
            <div className=" flex space-x-10 h-[220px] mt-3">
              <div className="w-1/2 bg-white p-3 border-solid  rounded-3xl">
                <div className="px-5">
                  <img src={sign} alt="" />
                </div>
                <span className="text-sm opacity-50 font-semibold float-left px-5 mt-4">
                  More About me
                </span>
                <br />
                <div>
                  <div>
                    <span className="text-xl font-medium float-left px-5">
                      Cradentials
                    </span>
                    <Link to="/about">
                      <span className="float-right px-2">
                        <div class="box-1">
                          <div class="btn btn-one text-center">
                            <span>About Me</span>
                          </div>
                        </div>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-white p-3 border-solid  rounded-3xl">
                <div className="px-5 mb-3">
                  <img src={myworks} alt="" />
                </div>
                <span className="text-sm opacity-50 font-semibold float-left px-5  ">
                  Show Case
                </span>
                <br />
                <div>
                  <div>
                    <span className="text-xl font-medium float-left px-5">
                      Project
                    </span>
                    <Link to="/about">
                      <span className="float-right px-2">
                        <div class="box-1">
                          <div class="btn btn-one text-center">
                            <span>About Me</span>
                          </div>
                        </div>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="bg-white mt-10  mb-10 border-solid  rounded-3xl h-[200px] w-1/4">
            <div className="px-5">
              <img src={gfonts} alt="" />
            </div>
            <span className="text-sm opacity-50 font-semibold float-left px-5  ">
              Blog
            </span>
            <br />
            <div>
              <div>
                <span className="text-xl font-medium float-left px-5">
                  GFont
                </span>
                <Link to="/about">
                  <span className="float-right px-2">
                    <div class="box-1">
                      <div class="btn btn-one text-center">
                        <span>About Me</span>
                      </div>
                    </div>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 mb-10 border-solid  rounded-3xl h-[200px] w-2/4">
            <div className="flex justify-center space-x-24 items-center mt-12">
              <img src={camera} alt="" className="h-12" />
              <img src={pen} alt="" className="h-12" />
              <img src={connection} alt="" className="h-12" />
              <img src={smartphone} alt="" className="h-12" />
            </div>
            <div className="mt-10">
              <div className="text-sm opacity-50 font-semibold float-left px-5 ">
                SPECIALIZATION
              </div>
              <br />
              <div className="text-xl font-medium float-left px-5 ">
                Services Offering
              </div>
              <div className="float-right px-5">
                <Link to="/about">
                  <span className="float-right px-2">
                    <div class="box-1">
                      <div class="btn btn-one text-center">
                        <span>About Me</span>
                      </div>
                    </div>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 mb-10 border-solid  rounded-3xl h-[200px] w-1/4">
            <div className="bg-slate-50  border-solid  rounded-3xl m-5 ">
              <div className=" bg-white">
                <img src={ball} alt="" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
