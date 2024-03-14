import { useEffect, useState } from "react";
export default function Quote() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full p-4">
        <div className="text-white text-lg text-center w-full font-mono overflow-hidden">
          {quote.content}
        </div>
        <div className="text-white text-md text-end mt-2 w-full font-serif mr-10">
          -{quote.author}
        </div>
      </div>
    </>
  );
}
