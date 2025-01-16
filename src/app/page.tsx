import Image from "next/image";
import Link from "next/link";

type Item = {
  code: string;
  item: string;
  price: string;
};

export default function Home() {
  const items: Item[] = [
    { code: "MA1", item: "Karuta Verification on your Discord Account", price: "50 INR/-" },
    { code: "MA2", item: "Sofi Verification on your Discord Account", price: "40 INR/-" },
    { code: "MA3", item: "Discord New Karuta Verified Account", price: "100 INR/-" },
    { code: "MA4", item: "Discord New Sofi Verified Account", price: "80 INR/-" },
    { code: "MA5", item: "Karuta & Sofi Verified New Account", price: "160 INR/-" },
    { code: "MA6", item: "Verifying both Karuta & Sofi on your Discord Account", price: "80 INR/-" },
    { code: "MA7", item: "How To Not Get Banned In Karuta + Tips to Improve your UI", price: "20 INR/-" },
    { code: "MA8", item: "New Discord with Karuta & Sofi Verified + Package(MA7) Included", price: "170 INR/-" },
    { code: "MA9", item: "Sofi Trick - How To Bump on multiple accounts", price: "70 INR/-" },
    { code: "MA10", item: "Sofi Account Bump (Once a day) on 1 Account - 7 Days", price: "70 INR/-" },
    { code: "MA11", item: "Sofi Account Bump (Once a day) on 1 Account - 30 Days", price: "250 INR/-" },
    { code: "MA12", item: "Sofi Card Dropping Service - 7 Days", price: "60 INR/-" },
    { code: "MA13", item: "Sofi Card Dropping Service - 30 Days", price: "175 INR/-" },
    { code: "MA14", item: "Karuta Card Dropping Service - 7 Days", price: "60 INR/-" },
    { code: "MA15", item: "Karuta Card Dropping Service - 30 Days", price: "175 INR/-" },
    { code: "MA16", item: "Karuta Card Dropping Code", price: "350 INR/-" },
    { code: "MA17", item: "Sofi Card Dropping Code", price: "350 INR/-" },
  ];
  return (
    <div className="relative bg-white">

      {/* Intro */}
      <div className="h-screen bg-gradient-to-b from-black to-red-950 flex flex-col gap-5 items-center justify-center">
        <div className=" flex  flex-col items-center relative">
          <div className="md:text-8xl text-5xl md:font-bold font-extrabold text-white">Makima Always</div>
          <div className="md:text-3xl text-xl font-thin text-white animate-pulse">Discord: @makima_always</div>
        </div>
        <Link
          href={"https://discord.gg/KKVtgWGAEj"}
          target="_blank"
        >
          <div className="bg-white p-2 px-4 rounded-md shadow-red-800/50 shadow-lg hover:scale-105 transition-all ease-in-out">
            Join Discussion Discord Server
          </div>
        </Link>
      </div>

      {/* 2nd Page */}
      <div className="h-auto bg-gradient-to-b from-red-950 to-red-900 flex items-center justify-center relative">
        <div className="overflow-auto bg-white shadow-md rounded-3xl p-6 max-w-full mx-auto mb-10">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left text-red-600">Code</th>
                <th className="border border-gray-300 p-2 text-left text-purple-600">Item</th>
                <th className="border border-gray-300 p-2 text-left text-green-600">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 text-left text-red-600">{item.code}</td>
                  <td className="border border-gray-300 p-2 text-left w-[200px] sm:w-[500px] text-purple-600">
                    {item.item}
                  </td>
                  <td className="border border-gray-300 p-2 text-left font-semibold text-green-600">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3rd Page */}
      <div className="h-auto bg-gradient-to-b from-red-900 to-red-950 flex flex-col gap-5 items-center justify-center relative">
        <div className="bg-black/50 shadow-md rounded-3xl p-2 py-10 flex flex-col justify-center items-center gap-5 mb-10">
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
