import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(20, 57, 103)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０１６〜"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              モンゴル科学技術大学入学
            </h3>
            <p>ソフトウエアエンジニア学科</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０１７（二週間）"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              School of International Educaiton of Tianjin Polytechnic
              University
            </h3>
            <p>中国初級</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０１８〜"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              沖縄工業高等専門学校入学
            </h3>
            <p>メデイアIT情報工学科</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="２０２０（二週間）"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              ChatBot Mongolia株式会社
            </h3>
            <p>インターンシップ</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="２０２０（1ヶ月）"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              King Mongkut University of North Bangkok Thailand
            </h3>
            <p>インターンシップ</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="〜２０２１"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              沖縄工業高等専門学校卒業
            </h3>
            <p>メデイアIT情報工学科</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="〜２０２２"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              モンゴル科学技術大学卒業
            </h3>
            <p>ソフトウエアエンジニア学科</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="２０２１〜２０２３"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              ソフトウエアエンジニア
            </h3>
            <p>モビネット株式会社</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="２０２３~現在"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<WorkIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              ソフトウエアエンジニア
            </h3>
            <p>ビーネックストテクノロジーズ</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
