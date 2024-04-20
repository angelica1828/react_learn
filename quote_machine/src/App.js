import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quoteData, setQuote] = useState(null);
  const [color1, setColor1] = useState("#ff0000");

  const fetchData = async () => {
    const res = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await res.json();
    const quotes = data.quotes;

    let randInd = Math.floor(Math.random() * quotes.length);
    setQuote({
      author: quotes[randInd].author,
      quote: quotes[randInd].quote,
    });

    const randomColor1 = getRandomColor();

    setColor1(randomColor1);
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 128); // Keep red component in the darker range
    const g = Math.floor(Math.random() * 128); // Keep green component in the darker range
    const b = Math.floor(Math.random() * 128); 
    const hex = `#${(r * 65536 + g * 256 + b).toString(16).padStart(6, '0')}`;

    return hex;
  };

  document.body.style.backgroundColor = color1;
  document.body.style.transition= "all 1s ease-in-out";

  return (
    quoteData && (
      <>
        <div id="quote-box" style={{ color: color1 }}>
          <div id="text">{quoteData.quote}</div>
          <div id="author"> - {quoteData.author.split("–")}</div>
          <div className="clickables">
            <a
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22It%E2%80%99s%20not%20the%20years%20in%20your%20life%20that%20count.%20It%E2%80%99s%20the%20life%20in%20your%20years.%22%20Abraham%20Lincoln"
              id="tweet-quote"
              className="button"
              style={{ backgroundColor: color1, transition: "all 1s ease-in-out" }}
            >
              Button here
            </a>
            <button
              onClick={fetchData}
              id="new-quote"
              style={{ backgroundColor: color1, transition: "all 1s ease-in-out" }}
            >
              New Quote?
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default App;
