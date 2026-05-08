

  "use client";

import { useState } from "react";
import Letter from "@/components/Letter";

export default function Home() {
  const [enteredPin, setEnteredPin] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const correctPin = "2105"; // CHANGE THIS
  const lettersData = [
    {
      name: "Happy 21st Birthday! 🎂✨",
      message:
        `

Turning 21 is such a big milestone. 21 years of growth, lessons, laughter, and becoming the amazing person you are today. Watching you grow has been such a beautiful experience, and I’m truly grateful to call you my sister. It’s the beginning of another new chapter of your life. As you step into this phase of your life, I hope you continue to believe in yourself, chase your dreams, and never be afraid to stand up for what you want.

As you celebrate today, I hope your heart is filled with joy and your future with endless possibilities. Keep shining and never stop being you.

`,
      image: "/assets/siblings.png",
      side: `🌼 With all love,
Your sibs😍🌼`,
    },

    {
      name: "Joann my love 💖",
      message:
        `
Happy birthdayyyy my sweet friend. You're 21!!!!!!!
Like you're an adult frfr😭🫶🏽. 
I hope you feel celebrated and loved today, because you are loved. 
We both know that I wont write plenty cringe stuff because im a gangster but I really want you to know that I appreciate everything you do for me, from the little things like keeping sit for me in class or following me to buy food when you're already in your Pajamas to the big things like listening when im rambling about an issue ive probably spoken about 25 times or the fact you choose to be friends with me even after my serious lack of communication skills lmao. Im just grateful to God for you like anytime I think of something you are literally the first person I want to tell. You're an amazing person and I love that youre overly emotional like sometimes its actually funny to me but it kind of reminds me that im human and its okay to be vulnerable at times. I've started writing epistle omo you sha get everything im trying to say. Dont change yourself because of anything because there are people out there (me) that love you the way you are. 
HAPPY BIRTHDAY BABY♥️

`,
      image: "/assets/shola.png",
      side: "🫶🏽 Little Miss Drama Queen 🫶🏽",
    },

    {
      name: "For Your Heart 💗",
      message:
        `Hey Joanna,
Bro I can't believe you're 21 so old wtf. Like I remember meeting 15-year old you and
giving you attitude in that stupid lagoon bookstore😭. It feels like just yesterday we were
wild and free in high school doing nonsense and now you're out here becoming a whole
future doctor? I'm actually so proud of you, it's insane.
Seven years of friendship is no joke. We literally grew up together in so many ways, and
even though life pulled us in different directions, you've never stopped being one of my
favorite people. The kind of friend where even after years, it just clicks again like no time
passed. I've missed you so much and not just in a "we should catch up" way, but in a real way. The
random conversations, the laughs, the gossips 🤣 , the comfort of just knowing you were
there. You've always been caring and smart I know your future patients are going to LOVE
you.
Turning 21 is such a big moment. It's like the start of a whole new era, and I just hope this
year brings you everything you've been working for and more. 
Happiness, peace, success, and those little moments that make everything feel worth it.
Sha do fast and marry abeg. No matter how much time passes, I'll always be rooting for you, always.
Happy 21st birthday, my lovely Joanna. I hope your day is as amazing as you are. I miss you
so so much.
With so much love,
`,
      image: "/assets/Naomi.png",
      side: "🎀 Naomi 🎀",
    },

    {
      name: "Happy Birthday Pretty Soul 🌻",
      message:
        `
Hey, Joanne,
 Emmanuel made me write this. It might suck, but imma do it anyway, and I hope you like it.
It's been 5 years since we first met, online. Never in person, but that didn't stop us.
You weren't one for meeting new people, and neither was I, but you grew on me, just as I grew on you. I'm happy that happened.
I'm glad I got to know you, I'm glad I got to know you're story—your sadness,your shyness,your struggles,troubles, happiness, joys and gladness.
I'm honoured you chose to have me in your life and share it's parts with me.
And even more so, to share in your 21st.
I’m glad I have front row seats to the person you're becoming and to the person who's beginning this new chapter.
So, I pray that this new chapter brings you a peace that far outweighs any struggle you've faced, a happiness that is never trampled and the best sleep or naps that your beds have to offer.
Here's to more life, greater prosperity and a longer friendship 
Happy 21st Birthday, Nicole!
`,
      image: "/assets/Etom.png",
      side: "💐 With great love, Etom 💐",
    },


    {
      name: "Happy birthday, Joann! 🎂",
      message:
        "happy birthday, Joann! I wish you the very best in life and pray that God fulfils all your heart desires. May your happiness never fade and may every new day bring you peace, laughter, and beautiful memories. me loves you 🫶🏽",
      image: "/assets/Dumebi.png",
      side: "🫶🏽 Dumebi 🫶🏽",
    },

    {
      name: "Happy birthday my darling baby girl,🌻",
      message:
        " I hope you have an amazing day. Words can’t explain how grateful I am to God for having you in my life, I thank God every single day for the way you love, for the way you try, for the way you are — not striving for perfection but to be the realest, softest, and strongest girl i've ever known. you move through life with a heart that feels everything so deeply, and even in your storms, you manage to find a way back to love me with grace. I pray that the almighty God grants you your heart desires and I pray that you have the most beautiful day. You’re so smart, so beautiful, and just… everything good in one person. Being around you is always comforting, and I don’t think I ever tell you enough how much I appreciate that. You have this way of making things feel lighter, and I admire you more than you probably know. On your birthday, I just want to wish you happiness, peace, success, and everything your heart desires. You deserve the absolute best in life, and I pray this new year brings you closer to all your dreams. Enjoy your day, and never forget how loved and appreciated you are. Happy birthday once again, I love you soo soo much❤️",

      image: "/assets/IDANES.png",
      side: "❤️IDANES!!!❤️",
    },

    {
      name: "To Joanne!💕",
      message:
        "Happy Birthday, Joanne🥹🎂🎉 I just want to remind you of how special you are and how grateful I am to have you in my life. You are honestly one of the most organized and beautiful souls I know. Watching you as an MBBS student inspires me so much. Your brilliance, dedication, and strength never goes unnoticed. I know the journey isn’t always easy, and there may be days when everything feels overwhelming, but I need you to remember that you were made for this and you are going to make such an amazing doctor not just because you’re intelligent, but because you have the kind of heart that truly cares for people. I also want you to know that I love you and I believe in you more than words can fully express. Please don’t give up, no matter how tough things get. Keep holding on to God even on the difficult days. I pray this new age brings so many beautiful things your way. I wish you success, happiness, peace, answered prayers, and all the blessings you deserve. Keep shining, keep growing, and keep becoming the incredible woman you were created to be. Happy Birthday once again, future doctor. The world is going to be so lucky to have you.",
      image: "/assets/joanne2.png",
      side: "🌼 From someone who cares 🌼",
    },

    {
      name: "A Little Birthday Note 💌",
      message:
        ` """Hi you!
honestly can’t believe you’ve officially hit the big 2-1. It feels like just yesterday we were going to ptcf to read and you'd wake up at 4 to go for class, Chai, now you're something else entirely 
You’re kind, caring, the friend that's on speed dial and you're so much stronger than you give yourself credit for.

I hope this year brings you all the success you’ve been working so hard for, plenty of spontaneous adventures asin more going out(PLEASE), and maybe a little less stress than last year.
  
Praying for more money, more shein orders hehe, more grace and favors for you! I also pray that I will be with you to keep celebrating each year for many years....love you queen.


"""`,

      image: "/assets/ykknowwho.png",
      side: "✨ From yk who ✨",
    },

    {
      name: "For Joanne 🎈",
      message:
        `Happy birthday!
I hope today brings you good food, lots of laughs, and the perfect excuse to do whatever you want without feeling guilty.
You make life more fun just by being yourself. I’m really glad we get to share random conversations, inside jokes, and all those little moments that somehow end up becoming good memories.
You’re the kind of person people enjoy being around easy to talk to, fun to be with, and always bringing good energy. That’s something worth celebrating. I hope this year brings you new adventures, great opportunities, and plenty of moments that make you smile. May it be full of good surprises, memorable days, and more reasons to laugh.
Have the best birthday, enjoy every bit of it, and don’t forget to save me a piece of cake.

Teejay`,
      image: "/assets/joanneBirthday1.png",
      side: "🎀 With love TeeJay 🎀",
    },

    {
      name: "Another Year Older 🎉",
      message:
        `To a soul so gentle, loving, and rare,
To a heart so pure and beautiful,
To a God-fearing queen…
Happy birthday, my darling Joanne.

We may not have known for so long, but in the little time I’ve had the privilege of knowing you, I can confidently say you are truly special. You’re one of those rare people who leave an impact without even trying.

You are such a beautiful person, not just in the way you look, but in the way you love, the way you care, and the way you show up for people. You don’t even realize how much light you carry, how much comfort you give, and how deeply you impact those around you.

Happy birthday, my doctor!!🥹
All your struggles, your tears, your sleepless nights, and your hard work toward this degree will never be in vain. Everything will come together beautifully for you.

I love you so, so much, Joanne.
May this new year be gentle with you.
May it bring you peace when you need it, joy that overflows, and prayers that are answered in ways even bigger than you imagined.

God bless you always.
You deserve everything good this life has to offer.
`,
      image: "/assets/Damiane.png",
      side: "💕 With All Love, Damiane 💕 ",
    },

    {
      name: "Birthday Blessings 🌸",
      message:
        `I wouldn't have ever believed if I was told I'd be this close to you...I'd say Joann is a sweet and understanding friend one who would ALWAYS try to be there, be happy with you when you are even though she has her time of course everyone do, she'll always try to be there for you even at her lowest all I have to say is that every one deserves a joann but not MY Joann...
`,
      image: "/assets/testimony.png",
      side: "🌷 Testimony 💕 🌷",
    },

    {
      name: "Your Special Day 🎂",
      message:
        `Happy Birthday Jojo 
You are such a wonderful , beautiful, and loving person, inside and out. I’m really grateful I got to spend my first year with you as my roommate. You didn’t just feel like a roommate, you became a really special friend I cherish so much . I pray this new year brings you happiness, peace, and all the good things you deserve. I can’t wait to see you become an AMAZING doctor. Love you alwaysss
`,
      image: "/assets/lipton.png",
      side: "🌟 ~Lipton~ 🌟",
    },

    {
      name: "A Wonderful Friend 💛",
      message:
        `Happy birthday Joann💕


   Happy birthday to the girl who cares so deeply and notices the smallest of things and I mean the smallest things even the way your tone changes as you reply to what she says, she’s notices the details most people miss and even though she tries to act tough she’s really a big softie!💕 when I wasn’t doing so well, I shut everything out and was quietly falling apart, you noticed and I didn’t I even say a word you kept asking are you okay Sammy?, You stayed. You reminded me I wasn’t alone. You care so much for others that they can’t even keep up most people can’t even reciprocate that kind of love that’s how kind you are, please Joann don’t you ever ruin your beautiful soul to try to fit into this cruel world. The world is softer because you’re in it don’t let anyone take that side away from you. I’m rooting for you and I pray and believe you’ll achieve everything you wish for!!!. I see you, we all see you and I hope and pray I get to show up for you forever!!! Love you Joann❤️ 
   All my love always
`,
      image: "/assets/joanneBirthday1.png",
      side: "  🫶🏾  sammy  🫶🏾",
    },


    {
      name: "Happy Birthday Joanne 🥳❤️",
      message:
       `
Long life and prosperity 🎊
It’s so funny thinking back to when we first met in SS1, I genuinely thought you were this sassy girl more like rude sha😂 but getting to know you showed me a completely different side… one of the funniest, warmest, and one of the realest  people I know.
I hope this new year brings you everything good: happiness, success, peace, and all the amazing things you deserve. 
I miss you and I love you 🫶🏾
Enjoy your day, my love. You deserve it all ✨
`,
      image: "/assets/joanne2.png",
      side: "⭐ Always ⭐",
    },


    {
      name: "Hey Dummy 🎈",
      message:
        "Happy Birthday to the best girl in the world. You're such a darling and I ove you soo sooo much. Have a really good day. You've been there for me in sooo many timesss and as mush as ive oushed you away, i really appreciate knowing you're there when i need you. I owe you a bar of the best chocolate in tne world (snikers).",
      image: "/assets/joanneBirthday1.png",
      side: "🫶🏽 Me loves you  ~~~Ope 🫶🏽",
    },

    {
      name: "Golden Soul ✨",
      message:
        `It is a privilege to share in your joy on the day God gave you to your parents and to the world.
I have heard a lot about you from Emmanuel and we appreciate the good influence your platonic friendship has on him and sincerely hope this effect is mutual. We pray for continuous God's guidance, long life and prosperity both for you and all your loved ones.
Have a memorable birthday anniversary and a wonderful year ahead.`,

      image: "/assets/Dumebi.png",
      side: "🌟 Shine always ~~Odey's Family🌟",
    },

    {
      name: "To Someone Precious 🌷",
      message:
        "Hiiii joannneeee Happy birthday sweet girll💕💕Hope you have a blessed and beautiful day ",
      image: "/assets/joanne3.png",
      side: "💋 Muahhh 💋 ~~~Laura",
    },

    {
      name: "Another Memory 📸",
      message:
        `Dear Joanne,
Happy birthday to a special girl on her special day. I know it’s been a long while since we communicated, but I want to tell you that you always have a special place in my heart. You are truly one of the greatest friends I have. I don’t know if you know this but, I had always admired you and you were always like an older sister figure to me. When we were going to school together I always felt secure around you and I was happy that I had someone to look up to from time to time. I had moments when I felt small in the past but  I don’t know how you did it, but sometimes you just gave me a rush of confidence. I know we had our ups and downs and I know some of the things I’m saying you may not remember or even realize that these events happened. But all I want to say is that you have truly been a person with a special place through the beginning of my life’s journey. 

When I got the notice to write a birthday letter to you I was honestly stumped at first, but I stopped to think “who is Joanne from my memory” - cheerful, loving, cool, kind and definitely funny person, although she has her moments (she’ s insulting one senior, reverend sister or one setmate because of something and makes it so dramatic) I know she’s still reliable. I was asked to pour my heart out and I hope I did. Happy birthday once again and I wish you happiness and wealth above all - good health as well, and let your dreams and desires come true. Enjoy your day and just remember that there’s at least 1 person out there across the oceans that thinks you are special and deserve to be loved and celebrated.

Bye- bye.
`,
      image: "/assets/Maryanne.png",
      side: "💛 Your friend Mary-Anne. 💛",
    },

    {
      name: "Special Wishes 🎂",
      message:
       `Happy birthday to an amazing girl, a soul so rare, a friend beyond compare, her name Joanna❤️😂.
You've been a great person to me and I've learnt a lot from you mostly good things 😅. I'm grateful for a friendship I'll cherish forever and on your special day I wish you happiness in all you do and may your dreams come true.
Love ya. `,
      image: "/assets/joanne4.png",
      side: "🎉 Efe 🎉",
    },

    {
      name: "A Gentle Wish 🌸",
      message:
        `Jo babyy,
chim where do I start?😂
Us meeting was by chance, a very funny coincidence although we already knew each other from afar. Seeing you that day was like oya nauuu atleast I have someone doing IT with me so I won’t die here (cause I would have literally died in that place if I was alone😭). During IT we spent so much time together , we laughed, gisted and over time I softened up to you and yk started speaking freely and genuinely a lot happened that period and I was happyyy, genuinely happy we did IT together, I didn’t even realize when it happened but I’m glad it did. 
You’re an amazing person Joanne, a beautiful person on the inside and most definitely on the outside and a very real person too (I remember when you met me in ICT tiolet like ibukun what’s going on?this isn’t what you said oh😂 but I’m glad you’re one, it’s very refreshing)
I love spending time with you, even though it’s not often even when you came to stay w me on my birthday I was like awww she loves me too😭 sha I love you a lot babygirl, you deserve everything good God plants on this earth and so much more !
I pray God blesses you abundantly, I pray he rewards every single thing you put effort in, I pray you will never know sorrow or sadness or pain and in all areas of life shall you prosper! and I can’t wait for us to become Doctors !
Girll I love you and HAPPY BIRTHDAY Jo baby❤️🎂`,
      image: "/assets/ibukun.png",
      side: "🌼 Ibukun 🌼",
    },

    {
      name: "Last Letter 💌",
      message:
        `Heyyy Joanne (Bread Butter and Tea), Emmanuel here. Saved my letter for last, you know… leave the best for last, I guess.

Where do I start from? I don’t even know where. We started talking in early 2022 during our final years in secondary school. We would talk for hours about school, one drama after another, and then the stress from school too. Really wonderful times back then.

Who would have thought that from my best friend sharing my picture on a group chat, if I remember correctly, and telling her friends to message me, that I would get one of the most important people in my life? I would have said that’s a lie, because it’s such a silly way to find someone as special as you, but I guess that’s just how life works.

That same year, we shared a lot of laughter, cries, and pain. Towards the end of the year, I thought I had lost someone who meant a lot to me, but who knew that we were going to come back stronger?

Fast forward to 2023, when we started talking again like we used to, and since then, I can say I have been very happy. I’ve come confused and sad, and I’ve left laughing and smiling, because that’s just who you are.

You are kind, loving, cheerful, funny, caring, intelligent, strong, beautiful, and let’s not forget stubborn too. Really, the list could go on to describe who you are as a person, and to be fair, I highly doubt words alone could fully capture how I see you and who you are, but I guess the best words are meant to be used.

Thank you so much for being in my life. I seriously don’t know where I’d be without you, as you have helped me more times than I can count. With your stories, your “for the plot,” and so on, you’ve given me a lot to look forward to.

And with all this, it makes me wonder if you really need physical presence to feel loved, and I can clearly say and refute that, because we have never once met in person or seen eye to eye, and look at how much you have impacted my life, how much you have made me strive to be a better person, someone worthy of the love and care they deserve.

I hope and pray that we remain friends forever. I love you dearly, and I hope I have shown it to you, and if not, I’ll strive even more to show it so you know and feel it too.

Remember, I’m always here for you, even if no one else is. Here to listen to your rants, see you achieve your goals, and watch you do your shenanigans as you always do.

Anywhere you are, remember that I’ll always be cheering you on, no matter where life takes us.

Once again, I love you, and thanks for coming into my life. You’ve added to the reasons why my life is worth living.

Have a blessed day, and I hope the day is as beautiful as you are. All joy, rainbows, sunshine, and peace.
`,
      image: "/assets/Emmanuel.png",
      side: "❤️ Love you ❤️",
    },
  ];

  const handleNumberClick = (num: string) => {
    if (enteredPin.length >= 4) return;

    const newPin = enteredPin + num;
    setEnteredPin(newPin);

    if (newPin.length === 4) {
      setTimeout(() => {
        if (newPin === correctPin) {
          setIsUnlocked(true);
        } else {
          setEnteredPin("");
        }
      }, 300);
    }
  };

  const handleDelete = () => {
    setEnteredPin((prev) => prev.slice(0, -1));
  };

  // LOCK SCREEN
  if (!isUnlocked) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-[#0f172a] relative flex items-center justify-center">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
        </div>

        {/* CARD */}
        <div
          className="
            relative z-10
            w-[92%]
            max-w-[400px]
            rounded-[32px]
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            p-6 sm:p-8
          "
        >

          {/* TITLE */}
          <div className="text-center">
            <p className="text-white/60 tracking-[0.4em] uppercase text-[10px] sm:text-xs">
              Private Access
            </p>

            <h1 className="text-white font-bold text-3xl sm:text-4xl mt-3">
              21 Letters 💌
            </h1>

            <p className="text-white/70 text-sm sm:text-base mt-3 leading-relaxed">
              Enter the secret pin to unlock Joanne’s birthday letters.
            </p>
          </div>

          {/* PIN DOTS */}
          <div className="flex justify-center gap-4 mt-8 mb-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`
                  w-4 h-4 rounded-full transition-all duration-300
                  ${
                    enteredPin[i]
                      ? "bg-white scale-110"
                      : "bg-white/20"
                  }
                `}
              />
            ))}
          </div>

          {/* DIAL PAD */}
          <div className="grid grid-cols-3 gap-4">

            {[1,2,3,4,5,6,7,8,9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="
                  h-16 rounded-2xl
                  bg-white/10
                  border border-white/10
                  text-white text-xl font-semibold
                  active:scale-95
                  transition-all duration-200
                  hover:bg-white/20
                "
              >
                {num}
              </button>
            ))}

            {/* EMPTY */}
            <div />

            {/* 0 */}
            <button
              onClick={() => handleNumberClick("0")}
              className="
                h-16 rounded-2xl
                bg-white/10
                border border-white/10
                text-white text-xl font-semibold
                active:scale-95
                transition-all duration-200
                hover:bg-white/20
              "
            >
              0
            </button>

            {/* DELETE */}
            <button
              onClick={handleDelete}
              className="
                h-16 rounded-2xl
                bg-red-500/20
                border border-red-300/20
                text-white text-sm font-medium
                active:scale-95
                transition-all duration-200
              "
            >
              Delete
            </button>

          </div>

          {/* HINT */}
          <p className="text-center text-white/40 text-xs mt-6">
            Only the right person gets in ✨
          </p>

        </div>
      </div>
    );
  }

  // MAIN WEBSITE
  return (
    <div className="w-screen h-screen bg-blue-500 overflow-hidden relative">

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full z-50 flex flex-col items-center pt-6 sm:pt-8 md:pt-10 pointer-events-none">

        <p
          className="
            text-white/70
            tracking-[0.4em]
            uppercase
            text-[10px]
            sm:text-xs
            md:text-sm
          "
        >
          a special collection
        </p>

        <h1
          className="
            text-white
            text-center
            font-bold
            leading-tight
            drop-shadow-2xl
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          21 Letters
        </h1>

        <p
          className="
            text-white/90
            text-center
            mt-2
            font-light
            text-sm
            sm:text-lg
            md:text-xl
          "
        >
          on your 21st birthday ✨
        </p>
      </div>

      {/* HORIZONTAL LETTERS */}
      <div
        className="
          w-screen
          h-screen
          overflow-x-auto
          overflow-y-hidden
          no-scrollbar
          snap-x
          snap-mandatory
          touch-pan-x
          flex
          items-center
        "
      >

        {/* LEFT SPACER */}
        <div className="flex-shrink-0 w-[calc(50vw-128px)]" />

        {/* LETTER ROW */}
        <div className="flex gap-24 min-w-max items-center relative z-10 pt-24 sm:pt-28 md:pt-32">

          {lettersData.map((i, index) => (
            <div
              key={index}
              className="
                relative
                hover:z-[999]
                z-[100]
                hover:scale-105
                transition-transform duration-500
                snap-center
              "
            >

              <Letter
                name={i.name}
                message={i.message}
                image={i.image}
                side={i.side}
              />

              {/* NUMBER */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">

                <p
                  className="
                    text-white
                    font-bold
                    tracking-widest
                    text-sm
                    sm:text-base
                    md:text-lg
                  "
                >
                  Letter {index + 1}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SPACER */}
        <div className="flex-shrink-0 w-[calc(50vw-128px)]" />

      </div>
    </div>
  );
}
