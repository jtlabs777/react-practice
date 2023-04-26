import { Inter } from "next/font/google";
import Name from "./myinfo";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [useCat, setUseCat] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());

  const handleClick = () => {
    setUseCat(true);
    setTimestamp(Date.now());
  };

  async function getCatUrl() {
    console.log("this executes");

    let url = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=full"
    )
      .then((Response) => {
        url = Response.json;
        return Response.json;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(url);
    return url;
  }

  return (
    <div className="content">
      <div className="centered">
        <Name />
      </div>

      <br />

      <button
        onClick={handleClick}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Get the cat
      </button>
      <br />
      <br />
      {useCat && <img src={`"{getCatUrl()" + '&' ${timestamp}`} />}
    </div>
  );
}
