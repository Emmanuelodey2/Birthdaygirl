"use client"
import Image from "next/image";

const BirthdayLetter = ({
  name = "Happy birthday, Joann!",
  message = "happy birthday, Joann! I wish you the very best in life and pray that God fulfils all your heart desires.",
  image = "/assets/Dumebi.png",
  side = "🫶🏽Dumebi🫶🏽"
}) => {
  return (
    <div
      className="
      relative
      z-100
      bg-[#fffdf7]
      rounded-2xl
      shadow-2xl
      overflow-hidden

      w-[380px]
      h-[420px]

      sm:w-[420px]
      sm:h-[340px]

      md:w-[700px]
      md:h-[450px]

      p-4 sm:p-6
      flex
      flex-col
      sm:flex-row
      gap-4 sm:gap-6
    "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/assets/cake.png"
          alt="cake"
          fill
          className="object-cover"
        />
      </div>

      {/* LEFT: IMAGE */}
      <div className="relative z-10 flex items-center justify-center sm:justify-start">

        <div className="bg-white p-2 sm:p-3 pb-4 sm:pb-6 shadow-xl rotate-[-6deg]">
          <Image
            src={image}
            alt="celebrant"
            width={180}
            height={180}
            className="
              object-cover
              w-[120px]
              h-[120px]

              sm:w-[150px]
              sm:h-[150px]

              md:w-[180px]
              md:h-[180px]
            "
          />

          <p className="text-center text-[10px] sm:text-xs mt-2 text-gray-500">
            Birthday vibes 🎉
          </p>
        </div>

        {/* STAR */}
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 text-yellow-400 text-lg sm:text-2xl">
          ⭐
        </div>
      </div>

      {/* RIGHT: TEXT */}
      <div className="relative z-10 flex flex-col flex-1 min-h-0">

        {/* TITLE */}
        <h2 className="text-lg sm:text-2xl font-bold text-[#775537] leading-tight text-center sm:text-left">
          {name} 🎂
        </h2>

        {/* SCROLLABLE MESSAGE */}
        <div
          className="
            flex-1
            overflow-y-auto
            pr-2
            mt-3 sm:mt-4
          "
        >
          <p className="text-gray-600 text-xs sm:text-sm leading-6 sm:leading-7">
            {message}
          </p>
        </div>

        {/* SIGNATURE */}
        <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed w-full text-center sm:text-end">
          ~~~~{side}
        </p>

      </div>

      {/* TEDDY */}
      <div className="absolute bottom-0 left-0 sm:-left-4 w-10 sm:w-24 z-20">
        <Image
          src="/assets/teddybear.png"
          alt="teddy"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

    </div>
  );
};

export default BirthdayLetter;