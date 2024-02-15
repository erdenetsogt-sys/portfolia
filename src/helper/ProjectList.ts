import story from "../assets/story.jpg";
import egg from "../assets/egg.png";
import quiz from "../assets/quiz.png";
import music from "../assets/music.png";
import chatgpt from "../assets/chatgpt.jpg";
import fps from "../assets/fps.png";
import chatapp from "../assets/chatapp.png"
import calculator from "../assets/calculator.png"
import typing from "../assets/typing.png"

export type OneProjectType = {
    name: string;
    image: string;
    skills: string;
    url: string;
    detail: string;
  };
export const ProjectList = [
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
    name: "FPS Aim トレーニング",
    image: fps,
    skills: "Three js",
    detail: "someapp",
    url: "https://www.google.com",
  },
  {
    name: "Story Telling",
    image: story,
    skills: "React,HTML,css",
    detail: "someapp",
    url: "https://www.google.com",
  },
  {
    name: "Chatgpt クローン",
    image: chatgpt,
    skills: "API",
    detail: "someapp",
    url: "https://www.google.com",
  },
  {
    name: "Facebook クローン",
    image: story,
    skills: "CRUD",
    detail: "someapp",
    url: "https://www.google.com",
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
