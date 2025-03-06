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
    { code: "MA16", item: "Karuta Card Dropper Code", price: "350 INR/-" },
    { code: "MA17", item: "Sofi Card Dropper Code", price: "400 INR/-" },
    { code: "MA18", item: "Index Verification on your Discord Account + Trick to play", price: "50 INR/-" },
    { code: "MA19", item: "Mazoku Verification on your Discord Account + Trick to play", price: "80 INR/-" },
    { code: "MA20", item: "Building & Deploying Website Like this", price: "500 INR/-" },
    { code: "MA21", item: "Karuta Auto Visit", price: "300 INR/-" },
    { code: "MA22", item: "Mazoku Dropper Code", price: "3500 INR/-" },
    { code: "MA23", item: "Mazoku Card Snipper", price: "10000 INR/-" },
    { code: "MA24", item: "Mazoku Card Dropping Service - 7 Days", price: "600 INR/-" },
    { code: "MA25", item: "Mazoku Card Dropping Service - 30 Days", price: "2250 INR/-" },
    { code: "MA26", item: "Mazoku Card Snipping Service - 7 Days", price: "1800 INR/-" },
    { code: "MA27", item: "Mazoku Card Snipping Service - 30 Days", price: "7000 INR/-" },
    { code: "MA28", item: "TopGG Voting Extension for Browsers", price: "2500 INR/-" },
  ];


  return (
    <div className="relative bg-white">

      {/* Intro */}
      <div className="h-screen bg-gradient-to-b from-orange-600 to-orange-400 flex flex-col gap-5 items-center justify-center">
        <div className=" flex  flex-col items-center relative">
          <div className="md:text-8xl text-4xl text-center md:font-bold font-extrabold text-white">Makima Always</div>
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
      <div className="h-auto bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center p-10">
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-3 text-left">CODE</th>
                <th className="p-3 text-left">ITEM</th>
                <th className="p-3 text-right">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.code} className="border-b border-orange-300">
                  <td className="p-3 text-red-500 font-semibold">{item.code}</td>
                  <td className="p-3 text-blue-500 font-semibold ">{item.item}</td>
                  <td className="p-3 text-green-500 font-semibold text-right flex justify-end gap-2">
                    <span>{parseInt(item.price)}</span>
                    <span>INR/-</span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3rd Page */}
      <div className="h-screen bg-gradient-to-b from-orange-600 to-orange-400 flex flex-col gap-5 items-center justify-center">
        <div className=" flex  flex-col items-center relative">
          <div className="md:text-8xl text-2xl text-center font-thin animate-bounce text-white">Contact me for more information!</div>
          <div className="md:text-8xl text-2xl text-center font-extrabold text-white">Discord: @makima_always</div>
        </div>
        
      </div>
    </div>
  );
}
