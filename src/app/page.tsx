import Image from "next/image";
import Link from "next/link";

type Item = {
  code: string;
  item: string;
  price: string;
  description: string;
  features?: string[]; // Optional array of features
};

export default function Home() {
  const items: Item[] = [
    {
      code: "MA1",
      item: "Karuta Verification on your Discord Account",
      price: "50 INR/-",
      description: "I will verify Karuta in the discord account provided by you.",
      features: [],
    },
    {
      code: "MA2",
      item: "Sofi Verification on your Discord Account",
      price: "40 INR/-",
      description: "I will verify Sofi in the discord account provided by you.",
      features: [],
    },
    {
      code: "MA3",
      item: "Discord New Karuta Verified Account",
      price: "100 INR/-",
      description: "I will make a Discord Account and Verify Karuta in it and give it to you.",
      features: [],
    },
    {
      code: "MA4",
      item: "Discord New Sofi Verified Account",
      price: "80 INR/-",
      description: "I will make a Discord Account and Verify Sofi in it and give it to you.",
      features: [],
    },
    {
      code: "MA5",
      item: "Karuta & Sofi Verified New Account",
      price: "160 INR/-",
      description: "I will make a Discord Account and Verify Karuta & Sofi in it and give it to you.",
      features: [],
    },
    {
      code: "MA6",
      item: "Verifying both Karuta & Sofi on your Discord Account",
      price: "80 INR/-",
      description: "I will verify Karuta &  Sofi in the discord account provided by you.",
      features: [],
    },
    {
      code: "MA7",
      item: "How To Not Get Banned In Karuta + Tips to Improve your UI",
      price: "20 INR/-",
      description: "Learn tips to avoid bans in Karuta and improve your UI.",
      features: [],
    },
    {
      code: "MA8",
      item: "New Discord with Karuta & Sofi Verified + Package(MA7) Included",
      price: "170 INR/-",
      description: "A new Discord account with Karuta and Sofi verified, plus MA7 package.",
      features: [],
    },
    {
      code: "MA9",
      item: "Sofi Trick - How To Bump on multiple accounts",
      price: "70 INR/-",
      description: "Learn how to bump on multiple Sofi accounts without getting banned or quarantined.",
      features: [],
    },
    {
      code: "MA10",
      item: "Sofi Account Bump (Once a day) on 1 Account - 7 Days",
      price: "70 INR/-",
      description: "I will Bump Daily on your Sofi account in one account over 7 days.",
      features: [],
    },
    {
      code: "MA11",
      item: "Sofi Account Bump (Once a day) on 1 Account - 30 Days",
      price: "250 INR/-",
      description: "I will Bump Daily on your Sofi account in one account over 30 days.",
      features: [],
    },
    {
      code: "MA12",
      item: "Sofi Card Dropping Service - 7 Days",
      price: "60 INR/-",
      description: "Sofi card dropping service for a duration of 7 days.",
      features: [
        "Random drop message ( sd / sdrop)",
        "Random cards dropping interval ( can be changed )",
        "Different Tagging Algorithm",
        "Automatic Sleep Mode",
        "Logging System"
      ],
    },
    {
      code: "MA13",
      item: "Sofi Card Dropping Service - 30 Days",
      price: "175 INR/-",
      description: "Sofi card dropping service for a duration of 30 days.",
      features: [
        "Random drop message ( sd / sdrop)",
        "Random cards dropping interval ( can be changed )",
        "Different Tagging Algorithm",
        "Automatic Sleep Mode",
        "Logging System"
      ],
    },
    {
      code: "MA14",
      item: "Karuta Card Dropping Service - 7 Days",
      price: "60 INR/-",
      description: "Karuta card dropping service for a duration of 7 days.",
      features: [
        "Random drop message ( kd / kdrop)",
        "Random cards dropping interval ( can be changed )",
        "Automatic Sleep Mode",
        "Logging System"
      ],
    },
    {
      code: "MA15",
      item: "Karuta Card Dropping Service - 30 Days",
      price: "175 INR/-",
      description: "Karuta card dropping service for a duration of 30 days.",
      features: [
        "Random drop message ( kd / kdrop)",
        "Random cards dropping interval ( can be changed )",
        "Automatic Sleep Mode",
        "Logging System"
      ],
    },
    {
      code: "MA16",
      item: "Karuta Card Dropping Code",
      price: "350 INR/-",
      description: "Script to drop Karuta Card along with instructions on how to use it.",
      features: [
        "To Know the Advanced features, please contact me. I cannot share them here to risk the code integrity."
      ],
    },
    {
      code: "MA17",
      item: "Sofi Card Dropping Code",
      price: "400 INR/-",
      description: "Script to drop Karuta Card along with instructions on how to use it.",
      features: [
        "To Know the Advanced features, please contact me. I cannot share them here to risk the code integrity."
      ],
    },
    {
      code: "MA18",
      item: "Index Verification on your Discord Account + Trick to play",
      price: "50 INR/-",
      description: "I will verify Index in the discord account provided by you and share how you can play.",
      features: [],
    },
    {
      code: "MA19",
      item: "Mazoku Verification on your Discord Account",
      price: "40 INR/-",
      description: "I will verify Mazoku in the discord account provided by you.",
      features: [],
    },
    {
      code: "MA20",
      item: "Building & Deploying Website Like this",
      price: "500 INR/-",
      description: "Build and deploy a website similar to this one.",
      features: [],
    },
  ];

  return (
    <div className="relative bg-white">

      {/* Intro */}
      <div className="h-screen bg-gradient-to-b from-orange-600 to-orange-400 flex flex-col gap-5 items-center justify-center">
        <div className=" flex  flex-col items-center relative">
          <div className="md:text-8xl text-4xl md:font-bold font-extrabold text-white">Makima Always</div>
          <div className="md:text-3xl text-xl font-thin text-white animate-pulse">Discord: @makima_always</div>
        </div>
        <Link
          href={"https://discord.gg/KKVtgWGAEj"}
          target="_blank"
        >
          <div className="bg-white p-2 px-4 rounded-md shadow-orange-600 shadow-lg hover:scale-105 transition-all ease-in-out">
            Join Discussion Discord Server
          </div>
        </Link>
      </div>

      {/* 2nd Page */}
      <div className="h-auto bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center relative">

        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-5 p-10 w-[400px] sm:w-[600px] md:w-[1200px]">
          {items.map((item) => (
            <div key={item.code} className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-5 justify-between">
              {/* Item Title and Price */}
              <div className="bg-gradient-to-r from-orange-200 to-white p-3 rounded-lg flex justify-start items-center gap-4">
                <div className=" w-[100px] bg-orange-500 shadow-md shadow-orange-600/50 rounded-lg h-[50px] flex items-center justify-center text-white font-semibold pointer-events-none">{item.code}</div>
                <div className="border-l-2 border-orange-600 pl-4 w-[360px] text-xl antialiased text-orange-600 font-bold">{item.item}</div>

              </div>

              {/* Description */}
              <div className="bg-gradient-to-r from-orange-200 to-white p-3 rounded-lg">
                <div className="text-md underline text-orange-600 font-bold">Description</div>
                <div className="text-orange-600 text-[13px]">{item.description}</div>
              </div>

              {/* Features (if available) */}
              {item.features && item.features.length > 0 && (
                <div className="bg-gradient-to-r from-orange-200 to-white p-3 rounded-lg">
                  <div className="text-md underline text-orange-600 font-bold">Features</div>
                  <ul className="list-disc text-orange-600 pl-5 text-[13px]">
                    {item.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="text-orange-600 font-extralight text-[13px] px-2 py-1 border border-orange-600 rounded-md mt-2">
                    Some advanced features are intentionally omitted to ensure code integrity and prevent exploitation.
                  </div>
                </div>
              )}
              <div className="flex justify-center items-center gap-5">
                <div className=" w-[120px] bg-lime-500 shadow-md shadow-lime-600/50 rounded-lg h-[50px] flex items-center justify-center text-black font-semibold pointer-events-none">
                  {item.price}
                </div>
                <Link
                  href={"https://discord.gg/KKVtgWGAEj"}
                  target="_blank"
                >
                  <div className=" w-[120px] bg-orange-600 shadow-md shadow-orange-600/50 rounded-lg h-[50px] flex items-center justify-center text-white font-semibold hover:scale-110 duration-500 transition-all ease-in-out">
                    Order Now
                  </div>
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 3rd Page */}
      <div className="h-auto bg-gradient-to-b from-orange-600 to-orange-400 flex flex-col gap-5 items-center justify-center relative">
        <div className="bg-orange-500/50 shadow-md rounded-lg p-2 py-10 flex flex-col justify-center items-center gap-5 mb-10">
          <div className="text-4xl font-bold text-white ">Contact Me</div>
          <Image
            src={"/contact.png"}
            width={380}
            height={380}
            alt="Contact Me"
          />
        </div>
      </div>
    </div>
  );
}
