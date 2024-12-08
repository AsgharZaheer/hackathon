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
      <div className="w-[1440px] h-[1652px]">
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
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
              <h2 className="text-[16px] font-bold text-[#252B42]">Graphic Design</h2>
              <p className={`${montserrat.className} mt-2 text-[14px] font-bold text-[#737373]`}>
              English Department
              </p>
              <p className={`${montserrat.className} text-[16px] text-[#BDBDBD] hover:underline`}
              >$16.48 </p>
              <p className={`${montserrat.className} text-[16px]font-bold  text-[#23856D] hover:underline`}
               >$6.48</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import Image from "next/image";
// import React from "react";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({ subsets: ["latin"] });

// const Hero = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="w-full h-[651px] flex justify-center relative">
//         {/* Background Image */}
//         <Image
//           className="w-full h-full object-cover"
//           src="/assets/heroimage1.jpeg"
//           alt="Hero Background"
//           width={1440}
//           height={651}
//           priority
//         />
//         {/* Inner Content */}
//         <div
//           className="absolute top-1/2 left-4 sm:left-8 md:left-[35px] transform -translate-y-1/2 
//           w-[90%] sm:w-[599px] h-auto flex flex-col gap-4"
//         >
//           {/* Section Title */}
//           <p
//             className={`${montserrat.className} text-left text-white text-[14px] sm:text-[16px]`}
//           >
//             SUMMER 2020
//           </p>
//           {/* Main Heading */}
//           <h1
//             className={`${montserrat.className} text-left text-white text-[36px] sm:text-[48px] md:text-[58px] font-bold`}
//           >
//             NEW COLLECTION
//           </h1>
//           {/* Subheading */}
//           <p
//             className={`${montserrat.className} text-left text-white text-[14px] sm:text-[16px] md:text-[20px]`}
//           >
//             We know how large objects will act,
//             <br />
//             but things on a small scale.
//           </p>
//           {/* Button */}
//           <button
//             className={`${montserrat.className} self-start text-white font-bold text-[16px] sm:text-[20px] md:text-[24px] 
//             bg-[#2DC071] rounded-md py-2 px-4 sm:py-3 sm:px-6`}
//           >
//             SHOP NOW
//           </button>
//         </div>
//       </div>

//       {/* Editor's Pick Section */}
//       <div className="w-full py-8 bg-[#FAFAFA]">
//         <div className="w-[90%] md:w-[1050px] mx-auto">
//           {/* Heading */}
//           <div className="text-center my-8">
//             <h1
//               className={`${montserrat.className} text-[24px] font-bold text-[#252B42]`}
//             >
//               EDITOR’S PICK
//             </h1>
//             <p
//               className={`${montserrat.className} text-[14px] font-normal text-[#252B42]`}
//             >
//               Problems trying to resolve the conflict between
//             </p>
//           </div>
//           {/* Image Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {["one", "two", "three", "four", "five", "six", "seven", "eight"].map(
//               (name, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg"
//                 >
//                   <Image
//                     src={`/assets/${name}.png`}
//                     alt={`Editor Pick ${index + 1}`}
//                     width={240}
//                     height={427}
//                     className="object-cover rounded-md"
//                   />
//                   <div className="text-center mt-4">
//                     <h2 className="text-[16px] font-bold text-[#252B42]">
//                       Graphic Design
//                     </h2>
//                     <p
//                       className={`${montserrat.className} mt-2 text-[14px] font-normal text-[#737373]`}
//                     >
//                       English Department
//                     </p>
//                     <p
//                       className={`${montserrat.className} text-[16px] text-[#BDBDBD] line-through`}
//                     >
//                       $16.48
//                     </p>
//                     <p
//                       className={`${montserrat.className} text-[16px] font-bold text-[#23856D]`}
//                     >
//                       $6.48
//                     </p>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Bestseller Products Section */}
//       <div className="w-full py-8 bg-[#FFFFFF]">
//         <div className="w-[90%] md:w-[1050px] mx-auto">
//           {/* Heading */}
//           <div className="text-center my-8">
//             <h2
//               className={`${montserrat.className} text-[20px] font-normal text-[#737373]`}
//             >
//               Featured Products
//             </h2>
//             <h1
//               className={`${montserrat.className} text-[24px] font-bold text-[#252B42]`}
//             >
//               BESTSELLER PRODUCTS
//             </h1>
//             <p
//               className={`${montserrat.className} text-[14px] font-normal text-[#252B42]`}
//             >
//               Problems trying to resolve the conflict between
//             </p>
//           </div>
//           {/* Image Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {["one", "two", "three", "four", "five", "six", "seven", "eight"].map(
//               (name, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg"
//                 >
//                   <Image
//                     src={`/assets/${name}.png`}
//                     alt={`Bestseller Product ${index + 1}`}
//                     width={239}
//                     height={427}
//                     className="object-cover rounded-md"
//                   />
//                   <div className="text-center mt-4">
//                     <h2 className="text-[16px] font-bold text-[#252B42]">
//                       Graphic Design
//                     </h2>
//                     <p
//                       className={`${montserrat.className} mt-2 text-[14px] font-normal text-[#737373]`}
//                     >
//                       English Department
//                     </p>
//                     <p
//                       className={`${montserrat.className} text-[16px] text-[#BDBDBD] line-through`}
//                     >
//                       $16.48
//                     </p>
//                     <p
//                       className={`${montserrat.className} text-[16px] font-bold text-[#23856D]`}
//                     >
//                       $6.48
//                     </p>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
