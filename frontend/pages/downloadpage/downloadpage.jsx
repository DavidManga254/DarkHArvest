import { useLocation } from "react-router-dom";
import * as React from 'react';
import { AnimeList } from "../../components/animelist/list.jsx";
import { useState } from "react";
//download page
export function DownloadPage(){
    //location
    const location =useLocation();

    const [downloadOption, setDownloadOption] = useState("");
    const [rangeFrom, setRangeFrom] = useState("");
    const [rangeTo, setRangeTo] = useState("");

    const handleDownloadOptionChange = (event) => {
        setDownloadOption(event.target.value);
    };

    const handleRangeFromChange = (event) => {
        setRangeFrom(event.target.value);
    };

    const handleRangeToChange = (event) => {
        setRangeTo(event.target.value);
    };

    const handleSubmit =async (event) => {
        event.preventDefault();
        console.log("Download Option:", downloadOption);
        if (downloadOption === "range") {
        console.log("Range From:", rangeFrom);
        console.log("Range To:", rangeTo);
        }
        if(downloadOption==='all'){
            await window.connect.downloadAnime({
                start:1,
                stop:undefined,
                first:data.episode,
                name:data.name
            });
        }else if(downloadOption ==='range'){
            await window.connect.downloadAnime({
                start:parseInt(rangeFrom),
                stop:parseInt(rangeTo),
                first:data.episode,
                name:data.name
            });
        }
    };

    const data = location.state;
    /*const data = {
        "name": "Shingeki no Kyojin Season 2",
        "cover": "https://i.animepahe.ru/posters/fcee7e31e981d4765691ebace28a16e4eb8b4834dc179b71575cc7bae54de9db.th.jpg",
        "episode": "https://animepahe.ru/play/52ee23a8-c361-22a1-bbe0-9443e8268056/2124a176658f503ff4d3be693b2b6209395ab1f5af2890454370401d89abfbda",
        "story": "For centuries, humanity has been hunted by giant, mysterious predators known as the Titans. Three mighty walls—Wall Maria, Rose, and Sheena—provided peace and protection for humanity for over a hundred years. That peace, however, was shattered when the Colossal Titan and Armored Titan appeared and destroyed the outermost wall, Wall Maria. Forced to retreat behind Wall Rose, humanity waited with bated breath for the Titans to reappear and destroy their safe haven once more.In Shingeki no Kyojin Season 2, Eren Yeager and others of the 104th Training Corps have just begun to become full members of the Survey Corps. As they ready themselves to face the Titans once again, their preparations are interrupted by the invasion of Wall Rose—but all is not as it seems as more mysteries are unraveled. As the Survey Corps races to save the wall, they uncover more about the invading Titans and the dark secrets of their own members.",
        "related": [
            {
                "name": "Koutetsujou no Kabaneri",
                "cover": "https://i.animepahe.ru/posters/3c01c83a35626201293b677d166226fcef7e13b00b875991907f1a54aebad626.th.jpg",
                "link": "https://animepahe.ru/anime/413db32e-cde9-2f30-ee58-cf270dc06fc7"
            },
            {
                "name": "Owari no Seraph: Nagoya Kessen-hen",
                "cover": "https://i.animepahe.ru/posters/ebb30f4f4b171e51c85c543ebbde1b9d2f687bbb862dfecfe16730e3f19e0942.th.jpg",
                "link": "https://animepahe.ru/anime/9de5fc2e-1366-9e39-cb0e-03cc088ba909"
            },
            {
                "name": "God Eater",
                "cover": "https://i.animepahe.ru/posters/355a031dc37535764a134f437a84a60e86c81b2caa6984aa94a2b5cf7b60d205.th.jpg",
                "link": "https://animepahe.ru/anime/6922d98c-c46e-ccd5-a358-d225440410bf"
            },
            {
                "name": "Black Bullet",
                "cover": "https://i.animepahe.ru/posters/504d4bbaf62637a4993f7007e274792002da0b04a2078c86516ae2d00e13b314.th.jpg",
                "link": "https://animepahe.ru/anime/8909edeb-8c91-0e10-985a-8215e553af0c"
            },
            {
                "name": "Owari no Seraph",
                "cover": "https://i.animepahe.ru/posters/8c1ef945de7f916011b609c4a3aceab447c4b1054de89c622ee3543def01593a.th.jpg",
                "link": "https://animepahe.ru/anime/a6c0fb27-3ad4-ad06-15b2-7b23952bb539"
            },
            {
                "name": "Big Order (TV)",
                "cover": "https://i.animepahe.ru/posters/56c8896073659cb006f4d8f2a071df9e638114d06fde91a4bb184431c47812dc.th.jpg",
                "link": "https://animepahe.ru/anime/37479467-bf0b-2761-48a2-75ece2e17070"
            },
            {
                "name": "Yakusoku no Neverland",
                "cover": "https://i.animepahe.ru/posters/41567475c9e59ca61c4c28080b861163c3f6a1dc63211ed4afced3437d9c60de.th.jpg",
                "link": "https://animepahe.ru/anime/899c8aa9-46d5-910c-376d-016287bb568a"
            },
            {
                "name": "Sidonia no Kishi: Daikyuu Wakusei Seneki",
                "cover": "https://i.animepahe.ru/posters/dadf68061d23acfae65f2004091d6ae3c595226b8f90e16d330c14011e26a674.th.jpg",
                "link": "https://animepahe.ru/anime/f642254c-4045-969c-3ea1-33c39b13b3e1"
            }
        ]
    }*/


    return(
        <div className="anime-details">
            <div className="picture-download">
                <div className="anime-cover">
                    <img src={data.cover}/>
                    <h2>{data.name}</h2>
                </div>
                <div className="download details">
                    <div className="download-form">
                        <h2>Download Options</h2>
                    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="downloadOption"
            value="all"
            checked={downloadOption === "all"}
            onChange={handleDownloadOptionChange}
          />
          All
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="downloadOption"
            value="range"
            checked={downloadOption === "range"}
            onChange={handleDownloadOptionChange}
          />
          Range
        </label>
      </div>
      {downloadOption === "range" && (
        <div>
          <label>
            From:
            <input
              type="number"
              value={rangeFrom}
              onChange={handleRangeFromChange}
            />
          </label>
          <label>
            To:
            <input
              type="number"
              value={rangeTo}
              onChange={handleRangeToChange}
            />
          </label>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
                    </div>
                </div>
            </div>
            <div className="extra-details">
                <div className="storyline">
                    <h2>Storyline</h2>
                    <p>{data.story}</p>
                </div>
                <div className="related-anime">
                    <h2>Similar anime</h2>
                    <AnimeList list={data.related}/>
                    </div>
                </div>
            
        </div>
    )

}