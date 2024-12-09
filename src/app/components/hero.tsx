import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div>
      <div className="w-full h-[651px] flex justify-center relative">
        {/* Background Image */}
        <Image
          className="w-full h-full object-cover"
          src="/assets/heroimage1.jpeg"
          alt=""
          width={1440}
          height={651}
        />

        {/* Inner Content */}
        <div
          className="absolute top-1/2 left-4 sm:left-8 md:left-[35px] transform -translate-y-1/2 
        w-[90%] sm:w-[599px] h-auto flex flex-col gap-4"
        >
          {/* Section Title */}
          <p
            className={`${montserrat.className} text-left text-white text-[14px] sm:text-[16px]`}
          >
            SUMMER 2020
          </p>

          {/* Main Heading */}
          <h1
            className={`${montserrat.className} text-left text-white text-[36px] sm:text-[48px] md:text-[58px] font-bold`}
          >
            NEW COLLECTION
          </h1>

          {/* Subheading */}
          <p
            className={`${montserrat.className} text-left text-white text-[14px] sm:text-[16px] md:text-[20px]`}
          >
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          {/* Button */}
          <button
            className={`${montserrat.className} self-start text-white font-bold text-[16px] sm:text-[20px] md:text-[24px] 
          bg-[#2DC071] rounded-md py-2 px-4 sm:py-3 sm:px-6`}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="w-[1050px] h-[770px] mx-auto bg-[#FAFAFA]">
        {/* Heading Section */}
        <div className="w-full text-center my-8">
          <h1
            className={`${montserrat.className} text-[24px] font-bold text-[#252B42]`}
          >
            EDITOR’S PICK
          </h1>
          <p
            className={`${montserrat.className} text-[14px] font-normal text-[#252B42]`}
          >
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {/* First Image */}
          <div className="w-[240px] h-[500px] flex justify-center">
            <Image
              className="object-cover"
              src="/assets/filter.png"
              alt="Editor Pick 1"
              width={240}
              height={500}
            />
          </div>

          {/* Second Image */}
          <div className="w-[240px] h-[500px] flex justify-center">
            <Image
              className="object-cover"
              src="/assets/filter (1).png"
              alt="Editor Pick 2"
              width={240}
              height={500}
            />
          </div>

          {/* Third and Fourth Images in a Vertical Stack */}
          <div className="flex flex-col gap-6">
            <div className="w-[240px] h-[240px]">
              <Image
                className="object-cover"
                src="/assets/filter (3).png"
                alt="Editor Pick 3"
                width={240}
                height={240}
              />
            </div>
            <div className="w-[240px] h-[240px]">
              <Image
                className="object-cover"
                src="/assets/filter (2).png"
                alt="Editor Pick 4"
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-auto">
        <div className="w-full text-center my-8 ">
          <h2
            className={`${montserrat.className}text-center text-[20px] font-normal text-[#737373]`}
          >
            Featured Products
          </h2>
          <h1
            className={`${montserrat.className}text-center text-[24px] font-bold text-[#252B42]`}
          >
            BESTSELLER PRODUCTS
          </h1>
          <p
            className={`${montserrat.className}text-center text-[14px] font-normal text-[#252B42]`}
          >
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="w-[1049px] h-auto flex flex-wrap gap-4 justify-center items-center mx-auto">
          {/* Image and Description Container */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/one.png"
              alt="Image One"
              width={239}
              height={427}
            />
            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/two.png"
              alt="Image Two"
              width={239}
              height={427}
            />
            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/three.png"
              alt="Image Three"
              width={239}
              height={427}
            />

            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/four.png"
              alt="Image Four"
              width={239}
              height={427}
            />
            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/five.png"
              alt="Image Five"
              width={239}
              height={427}
            />
            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/six.png"
              alt="Image Six"
              width={239}
              height={427}
            />
            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/seven.png"
              alt="Image Seven"
              width={239}
              height={427}
            />
            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/eight.png"
              alt="Image Eight"
              width={239}
              height={427}
            />
            <div className="text-center mt-5">
              <h2 className="text-[16px] font-bold text-[#252B42]">
                Graphic Design
              </h2>
              <p
                className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}
              >
                English Department
              </p>
              <p
                className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >
                $16.48{" "}
              </p>
              <p
                className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
              >
                $6.48
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[709px] bg-[#23856D] flex justify-center items-center mt-10 relative">
        <div className="w-[1036px] h-[711px]">
          {/* Centered Slate Div Positioned at Bottom */}
          <div className="w-[1049px] h-[599px] absolute bottom-0 left-1/2 transform -translate-x-1/2 flex">
            {/* Black Div on the Left */}
            <div className="w-[509px] h-[432px] flex flex-col justify-start px-6 py-8">
              {/* SUMMER 2020 */}
              <p
                className={`${montserrat.className} text-[20px] font-normal text-[#FFFFFF] mt-0 mb-4 hover:underline`}
              >
                SUMMER 2020
              </p>

              {/* Main Product Heading */}
              <h1
                className={`${montserrat.className} text-[58px] font-bold text-[#FFFFFF] mt-0 mb-4 hover:underline`}
              >
                Vita Classic Product
              </h1>

              {/* Description Text */}
              <p
                className={`${montserrat.className} text-[14px] font-normal text-[#FFFFFF] mt-0 mb-4 hover:underline`}
              >
                We know how large objects will act, We know <br /> how are
                objects will act, We know
              </p>

              {/* Price Section with Button */}
              <div className="flex items-center justify-between mt-0">
                {/* Price */}
                <h2
                  className={`${montserrat.className} text-[24px] font-bold text-[#FFFFFF] hover:underline`}
                >
                  $16.48
                </h2>

                {/* Button */}
                <button
                  className={`${montserrat.className} w-[184px] h-[52px] rounded-lg bg-[#2DC071] 
                   mr-44 text-[14px] font-bold text-[#FFFFFF]`}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="w-[510px] h-[685px]">
              <Image
                src="/assets/shop-hero-2-png-picture-1.png"
                alt=""
                width={443}
                height={685}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[682px] flex justify-center items-center relative">
        <div className="w-[704px] h-[682px] ">
          <Image
            src="/assets/asian-woman-man-with-winter-clothes 1 (2).png"
            alt="image"
            width={725}
            height={774}
          />
        </div>
        <div className=" w-[573px] h-[326px] gap-[30] ">
          <p
            className={`${montserrat.className} text-[16px] font-bold text-[#BDBDBD] mx-20`}
          >
            SUMMER 2020
          </p>
          <h1
            className={`${montserrat.className} text-[40px] font-bold text-[#252B42] mx-20 mt-6`}
          >
            Part of the Neural Universe
          </h1>
          <p
            className={`${montserrat.className} text-[20px] font-normal text-[#737373] mx-20`}
          >
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <div className=" w-[339px] h-[52px]  mx-20 flex">
            <div className="w-[156px] h-[52px] text-center justify-center ">
              <button
                className={`${montserrat.className} mt-6 bg-[#2DC071] rounded-lg w-[156px] h-[52px]  text-[14px] font-bold text-[#FFFFFF] `}
              >
                BUY NOW
              </button>
            </div>
            <div className="w-[173px] h-[52px] mt-6">
              <p
                className={`${montserrat.className} text-[14px] font-bold text-[#2DC071] mt-4 mx-8 hover:underline`}
              >
                READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1044px] bg-green-400 my-24 flex flex-col items-center justify-center">
        <div className="w-[691px] h-[134px] bg-green-600 my-20 text-center">
          <p
            className={`${montserrat.className} text-[14px] font-bold text-[#23A6F0] hover:underline`}
          >
            Practice Advice
          </p>
          <h1
            className={`${montserrat.className} text-[40px] font-bold text-[#252B42] hover:underline`}
          >
            Featured Posts
          </h1>
          <p
            className={`${montserrat.className} text-[14px] font-normal text-[#737373] hover:underline`}
          >
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="w-[1045px] h-[606px] bg-blue-50 flex flex-row items-center justify-center gap-7">
          <div className="w-[329px] h-[606px] bg-green-600 ">
            <div className="w-[348px] h-[300px] bg-green-600 ">
              <Image
                src="/assets/unsplash_hHdHCfAifHU.png"
                alt="image"
                width={348}
                height={300}
              />
              
            </div>
            <div className="w-[348px] h-[306px] bg-green-300  flex flex-row " >
              <div className="w-[159px] h-[16px] bg-slate-400 flex justify-between m-5">
                <div className="w-[45px] h-[16px] bg-slate-500">
                  <p className={`${montserrat.className} text-[12px] font-normal text-[#8EC2F2] hover:underline`} >Google</p>
                </div>
                <div className="w-[56px] h-[16px] bg-slate-700">
                  <p className={`${montserrat.className} text-[12px] font-normal text-[#737373] hover:underline`}>Trending</p>
                </div>
                <div className="w-[28px] h-[16px] bg-slate-900" >
                  <p className={`${montserrat.className} text-[12px] font-normal text-[#737373] hover:underline`}>New</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[329px] h-[606px] bg-green-700 ">
            <div className="w-[348px] h-[300px] bg-green-600 ">
            <Image
                src="/assets/unsplash_tVEqStC2uz8.png"
                alt="image"
                width={348}
                height={300}
              />
            </div>
            <div className="w-[348px] h-[306px] bg-green-300 ">text</div>
          </div>
          <div className="w-[329px] h-[606px] bg-green-500 ">
            <div className="w-[348px] h-[300px] bg-green-600 ">
            <Image
                src="/assets/unsplash_dEGu-oCuB1Y.png"
                alt="image"
                width={348}
                height={300}
              />
            </div>
            <div className="w-[348px] h-[306px] bg-green-300 ">text</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



