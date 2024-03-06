
import egg from "../assets/egg.png";
import quiz from "../assets/quiz.png";
import music from "../assets/music.png";
import chatapp from "../assets/chatapp.png"
import calculator from "../assets/calculator.png"
import typing from "../assets/typing.png"
import crypto from "../assets/crypto.png"
import ecommerce from "../assets/ecommerce.png"
import netflix from "../assets/netflix.png"
import weather from "../assets/weatherapp.png"

export type OneProjectType = {
    name: string;
    image: string;
    skills: string;
    url: string;
    detail: string;
  };
export const ProjectList = [
  {
    name: "Netflixクローン",
    image: netflix,
    skills: "React, Stipe, Firebase",
    detail: "subscription product, mobile responsive ",
    url: "https://github.com/erdenetsogt-sys/netflix-clone",
  },
  {
    name: "Ecommerce",
    image: ecommerce,
    skills: "React, Nodejs, Mongodb",
    detail: "Ecommerce , mobile responsive",
    url: "https://github.com/erdenetsogt-sys/ecommerce/tree/main",
  },
  {
    name: "仮想通貨情報",
    image: crypto,
    skills: "React, material UI, api",
    detail: "仮想通貨最新市場データ可視化",
    url: "https://github.com/erdenetsogt-sys/cryptoInfo",
  },
  {
    name: "電卓",
    image: calculator,
    skills: "Python, Tkinter",
    detail: "GUI app",
    url: "https://github.com/erdenetsogt-sys/calculator-tkinter",
  },
  {
    name: "SpeedTyping",
    image: typing,
    skills: "React, Bulma css",
    detail: "タイピングスピード測るアプリ",
    url: "https://github.com/erdenetsogt-sys/speedTyping",
  },
  {
    name: "チャットアプリ",
    image: chatapp,
    skills: "React,Nodejs,Websocket",
    detail: "realtime messenger",
    url: "https://github.com/erdenetsogt-sys/chatapp",
  },
  {
    name: "天気予報",
    image: weather,
    skills: "React",
    detail: "typing recommender,weather api",
    url: "https://github.com/erdenetsogt-sys/weatherapp",
  },

  {
    name: "ゆで卵の時間はかり",
    image: egg,
    skills: "IOS app",
    detail: "ゆで卵の時間はかるアプリ",
    url: "https://github.com/erdenetsogt-sys/eggTimerAppIos",
  },
  {
    name: "Music",
    image: music,
    skills: "IOS app",
    detail: "音楽のノートが聞こえるアプリ",
    url: "https://github.com/erdenetsogt-sys/xylophoone",
  },
  {
    name: "quizアプリ",
    image: quiz,
    skills: "IOS app",
    detail: "質問に答えるアプリ",
    url: "https://github.com/erdenetsogt-sys/Quizzler-iOS13",
  },
];
