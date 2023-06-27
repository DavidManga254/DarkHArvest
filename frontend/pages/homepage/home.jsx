import { SplashScreen } from '../../components/splashscreen/splashpage.jsx'
import * as React from 'react';
//simport { ipcRenderer } from 'electron';
import { searcher } from '../../../src/renderer.js';
import {useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/sidebar/sidebar.jsx';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingAnime } from '../../../anilist-api/anilist-api.js';
import TruncatedText from '../../components/stringcut/sringcut.jsx';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { AnimeList } from '../../components/animelist/list.jsx';



//homepage
export function Homepage(){
    //navigate
    const navigate = useNavigate();

    const [animeData, setList] = useState({
        mainCoverAnime:null,
        recommendedAnime:null

    });
    const [loader,setLoader] = useState(true)

    const dispatch = useDispatch();

    //take page data from redux store main cover anime, recommended data

    const HomeDataCover = useSelector(state => state.ChangeStoreData.homePageCover);
    const recommendedData = useSelector(state => state.ChangeStoreData.recommendedPage);


    //check if exists in store
    // useEffect(() => {
    //     if (recommendedData === null) {
    //        async function fetchData() {
    //         try {
    //           let trendingApiResponse = await getTrendingAnime();
                
    //           //take number one trending
    //           let trendingApiResponseCover = trendingApiResponse[0];

    //           if(trendingApiResponseCover.bannerImage === null || trendingApiResponseCover.bannerImage === undefined){
    //             let incrementor = 0;
    //             while(trendingApiResponseCover.bannerImage === null || trendingApiResponseCover.bannerImage === undefined){
    //                 trendingApiResponseCover = trendingApiResponse[incrementor];
    //                 incrementor++;
    //             }
    //           }

    //           //console.log("it is null")
    //           //console.log("what we are dispatching is ",trendingApiResponse)

    //           //store fetched data

    //           dispatch({
    //             type:"changeRecommendedData",
    //             payload: trendingApiResponse
    //           });

    //           setList((previous)=>{
    //             return{
    //                 ...previous,
    //                 mainCoverAnime : trendingApiResponseCover,
    //                 recommendedAnime : trendingApiResponse
    //             }
    //           });
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //       }
    
    //       fetchData();
    //     }else{
    //         setList((previous)=>{
    //             return{
    //                 ...previous,
    //                 mainCoverAnime : HomeDataCover,
    //                 recommendedAnime : recommendedData
    //             }
    //         });
    //         setLoader(false);

    //     }
    //   }, []);

    useEffect(()=>{
        const tempData = [
            {
                "title": {
                    "english": "Hell’s Paradise",
                    "romaji": "Jigokuraku"
                },
                "id": 128893,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128893-l0R0GFHplDKW.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/128893-pAA7PjY8l7dy.jpg",
                "status": "RELEASING",
                "episodes": 13,
                "season": "SPRING",
                "description": "The Edo period is nearing its end. Gabimaru, a shinobi formerly known as the strongest in Iwagakure who is now a death row convict, is told that he will be acquitted and set free if he can bring back the Elixir of Life from an island that is rumored to be the Buddhist pure land Sukhavati. In hopes of reuniting with his beloved wife, Gabimaru heads to the island along with the executioner Yamada Asaemon Sagiri. Upon arriving there, they encounter other death row convicts in search of the Elixir of Life... as well as a host of unknown creatures, eerie manmade statues, and the hermits who rule the island. Can Gabimaru find the Elixir of Life on this mysterious island and make it back home alive?<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 80,
                "genres": [
                    "Action",
                    "Adventure",
                    "Mystery",
                    "Supernatural"
                ],
                "studio": "MAPPA",
                "rank": {
                    "popularity": 242,
                    "rating": 234,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=8BIaDDN-r3o",
                "startDate": "1-4-2023",
                "endDate": "1-7-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "6 days",
                    "airingOn": "17:00:00 01-07-2023",
                    "episode": 13
                }
            },
            {
                "title": {
                    "english": "My Love Story with Yamada-kun at Lv999",
                    "romaji": "Yamada-kun to Lv999 no Koi wo Suru"
                },
                "id": 154965,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154965-vZbBRjtmLp7S.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154965-9AwJG3nVokqG.jpg",
                "status": "FINISHED",
                "episodes": 13,
                "season": "SPRING",
                "description": "Akane Kinoshita, a female college student, faces the absolute worst situation when she ends up breaking up with her boyfriend after he has an affair with a woman he met playing an online game. While relieving her stress by rampaging through the open hunting grounds of an online game, Akane spills everything about her heartbreak to “Yamada”, a player she met by chance who happens to be in the same guild. “I don't care,” is his curt reply. But when Akane gets a makeover and joins an offline event to get back at her ex-boyfriend, she hears those dreadful words again. And that was Akane's fateful encounter with “Yamada”─！<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 78,
                "genres": [
                    "Comedy",
                    "Drama",
                    "Romance"
                ],
                "studio": "MADHOUSE",
                "rank": {
                    "popularity": 480,
                    "rating": 494,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=Mk8gEBzunD8",
                "startDate": "2-4-2023",
                "endDate": "25-6-2023"
            },
            {
                "title": {
                    "english": "ONE PIECE",
                    "romaji": "ONE PIECE"
                },
                "id": 21,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
                "status": "RELEASING",
                "season": "FALL",
                "description": "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
                "meanScore": 87,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Drama",
                    "Fantasy"
                ],
                "studio": "Toei Animation",
                "rank": {
                    "popularity": 22,
                    "rating": 16,
                    "year": 0
                },
                "startDate": "20-10-1999",
                "nextAiringEpisode": {
                    "timeUntilAiring": "6 days",
                    "airingOn": "03:30:00 02-07-2023",
                    "episode": 1067
                }
            },
            {
                "title": {
                    "english": "Tengoku Daimakyo",
                    "romaji": "Tengoku Daimakyou"
                },
                "id": 155783,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx155783-X23WQwPmI9Sh.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155783-MXHfdquIBoHA.jpg",
                "status": "FINISHED",
                "episodes": 13,
                "season": "SPRING",
                "description": "In the year 2024, the world has collapsed. Grotesque monsters lurk amongst the ruins of Japan, while remaining people scrape together what they can to survive. Kiruko, an odd-job girl in Nakano, accepts a mysterious woman's dying wish to take a boy named Maru to a place called Heaven.<br>\n<br>\n(Source: Disney+, edited)",
                "meanScore": 81,
                "genres": [
                    "Adventure",
                    "Mystery",
                    "Sci-Fi",
                    "Thriller"
                ],
                "studio": "Production I.G",
                "rank": {
                    "popularity": 210,
                    "rating": 444,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=Sld5uW_BJU4",
                "startDate": "1-4-2023",
                "endDate": "24-6-2023"
            },
            {
                "title": {
                    "english": "Mobile Suit Gundam: The Witch from Mercury Season 2",
                    "romaji": "Kidou Senshi Gundam: Suisei no Majo Season 2"
                },
                "id": 155158,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx155158-1twjG8KtZscr.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155158-6iox6U8TO4BQ.jpg",
                "status": "RELEASING",
                "episodes": 12,
                "season": "SPRING",
                "description": "The second season of <i>Mobile Suit Gundam: the Witch from Mercury</i>. <br><br>\n\nA.S.122...<br>\nAn era when a multitude of corporations have entered space and built a huge economic system. After transferring to the Asticassia School of Technology from the planet Mercury, Suletta Mercury has experienced a school life filled with encounters and excitement, as both Miorine Rembran's bridegroom and a member of GUND-ARM, Inc.\n<br><br>\nIt has been two weeks since the incident at Plant Quetta. Suletta passes her days at the school, anticipating her reunion with Miorine. Miorine, meanwhile, has stationed herself at the head office of the Benerit Group, monitoring her father's condition. The two are about to face new hardships and pressing decisions. Each with her own feelings in her heart, the girls will confront the mighty curse the Gundam brings.\n\n<br><br>\n(Source: GUNDAM.INFO, edited)",
                "meanScore": 81,
                "genres": [
                    "Action",
                    "Mecha",
                    "Sci-Fi"
                ],
                "studio": "Sunrise",
                "rank": {
                    "popularity": 214,
                    "rating": 12,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=bQjXXzdEnMw",
                "startDate": "9-4-2023",
                "endDate": "2-7-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "7 days",
                    "airingOn": "11:00:00 02-07-2023",
                    "episode": 12
                }
            },
            {
                "title": {
                    "english": "MASHLE: MAGIC AND MUSCLES",
                    "romaji": "MASHLE"
                },
                "id": 151801,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151801-wYg28dEaJAw3.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151801-zBFaJMIJFWfS.jpg",
                "status": "RELEASING",
                "episodes": 12,
                "season": "SPRING",
                "description": "This is a world of magic. This is a world in which magic is casually used by everyone.<br><br>\nIn a deep, dark forest in this world of magic, there is a boy who is singlemindedly working out. His name is Mash Burnedead, and he has a secret. He can’t use magic. <br><br>\nAll he wanted was to live a quiet life with his family, but people suddenly start trying to kill him one day and he somehow finds himself enrolled in Magic School. There, he sets his sights on becoming a “Divine Visionary,” the elite of the elite. <br><br> Will his ripped muscles work against the best and brightest of the wizarding world? The curtain rises on this off-kilter magical fantasy in which the power of being jacked crushes any spell!<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 74,
                "genres": [
                    "Action",
                    "Comedy",
                    "Fantasy"
                ],
                "studio": "A-1 Pictures",
                "rank": {
                    "popularity": 420,
                    "rating": 31,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=zl0Kiv0kuQQ",
                "startDate": "8-4-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "5 days",
                    "airingOn": "18:00:00 30-06-2023",
                    "episode": 12
                }
            },
            {
                "title": {
                    "english": "Oshi No Ko",
                    "romaji": "[Oshi no Ko]"
                },
                "id": 150672,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150672-2WWJVXIAOG11.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/150672-ISwoA0eS722H.jpg",
                "status": "RELEASING",
                "episodes": 11,
                "season": "SPRING",
                "description": "When a pregnant young starlet appears in Gorou Amemiya’s countryside medical clinic, the doctor takes it upon himself to safely (and secretly) deliver Ai Hoshino’s child so she can make a scandal-free return to the stage. But no good deed goes unpunished, and on the eve of her delivery, he finds himself slain at the hands of Ai’s deluded stalker — and subsequently reborn as Ai’s child, Aquamarine Hoshino! The glitz and glamor of showbiz hide the dark underbelly of the entertainment industry, threatening to dull the shine of his favorite star. Can he help his new mother rise to the top of the charts? And what will he do when unthinkable disaster strikes? <br>\n<br>\n(Source: HIDIVE)\n<br><br>\n\n<i>Note: Episode 1<b>【推しの子】Mother and Children</b> was pre-screened in advance in Japanese theaters on March 17, 2023. The regular TV broadcast began on April 12, 2023. The first episode has an extended runtime of ~82 minutes.</i>",
                "meanScore": 88,
                "genres": [
                    "Drama",
                    "Mystery",
                    "Psychological",
                    "Supernatural"
                ],
                "studio": "Doga Kobo",
                "rank": {
                    "popularity": 20,
                    "rating": 244,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=gKWEUJ4r5do",
                "startDate": "12-4-2023",
                "endDate": "28-6-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "3 days",
                    "airingOn": "17:00:00 28-06-2023",
                    "episode": 11
                }
            },
            {
                "title": {
                    "english": "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
                    "romaji": "Kimetsu no Yaiba: Katanakaji no Sato-hen"
                },
                "id": 145139,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145139-rRimpHGWLhym.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145139-V01Prh6UzfRk.jpg",
                "status": "FINISHED",
                "episodes": 11,
                "season": "SPRING",
                "description": "Adaptation of the Swordsmith Village Arc.<br>\n<br>\nTanjiro’s journey leads him to the Swordsmith Village, where he reunites with two Hashira, members of the Demon Slayer Corps’ highest-ranking swordsmen - Mist Hashira Muichiro Tokito and Love Hashira Mitsuri Kanroji. With the shadows of demons lurking near, a new battle begins for Tanjiro and his comrades.\n<br><br>\n<i>Notes:<br>\n• The first episode has a runtime of ~49 minutes, and received an early premiere in cinemas worldwide as part of a special screening alongside the final two episodes of Kimetsu no Yaiba: Yuukaku-hen.<br>\n• The final episode has a runtime of ~52 minutes. </i>",
                "meanScore": 83,
                "genres": [
                    "Action",
                    "Adventure",
                    "Drama",
                    "Fantasy",
                    "Supernatural"
                ],
                "studio": "ufotable",
                "rank": {
                    "popularity": 91,
                    "rating": 190,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=a9tq0aS5Zu8",
                "startDate": "9-4-2023",
                "endDate": "18-6-2023"
            },
            {
                "title": {
                    "english": "A Galaxy Next Door",
                    "romaji": "Otonari ni Ginga"
                },
                "id": 148098,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx148098-MI9Rm8JVhSh0.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/148098-Zdw10Iuvojnz.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "Ever since their father died, Ichirou Kuga has struggled to support his two younger siblings on nothing but a small inheritance and his passion for drawing manga. But it’s becoming harder to keep up with his growing responsibilities and deadlines, especially after his last two assistants quit to follow their dreams. <br>\n <br>\nJust as he’s nearing his breaking point, the beautiful and scarily competent Shiori Goshiki applies to become his new assistant. But there’s something almost otherworldly about Goshiki, and soon Kuga finds his reality turned upside down when she suddenly declares them engaged to marry!<br>\n<br>(Source: Crunchyroll)",
                "meanScore": 69,
                "genres": [
                    "Comedy",
                    "Romance"
                ],
                "studio": "Asahi Production",
                "rank": {
                    "popularity": 57,
                    "rating": 53,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=ZQG_2UrgzQ8",
                "startDate": "9-4-2023",
                "endDate": "25-6-2023"
            },
            {
                "title": {
                    "english": "Summoned to Another World for a Second Time",
                    "romaji": "Isekai Shoukan wa Nidome desu"
                },
                "id": 140754,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140754-JHwGp7NrAj9m.png",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "There was once a hero who was summoned to another world, and he saved that world. However, the man was caught in a \"trap\" and was forcibly returned to his original world. On top of that, he had to start over as a baby… This is the story of a crazy journey in another world where a former hero who was reincarnated into a slightly gloomy high school student is \"resummoned\" back to that same world! There's a lot of room to work with when it's the second time, huh♪<br>\n<br>\n(Source: Coolmic)",
                "meanScore": 57,
                "genres": [
                    "Adventure",
                    "Comedy",
                    "Fantasy"
                ],
                "studio": "Studio elle",
                "rank": {
                    "popularity": 90,
                    "rating": 47,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=FNoriLaH0IM",
                "startDate": "9-4-2023",
                "endDate": "25-6-2023"
            },
            {
                "title": {
                    "english": "Vinland Saga Season 2",
                    "romaji": "VINLAND SAGA SEASON 2"
                },
                "id": 136430,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx136430-f8Iza5GEynRW.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/136430-ktoFZnyubhHg.jpg",
                "status": "FINISHED",
                "episodes": 24,
                "season": "WINTER",
                "description": "The second season of <i>Vinland Saga</i>. <br><br>\n\nWhen Thorfinn loses it all, he must find his new purpose for living in a strange new land.\n<br><br>\n(Source: Crunchyroll)",
                "meanScore": 88,
                "genres": [
                    "Action",
                    "Adventure",
                    "Drama"
                ],
                "studio": "MAPPA",
                "rank": {
                    "popularity": 15,
                    "rating": 291,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=6pX93dXfH9s",
                "startDate": "10-1-2023",
                "endDate": "20-6-2023"
            },
            {
                "title": {
                    "english": "TONIKAWA: Over The Moon For You Season 2",
                    "romaji": "Tonikaku Kawaii Season 2"
                },
                "id": 141208,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141208-On0qHKxo6P5t.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141208-06bpzVXG9vqO.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "The second season of <i>Tonikaku Kawaii</i>.\n<br><br>\nThe sweet story of Nasa and Tsukasa continues! After surviving some awkward first nights together, dealing with doubters, and recovering from their apartment fire, it's clear the fate of these lovers was written in the stars. Now, they're ready to settle back into domestic bliss and finally plan their wedding ceremony! But with plenty of new friends on the way, what will their big day look like?!\n<br><br>\n(Source: Crunchyroll)",
                "meanScore": 76,
                "genres": [
                    "Comedy",
                    "Romance",
                    "Slice of Life"
                ],
                "studio": "Seven Arcs",
                "rank": {
                    "popularity": 483,
                    "rating": 24,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=9mEaa65_iMI",
                "startDate": "8-4-2023",
                "endDate": "24-6-2023"
            },
            {
                "title": {
                    "english": "Skip and Loafer",
                    "romaji": "Skip to Loafer"
                },
                "id": 141911,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141911-LqaNFCgfcj3M.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141911-XqAZO540hFXw.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "This country girl is ready for the big city! Well, at least she thought she was. Mitsumi’s dream is to attend a prestigious school and make the world a better place. But when she finally gets to Tokyo, it turns out she isn’t exactly prepared for city life. Luckily, she runs into Shima, a sweet and handsome classmate who becomes her first friend! Can she make it in Tokyo with Shima by her side?<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 82,
                "genres": [
                    "Comedy",
                    "Romance",
                    "Slice of Life"
                ],
                "studio": "P.A. Works",
                "rank": {
                    "popularity": 156,
                    "rating": 7,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=GcfUnbrsCJk",
                "startDate": "4-4-2023",
                "endDate": "20-6-2023"
            },
            {
                "title": {
                    "english": "KONOSUBA -An Explosion on This Wonderful World!",
                    "romaji": "Kono Subarashii Sekai ni Bakuen wo!"
                },
                "id": 150075,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150075-c7iph443GTBd.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/150075-TPl29ZIkZMuu.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "This feisty young wizard will stop at nothing to master the spell that saved her life: Explosion! Megumin, the “Greatest Genius of the Crimson Magic Clan,” has chosen to devote her studies to the powerful offensive magic used by her mysterious savior. Then one day, her little sister finds a black kitten in the woods. But this cat isn’t just a new furry friend—she’s the key to awakening a Dark God!<br><br>\n\n(Source: Crunchyroll)",
                "meanScore": 75,
                "genres": [
                    "Adventure",
                    "Comedy",
                    "Fantasy"
                ],
                "studio": "Drive",
                "rank": {
                    "popularity": 28,
                    "rating": 15,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=XOxlEVCVzZc",
                "startDate": "6-4-2023",
                "endDate": "22-6-2023"
            },
            {
                "title": {
                    "english": "My Clueless First Friend",
                    "romaji": "Jijou wo Shiranai Tenkousei ga Guigui Kuru."
                },
                "id": 157295,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx157295-vHEo07yAAF1L.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/157295-9gftzCCsAQ4i.jpg",
                "status": "FINISHED",
                "episodes": 13,
                "season": "SPRING",
                "description": "Fifth grader Nishimura isn’t too proud of her “Grim Reaper” moniker given by her bullying schoolmates, but the new kid loves it. The once lonely target of everyone’s ridicule starts to get out of her shell with the help of her new cheerful yet airheaded friend, Takada. Together they’ll embark on a sweet and touching journey of summer fun and friendship!<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 73,
                "genres": [
                    "Comedy",
                    "Slice of Life"
                ],
                "studio": "Studio Signpost",
                "rank": {
                    "popularity": 42,
                    "rating": 83,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=2zepo52nU_w",
                "startDate": "2-4-2023",
                "endDate": "25-6-2023"
            },
            {
                "title": {
                    "english": "The Café Terrace and Its Goddesses",
                    "romaji": "Megami no Café Terrace"
                },
                "id": 154412,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154412-bEMQkJWOStDR.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154412-xecstCsfPLIe.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "After inheriting his late grandmother’s failing café, Hayato sees it as a bother and plans to sell it for a quick buck. Until he discovers five beautiful girls staying there! When they beg him to keep the café open, Hayato reluctantly gives in. Can he manage the seaside shop while learning to live with these unruly women?<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 69,
                "genres": [
                    "Comedy",
                    "Ecchi",
                    "Romance"
                ],
                "studio": "Tezuka Productions",
                "rank": {
                    "popularity": 58,
                    "rating": 65,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=SyoNRBW3g7g",
                "startDate": "8-4-2023",
                "endDate": "24-6-2023"
            },
            {
                "title": {
                    "english": "I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too",
                    "romaji": "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta"
                },
                "id": 153845,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153845-C47aoKy7wf19.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153845-qcUXgT0toF1J.jpg",
                "status": "RELEASING",
                "episodes": 13,
                "season": "SPRING",
                "description": "All his life, Yuuya has been bullied at school and neglected by his parents. After moving into his late grandfather’s home, he discovers a strange door that seems to be calling out to him. Yuuya opens the door, steps inside, and is suddenly transported to a magical world! This new world holds rare treasures and grants him powerful skills, which he takes back to Earth for a new lease on life.<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 64,
                "genres": [
                    "Action",
                    "Adventure",
                    "Fantasy",
                    "Romance"
                ],
                "studio": "Millepensee",
                "rank": {
                    "popularity": 72,
                    "rating": 21,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=qDaUzzpowzQ",
                "startDate": "4-4-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "1 days",
                    "airingOn": "18:00:00 26-06-2023",
                    "episode": 13
                }
            },
            {
                "title": {
                    "english": "Dr. STONE New World",
                    "romaji": "Dr. STONE: NEW WORLD"
                },
                "id": 131518,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131518-RU7RoUmGb2sP.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131518-uENBDjWnMHmN.jpg",
                "status": "FINISHED",
                "episodes": 11,
                "season": "SPRING",
                "description": "The third season of <i>Dr. STONE</i>. <br><br>\n\nSenku and the Kingdom of Science sail to new lands to uncover more scientific secrets! <br><br>\n(Source: Crunchyroll)",
                "meanScore": 81,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Sci-Fi"
                ],
                "studio": "TMS Entertainment",
                "rank": {
                    "popularity": 170,
                    "rating": 350,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=bXgip0F6qdc",
                "startDate": "6-4-2023",
                "endDate": "15-6-2023"
            },
            {
                "title": {
                    "english": "Black Clover",
                    "romaji": "Black Clover"
                },
                "id": 97940,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97940-O2LWFOG8bK1u.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97940-1URQdQ4U1a0b.jpg",
                "status": "FINISHED",
                "episodes": 170,
                "season": "FALL",
                "description": "In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. Being opposite but good rivals, Yuno and Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up is never an option!<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 78,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Fantasy"
                ],
                "studio": "Studio Pierrot",
                "rank": {
                    "popularity": 322,
                    "rating": 36,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=vUjAxk1qYzQ",
                "startDate": "3-10-2017",
                "endDate": "30-3-2021"
            },
            {
                "title": {
                    "english": "The Dangers in My Heart",
                    "romaji": "Boku no Kokoro no Yabai Yatsu"
                },
                "id": 153152,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153152-3yAM7pdAcozH.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153152-rBoe4ue4EjzI.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "Fascinated by murder and all things macabre, Kyoutarou daydreams of acting out his twisted fantasies on his unsuspecting classmates — but an encounter with Anna Yamada, the gorgeous class idol, lights a spark in the darkness of his heart. It’s a classic tale of an antisocial boy falling for a popular girl, but neither are who they appear to be at first glance. Will Kyoutarou and Anna defy their expectations of each other — and of themselves?<br>\n<br>\n(Source: HIDIVE)",
                "meanScore": 81,
                "genres": [
                    "Comedy",
                    "Romance",
                    "Slice of Life"
                ],
                "studio": "Shin-Ei Animation",
                "rank": {
                    "popularity": 211,
                    "rating": 11,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=c-yZsNd__0E",
                "startDate": "2-4-2023",
                "endDate": "18-6-2023"
            },
            {
                "title": {
                    "english": "Insomniacs after school",
                    "romaji": "Kimi wa Houkago Insomnia"
                },
                "id": 143653,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx143653-h6NEdWxKIRza.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/143653-cvWrYzJPgDkV.jpg",
                "status": "RELEASING",
                "episodes": 13,
                "season": "SPRING",
                "description": "Ganta Nakami is a high school student who suffers from insomnia. One day, he meets Isaki Magari, a girl with the same condition. A strange, but special relationship forms as they share a secret and catch up on their sleep in their school’s abandoned observatory…<br>\n<br>\n(Source: HIDIVE)",
                "meanScore": 78,
                "genres": [
                    "Romance",
                    "Slice of Life"
                ],
                "studio": "LIDENFILMS",
                "rank": {
                    "popularity": 380,
                    "rating": 17,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=YcgFC0Mf-ME",
                "startDate": "11-4-2023",
                "endDate": "4-7-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "1 days",
                    "airingOn": "18:00:00 26-06-2023",
                    "episode": 12
                }
            },
            {
                "title": {
                    "english": "The Legendary Hero is Dead!",
                    "romaji": "Yuusha ga Shinda!"
                },
                "id": 148109,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx148109-cwAINDGwAHB2.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "In a world of monsters and magic, Sion, the local hero, is on his way to save the world from demons. Well, that was the plan until he fell into a pit dug by a sleazy villager, Touka, and died! After hiding the accident, Touka goes to bed as usual but wakes up feeling…different. Somehow he’s in Sion’s body! Now, the fate of the world is in his hands. What could go wrong?<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 62,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Ecchi",
                    "Fantasy"
                ],
                "studio": "LIDENFILMS",
                "rank": {
                    "popularity": 81,
                    "rating": 57,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=6VNZtBFNuCU",
                "startDate": "7-4-2023",
                "endDate": "23-6-2023"
            },
            {
                "title": {
                    "english": "Kubo Won't Let Me Be Invisible",
                    "romaji": "Kubo-san wa Mob wo Yurusanai"
                },
                "id": 148969,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx148969-3vPgXpMpQvba.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/148969-Ss5qOkasNcnG.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "WINTER",
                "description": "Junta Shiraishi has just one goal: to experience youth to the fullest! But this is easier said than done. Junta is so socially invisible that people at school would swear he skipped class even when he’s sitting right behind them. Everything changes when Junta meets Nagisa Kubo. She’s the only person who pays Junta any attention, and her constant teasing is sure to turn Junta’s quiet life upside down because Kubo won’t let him be invisible!<br>\n<br>\n(Source: HIDIVE) ",
                "meanScore": 75,
                "genres": [
                    "Comedy",
                    "Romance",
                    "Slice of Life"
                ],
                "studio": "PINE JAM",
                "rank": {
                    "popularity": 27,
                    "rating": 28,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=iaVsFCj1gAs",
                "startDate": "10-1-2023",
                "endDate": "20-6-2023"
            },
            {
                "title": {
                    "english": "Black Clover: Sword of the Wizard King",
                    "romaji": "Black Clover: Mahou Tei no Ken"
                },
                "id": 131680,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131680-gjs8mMQPmkOQ.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131680-AP8e9mF6NhXr.jpg",
                "status": "FINISHED",
                "episodes": 1,
                "season": "SPRING",
                "description": "As a lionhearted boy who can’t wield magic strives for the title of Wizard King, four banished Wizard Kings of yore return to crush the Clover Kingdom.<br><br>\n(Source: Netflix)",
                "meanScore": 82,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Fantasy"
                ],
                "studio": "Studio Pierrot",
                "rank": {
                    "popularity": 42,
                    "rating": 99,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=u0cu-T7C9bU",
                "startDate": "16-6-2023",
                "endDate": "16-6-2023"
            },
            {
                "title": {
                    "english": "The Aristocrat’s Otherworldly Adventure: Serving Gods Who Go Too Far",
                    "romaji": "Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito"
                },
                "id": 153332,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153332-k3Jg04E9jNRo.png",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "Shiina Kazuya is killed protecting a young girl at a convenience store where he just happened to be at the wrong time. The next thing he knows, he's in the kind of world he has only dreamed about--a world of magic and swords! He has been reincarnated as Cain von Silford, the third son of an aristocratic family, and he quickly grows interested in many things he sees. Then, on his fifth birthday, he's baptized at a church according to tradition... and the gods grant him several divine blessings, along with stats that could only be described as unusual and extraordinary! In his reincarnated life, when it comes to things like battles, romance, and studying, apparently a little overkill is just right?! When he puts in the usual effort to do things punctually and properly, it only gets him in trouble... Thus Cain's chaotic life in another world begins!<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 66,
                "genres": [
                    "Action",
                    "Fantasy",
                    "Romance"
                ],
                "studio": "Magic Bus",
                "rank": {
                    "popularity": 67,
                    "rating": 54,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=ko1r8Bsvnrk",
                "startDate": "2-4-2023",
                "endDate": "18-6-2023"
            },
            {
                "title": {
                    "english": "Hunter x Hunter (2011)",
                    "romaji": "HUNTER×HUNTER (2011)"
                },
                "id": 11061,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
                "status": "FINISHED",
                "episodes": 148,
                "season": "FALL",
                "description": "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\nA Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\nAfter becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
                "meanScore": 89,
                "genres": [
                    "Action",
                    "Adventure",
                    "Fantasy"
                ],
                "studio": "MADHOUSE",
                "rank": {
                    "popularity": 6,
                    "rating": 6,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=d6kBeJjTGnY",
                "startDate": "2-10-2011",
                "endDate": "24-9-2014"
            },
            {
                "title": {
                    "english": "Dead Mount Death Play",
                    "romaji": "Dead Mount Death Play"
                },
                "id": 157198,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx157198-LVZ7PgxWwc6v.jpg",
                "status": "RELEASING",
                "episodes": 12,
                "season": "SPRING",
                "description": "As a legendary hero nears victory against a necromancer known as The Corpse God, things take an unexpected turn with the dark sorcerer’s final gambit—reincarnation magic. This last-ditch effort catches the brave fighter off guard, and now he’s a boy named Polka Shinoyama in a whole new world! The showdown between good and evil just got epic.<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 71,
                "genres": [
                    "Action",
                    "Fantasy",
                    "Supernatural",
                    "Thriller"
                ],
                "studio": "GEEKTOYS",
                "rank": {
                    "popularity": 48,
                    "rating": 36,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=IOkS_GU9BNc",
                "startDate": "11-4-2023",
                "endDate": "27-6-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "1 days",
                    "airingOn": "18:00:00 26-06-2023",
                    "episode": 12
                }
            },
            {
                "title": {
                    "english": "My One-Hit Kill Sister",
                    "romaji": "Isekai One Turn Kill Nee-san: Ane Douhan no Isekai Seikatsu Hajimemashita"
                },
                "id": 146234,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146234-vSYvPfLwjYXX.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "Asahi loves the idea of magical fantasy worlds. And somehow, he’s transported to one! He’s eager to explore and use his new abilities, except he learns he doesn’t have any. But his older sister Maya is in this world too, and she ends up having the strongest cheat skills imaginable! Now, Asahi starts his new life with a doting sister who can kill any beast with one hit.<br>\n<br>\n(Source: Crunchyroll)<br>\n<br>\n<i>Note: Each episode streamed 24 hours early on ABEMA.</I>",
                "meanScore": 60,
                "genres": [
                    "Comedy",
                    "Fantasy",
                    "Romance"
                ],
                "studio": "Gekkou",
                "rank": {
                    "popularity": 87,
                    "rating": 70,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=8vfqXo_WgJY",
                "startDate": "7-4-2023",
                "endDate": "23-6-2023"
            },
            {
                "title": {
                    "english": "The Ancient Magus’ Bride Season 2",
                    "romaji": "Mahoutsukai no Yome SEASON 2"
                },
                "id": 154364,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154364-ZFPtr9F1sW60.png",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "The second season of <i>Mahoutsukai no Yome</i>. <br><br>\nChise was able to accept Elias and herself, if not necessarily everything about her situation. After Cartaphilus fell back into a slumber that would not last forever, Chise was able to go back to her regular life. Then she receives an invitation from a mutual aid organization for mages called the College. Under the British Library exists a secret society of mages. Encounters and interactions with people are about to open some new doors. This is a story about saving yourself to save another. <br><br>\n(Source: Crunchyroll) <br><br>\n\n<i>Note: Episode 1 of season two premiered in a preview screening event together with \"Fuyu no Okorimono\" at Tachikawa Cinema City's Cinema Two in Tokyo on March 11, 2023.</i>\n\n ",
                "meanScore": 78,
                "genres": [
                    "Drama",
                    "Fantasy",
                    "Romance",
                    "Slice of Life",
                    "Supernatural"
                ],
                "studio": "Studio Kafka",
                "rank": {
                    "popularity": 396,
                    "rating": 18,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=fsmUXp5c8AM",
                "startDate": "6-4-2023",
                "endDate": "22-6-2023"
            },
            {
                "title": {
                    "english": "Otaku Elf",
                    "romaji": "Edomae Elf"
                },
                "id": 150957,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150957-VFsWSLJgW9Bu.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "Takamimi Shrine has an unusual resident – Elda, an ancient elf who’s obsessed with video games! The shrine’s teenage attendant, Koito Koganei, keeps this reclusive otaku well supplied with energy drinks and junk food. Even though she loves 100%-ing her games, Elda has duties to attend to, and Koganei is bound and determined to make this otaku elf fulfill them! It’ll just take an offering or two to bribe—um, we mean convince Elda to put down her new game…\n<br><br>\n(Source: HIDIVE) ",
                "meanScore": 70,
                "genres": [
                    "Comedy",
                    "Slice of Life",
                    "Supernatural"
                ],
                "studio": "C2C",
                "rank": {
                    "popularity": 54,
                    "rating": 85,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=xsy4byqe_ek",
                "startDate": "8-4-2023",
                "endDate": "24-6-2023"
            },
            {
                "title": {
                    "english": "Magical Destroyers",
                    "romaji": "Mahou Shoujo Magical Destroyers"
                },
                "id": 134131,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx134131-70vYnpBHFtHy.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/134131-siBEZs8r1uzS.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "Freedom of expression is threatened when a mysterious group, the SSC, destroy Japan’s otaku culture. However, a young revolutionary, Otaku Hero—who loves the culture more than anything—rises up. With the help of three rambunctious magical girls—Anarchy, Blue, and Pink—they’ll team up to create a world free of this oppressive rule. Be part of the rebellion to bring back fandom!<br><br>\n\n(Source: Crunchyroll)",
                "meanScore": 62,
                "genres": [
                    "Action",
                    "Comedy",
                    "Ecchi",
                    "Mahou Shoujo"
                ],
                "studio": "Bibury Animation Studios",
                "rank": {
                    "popularity": 78,
                    "rating": 64,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=KdC45CYGhGc",
                "startDate": "8-4-2023",
                "endDate": "24-6-2023"
            },
            {
                "title": {
                    "english": "EDENS ZERO Season 2",
                    "romaji": "EDENS ZERO 2nd Season"
                },
                "id": 144932,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx144932-bVDXbfExeBKH.png",
                "status": "RELEASING",
                "season": "SPRING",
                "description": "The second season of <i>EDENS ZERO</i>.",
                "meanScore": 73,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Fantasy",
                    "Sci-Fi"
                ],
                "studio": "J.C. Staff",
                "rank": {
                    "popularity": 45,
                    "rating": 81,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=BXLJ09WqBWU",
                "startDate": "2-4-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "6 days",
                    "airingOn": "18:55:00 01-07-2023",
                    "episode": 14
                }
            },
            {
                "title": {
                    "english": "Mushoku Tensei: Jobless Reincarnation Season 2",
                    "romaji": "Mushoku Tensei II: Isekai Ittara Honki Dasu"
                },
                "id": 146065,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146065-1hTpwsW2fQIA.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146065-6Lhq5lGDTrfh.jpg",
                "status": "NOT_YET_RELEASED",
                "season": "SUMMER",
                "description": "The second season of <i>Mushoku Tensei: Isekai Ittara Honki Dasu</i>. <br><br>\nRudeus heads north with new friends and powers in search of adventure and those he once knew.  <br><br>\n(Source: Crunchyroll)",
                "genres": [
                    "Adventure",
                    "Drama",
                    "Ecchi",
                    "Fantasy"
                ],
                "studio": "Studio Bind",
                "rank": {
                    "popularity": 17,
                    "rating": 2,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=ts5NGoDI1V0",
                "startDate": "3-7-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "7 days",
                    "airingOn": "18:00:00 02-07-2023",
                    "episode": 1
                }
            },
            {
                "title": {
                    "english": "Naruto: Shippuden",
                    "romaji": "NARUTO: Shippuuden"
                },
                "id": 1735,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1735-Az5gbEdWeotG.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1735.jpg",
                "status": "FINISHED",
                "episodes": 500,
                "season": "WINTER",
                "description": "Naruto: Shippuuden is the continuation of the original animated TV series Naruto. The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki. <br><br>\n(Source: Anime News Network)",
                "meanScore": 82,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Drama",
                    "Fantasy",
                    "Supernatural"
                ],
                "studio": "Studio Pierrot",
                "rank": {
                    "popularity": 148,
                    "rating": 23,
                    "year": 0
                },
                "startDate": "15-2-2007",
                "endDate": "23-3-2017"
            },
            {
                "title": {
                    "english": "Bleach",
                    "romaji": "BLEACH"
                },
                "id": 269,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-KxkqTIuQgJ6v.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/269-08ar2HJOUAuL.jpg",
                "status": "FINISHED",
                "episodes": 366,
                "season": "FALL",
                "description": "Ichigo Kurosaki is a rather normal high school student apart from the fact he has the ability to see ghosts. This ability never impacted his life in a major way until the day he encounters the Shinigami Kuchiki Rukia, who saves him and his family's lives from a Hollow, a corrupt spirit that devours human souls. \n<br><br>\nWounded during the fight against the Hollow, Rukia chooses the only option available to defeat the monster and passes her Shinigami powers to Ichigo. Now forced to act as a substitute until Rukia recovers, Ichigo hunts down the Hollows that plague his town. \n\n\n",
                "meanScore": 77,
                "genres": [
                    "Action",
                    "Adventure",
                    "Supernatural"
                ],
                "studio": "Studio Pierrot",
                "rank": {
                    "popularity": 402,
                    "rating": 61,
                    "year": 0
                },
                "startDate": "5-10-2004",
                "endDate": "27-3-2012"
            },
            {
                "title": {
                    "english": "My Home Hero",
                    "romaji": "My Home Hero"
                },
                "id": 151189,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151189-1oteiBRjwIzU.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151189-buERSJDJLoM6.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "After killing his daughter’s abusive yakuza boyfriend to save her, ordinary salaryman Tetsuo Tosu becomes embroiled in the dark criminal underworld. The wish for a simple life he and his wife Kasen had for their daughter has been reduced to a wish for survival. Though middle-aged and weak, he’ll put his life on the line using only his wits in order to protect his family.<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 67,
                "genres": [
                    "Action",
                    "Drama",
                    "Psychological",
                    "Thriller"
                ],
                "studio": "Tezuka Productions",
                "rank": {
                    "popularity": 64,
                    "rating": 49,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=R7n9LJJPwHM",
                "startDate": "2-4-2023",
                "endDate": "18-6-2023"
            },
            {
                "title": {
                    "english": "Monster",
                    "romaji": "MONSTER"
                },
                "id": 19,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19-ham53gnijfiN.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19-kJhwsB0Z97tL.jpg",
                "status": "FINISHED",
                "episodes": 74,
                "season": "SPRING",
                "description": "Dr. Kenzo Tenma is a renowned Japanese brain surgeon working at a leading hospital in Germany. One night, Dr. Tenma risks his reputation and career to save the life of a critically wounded young boy over that of the town mayor who had been planning to support the hospital financially. A string of mysterious murders begin to occur soon after the operation, and Dr. Tenma emerges as the primary suspect despite no incriminating evidence. \n<br><br>\nA doctor is taught to believe that all life is equal; however, when another series of murders occur in the surgeon's vicinity, Dr. Tenma's beliefs are shaken as his actions that night are shown to have much broader consequences than he could have imagined. Leaving behind his life as a surgeon he embarks on a journey across the country to unravel the mystery of the boy he saved.",
                "meanScore": 88,
                "genres": [
                    "Drama",
                    "Horror",
                    "Mystery",
                    "Psychological",
                    "Thriller"
                ],
                "studio": "MADHOUSE",
                "rank": {
                    "popularity": 16,
                    "rating": 135,
                    "year": 0
                },
                "startDate": "7-4-2004",
                "endDate": "28-9-2005"
            },
            {
                "title": {
                    "english": "Why Raeliana Ended Up at the Duke’s Mansion",
                    "romaji": "Kanojo ga Koushaku-tei ni Itta Riyuu"
                },
                "id": 151847,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151847-OnTYbvb4y4mp.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151847-S1pTlfRY2DqB.jpg",
                "status": "RELEASING",
                "episodes": 12,
                "season": "SPRING",
                "description": "Living inside a fairy tale may sound like a dream, but for this heroine, it’s more of a nightmare. After her mysterious death, Rinko is reborn as Raeliana—a loved and wealthy character in a novel. But she knows the ending: her murder at the hands of her fiancé. So, she hatches a plan to stay alive, one that involves a devilish duke and a phony engagement. Can she rewrite her story?<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 73,
                "genres": [
                    "Comedy",
                    "Fantasy",
                    "Mystery",
                    "Romance"
                ],
                "studio": "TYPHOON GRAPHICS",
                "rank": {
                    "popularity": 39,
                    "rating": 58,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=PlLli6OaU8U",
                "startDate": "10-4-2023",
                "endDate": "26-6-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "22 hours",
                    "airingOn": "15:30:00 26-06-2023",
                    "episode": 12
                }
            },
            {
                "title": {
                    "english": "The Eminence in Shadow",
                    "romaji": "Kage no Jitsuryokusha ni Naritakute!"
                },
                "id": 130298,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx130298-O7nR1Wrav2dH.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130298-9yxFlFvKMwRk.jpg",
                "status": "FINISHED",
                "episodes": 20,
                "season": "FALL",
                "description": "Some people just aren’t suited to playing the part of the flashy, in-your-face hero or the dastardly, mustache-twirling villain with larger-than-life panache. Instead, they operate in the shadows and pull the strings of society through wit and cleverness. That’s the role Cid wants to play when he’s transported to another world. Cid spins a yarn or three and becomes the unlikely leader of the underground Shadow Garden organization that fights against a menacing cult (which he totally made up). However, there’s a catch even his wild imagination didn’t see coming: the cult he concocted actually exists, and they’re beyond displeased that his power fantasy just got in the way of their evil plans!<br>\n<br>\n(Source: HIDIVE)",
                "meanScore": 82,
                "genres": [
                    "Action",
                    "Comedy",
                    "Fantasy"
                ],
                "studio": "Nexus",
                "rank": {
                    "popularity": 136,
                    "rating": 294,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=L7LgAbGF-WY",
                "startDate": "5-10-2022",
                "endDate": "15-2-2023"
            },
            {
                "title": {
                    "english": "Horimiya: The Missing Pieces",
                    "romaji": "Horimiya -piece- "
                },
                "id": 163132,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163132-C220CO5UrTxY.jpg",
                "status": "NOT_YET_RELEASED",
                "episodes": 13,
                "season": "SUMMER",
                "description": "A new anime project adapting popular side stories that were left out from the previous adaptation.",
                "genres": [
                    "Comedy",
                    "Romance",
                    "Slice of Life"
                ],
                "studio": "CloverWorks",
                "rank": {
                    "popularity": 45,
                    "rating": 3,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=t9KCMbGuEf4",
                "startDate": "1-7-2023",
                "endDate": "23-9-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "6 days",
                    "airingOn": "17:30:00 01-07-2023",
                    "episode": 1
                }
            },
            {
                "title": {
                    "english": "Chainsaw Man",
                    "romaji": "Chainsaw Man"
                },
                "id": 127230,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127230-FlochcFsyoF4.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/127230-o8IRwCGVr9KW.jpg",
                "status": "FINISHED",
                "episodes": 12,
                "season": "FALL",
                "description": "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita.<br><br>\nOne day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and gets revived as \"Chainsaw Man\" — a man with a devil's heart.<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 85,
                "genres": [
                    "Action",
                    "Drama",
                    "Horror",
                    "Supernatural"
                ],
                "studio": "MAPPA",
                "rank": {
                    "popularity": 51,
                    "rating": 57,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=v4yLeNt-kCU",
                "startDate": "12-10-2022",
                "endDate": "28-12-2022"
            },
            {
                "title": {
                    "english": "Rokudo's Bad Girls",
                    "romaji": "Rokudou no Onna-tachi"
                },
                "id": 160442,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx160442-NxKnt9KyL1DG.png",
                "status": "FINISHED",
                "episodes": 12,
                "season": "SPRING",
                "description": "Rokudou’s miserable days of being picked on have taken a major turn with a new ability that’s made him the target of every delinquent girl’s affection. The source? A mysterious scroll from his late grandfather, an unusual inheritance to say the least. Now he’s in a romantic panic full of nonstop madness with every bad girl he comes in contact with. Will he ever catch a break?<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 60,
                "genres": [
                    "Action",
                    "Comedy",
                    "Drama",
                    "Romance",
                    "Supernatural"
                ],
                "studio": "Satelight",
                "trailer": "https://youtube.com/watch?v=7rnsPb1dROc",
                "startDate": "8-4-2023",
                "endDate": "24-6-2023"
            },
            {
                "title": {
                    "english": "Zom 100: Bucket List of the Dead",
                    "romaji": "Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto"
                },
                "id": 159831,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx159831-TxAC0ujoLTK6.png",
                "status": "NOT_YET_RELEASED",
                "season": "SUMMER",
                "description": "Surviving a zombie apocalypse beats being a wage slave any day! After spending years slaving away for a soul-crushing company, Akira's life has lost its luster. He lives in a trash-filled apartment, his pay is abysmal, and he can't even muster up the nerve to confess his love to his beautiful co-worker. But when a zombie apocalypse ravages his town, it gives him the push he needs to live for himself. Now Akira's on a mission to complete all 100 items on his bucket list before he...well, kicks the bucket.\n<br><br>\n(Source: Viz Media) ",
                "genres": [
                    "Action",
                    "Comedy",
                    "Horror"
                ],
                "studio": "BUG FILMS",
                "rank": {
                    "popularity": 62,
                    "rating": 6,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=Rm44mpqWFIw",
                "startDate": "9-7-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "14 days",
                    "airingOn": "11:00:00 09-07-2023",
                    "episode": 1
                }
            },
            {
                "title": {
                    "english": "JUJUTSU KAISEN",
                    "romaji": "Jujutsu Kaisen"
                },
                "id": 113415,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-bbBWj4pEFseh.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
                "status": "FINISHED",
                "episodes": 24,
                "season": "FALL",
                "description": "A boy fights... for \"the right death.\"<br>\n<br>\nHardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.<br>\n<br>\nItadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.\n<br><br>\n(Source: Crunchyroll)<br>\n<br>\n<i>Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.</i>",
                "meanScore": 86,
                "genres": [
                    "Action",
                    "Drama",
                    "Supernatural"
                ],
                "studio": "MAPPA",
                "rank": {
                    "popularity": 36,
                    "rating": 5,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=VpO6APNqY1c",
                "startDate": "3-10-2020",
                "endDate": "27-3-2021"
            },
            {
                "title": {
                    "english": "Pokémon Horizons: The Series",
                    "romaji": "Pocket Monsters (2023)"
                },
                "id": 158871,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx158871-FmWU8dacXDiA.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/158871-JGaVb9DxvgTa.jpg",
                "status": "RELEASING",
                "season": "SPRING",
                "description": "A new dream and adventure set throughout the entire Pokémon world unfolds in a brand new Pokémon-series following a girl named Liko and a boy named Roy.",
                "meanScore": 73,
                "genres": [
                    "Adventure",
                    "Fantasy"
                ],
                "studio": "OLM",
                "rank": {
                    "popularity": 43,
                    "rating": 100,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=_c_hMehCORQ",
                "startDate": "14-4-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "5 days",
                    "airingOn": "12:55:00 30-06-2023",
                    "episode": 13
                }
            },
            {
                "title": {
                    "english": "KamiKatsu: Working for God in a Godless World",
                    "romaji": "Kaminaki Sekai no Kamisama Katsudou"
                },
                "id": 148048,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx148048-IaEk51Wtu07L.jpg",
                "status": "RELEASING",
                "episodes": 12,
                "season": "SPRING",
                "description": "As heir to a cult leader, Yukito centers his life around the mysterious goddess Mitama. But everything changes after he’s killed during a ritual gone wrong. To his surprise, Yukito is reborn into a world with no concept of god! And in this world, life and death are decided by the Imperial State. As Yukito fights to protect his new village, someone from his past life lends a helping hand.<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 66,
                "genres": [
                    "Action",
                    "Comedy",
                    "Drama",
                    "Ecchi",
                    "Fantasy"
                ],
                "studio": "Studio Palette",
                "rank": {
                    "popularity": 66,
                    "rating": 42,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=MD_q7xYb-Xs",
                "startDate": "6-4-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "3 days",
                    "airingOn": "18:30:00 28-06-2023",
                    "episode": 11
                }
            },
            {
                "title": {
                    "english": "Soaring Sky! Pretty Cure",
                    "romaji": "Hirogaru Sky! Precure"
                },
                "id": 157883,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx157883-2CY0BMgezlca.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/157883-u3gE5LKKXwb3.jpg",
                "status": "RELEASING",
                "episodes": 48,
                "season": "WINTER",
                "description": "A major incident has occurred in the peaceful Sky Land!? The young Princess Eru has been kidnapped by the monsters of Underg Empire! A brave young girl, Sora, follows the princess through a mysterious hole. \"TV\"? \"Cars\"? Are those some kind of magic tools!?!?\n<br><br>\nBut there's no time to be surprised! She has to get the princess back to the castle...! Flying between two worlds! The adventure with the Pretty Cure begins now!\n<br><br>\nIt's hero time!",
                "meanScore": 77,
                "genres": [
                    "Action",
                    "Fantasy",
                    "Mahou Shoujo"
                ],
                "studio": "Toei Animation",
                "rank": {
                    "popularity": 32,
                    "rating": 16,
                    "year": 2023
                },
                "trailer": "https://youtube.com/watch?v=j0DUgBhsg_A",
                "startDate": "5-2-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "6 days",
                    "airingOn": "02:30:00 02-07-2023",
                    "episode": 22
                }
            },
            {
                "title": {
                    "english": "BLUELOCK",
                    "romaji": "Blue Lock"
                },
                "id": 137822,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx137822-4dVWMSHLpGf8.png",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/137822-oevspckMGLuY.jpg",
                "status": "FINISHED",
                "episodes": 24,
                "season": "FALL",
                "description": "Japan’s desire for World Cup glory leads the Japanese Football Association to launch a new rigorous training program to find the national team’s next striker. Three hundred high school players are pitted against each other for the position, but only one will come out on top. Who among them will be the striker to usher in a new era of Japanese soccer?<br>\n<br>\n(Source: Crunchyroll)",
                "meanScore": 82,
                "genres": [
                    "Action",
                    "Drama",
                    "Sports"
                ],
                "studio": "8-bit",
                "rank": {
                    "popularity": 130,
                    "rating": 193,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=IVsII3dLbWc",
                "startDate": "9-10-2022",
                "endDate": "26-3-2023"
            },
            {
                "title": {
                    "romaji": "Jujutsu Kaisen 2nd Season"
                },
                "id": 145064,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145064-5fa4ZBbW4dqA.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145064-kH9vbOEitIhl.jpg",
                "status": "NOT_YET_RELEASED",
                "season": "SUMMER",
                "description": "The second season of <i>Jujutsu Kaisen</i>.",
                "genres": [
                    "Action",
                    "Drama",
                    "Supernatural"
                ],
                "studio": "MAPPA",
                "rank": {
                    "popularity": 352,
                    "rating": 6,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=O6qVieflwqs",
                "startDate": "6-7-2023",
                "nextAiringEpisode": {
                    "timeUntilAiring": "11 days",
                    "airingOn": "17:56:00 06-07-2023",
                    "episode": 1
                }
            },
            {
                "title": {
                    "english": "Vinland Saga",
                    "romaji": "VINLAND SAGA"
                },
                "id": 101348,
                "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101348-msJS8z91mG0P.jpg",
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101348-pivKKffCAwAY.jpg",
                "status": "FINISHED",
                "episodes": 24,
                "season": "SUMMER",
                "description": "Thorfinn is son to one of the Vikings' greatest warriors, but when his father is killed in battle by the mercenary leader Askeladd, he swears to have his revenge. Thorfinn joins Askeladd's band in order to challenge him to a duel, and ends up caught in the middle of a war for the crown of England.\n<br><br>\n(Source: Kodansha USA)",
                "meanScore": 87,
                "genres": [
                    "Action",
                    "Adventure",
                    "Drama"
                ],
                "studio": "Wit Studio",
                "rank": {
                    "popularity": 27,
                    "rating": 54,
                    "year": 0
                },
                "trailer": "https://youtube.com/watch?v=5xqEp7R9SYM",
                "startDate": "8-7-2019",
                "endDate": "30-12-2019"
            }
        ]
        
        setList((previous)=>{
            return{
                ...animeData,
                recommendedAnime : tempData
            }
        });
    },[]);

    //   console.log(animeData);
    //function to take search request
    async function  handleSearchRequest(event){
        if (event.keyCode === 13){
            let results;
            //anime name
            let request = event.target.value;
            results= await window.connect.searchAnime(request);
            

            navigate('/search',{state:{
                name:request,
                list:results
            }});
        }    
    }



    return(<>
    
        {
           animeData.recommendedAnime === null? <h2>Loading screen</h2> :<div className="page-layout">
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='mainbar'>
                {/* movie choice cover section */}
                {/* animelist */}
                <div>
                    <AnimeList animeList={animeData.recommendedAnime}/>
                </div>


            </div>
        </div>
        }
    
    </>
        
    )
}