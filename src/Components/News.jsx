import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-04-17&sortBy=publishedAt&apiKey=c60c605a1c8d462482c00876da559398"
    )
      .then((res) => res.json())
      .then((pop) => setNews(pop.articles));
  }, []);
  return (
    <>
      <hr />
      <h3 className="text-center text-4xl py-10 text-indigo-600">
        News API Integration
      </h3>

      <div class="flex flex-wrap w-11/12 mx-auto -m-4">
        {news.map((elem) => {
          return (
            <>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={elem.urlToImage}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {elem.author}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-purple-500 mb-3">
                      {elem.title}
                    </h1>
                    <p class="leading-relaxed mb-3">{elem.description}</p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        target="_blank"
                        href={elem.url}
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Read More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
