import VerifiedIcon from "@material-ui/icons/CheckCircle";

import "../styles/Experience.css";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export const Badges = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(20, 57, 103)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０１２"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">高校生物理大会</h3>
            <p>３位</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０１８"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              日本語能力試験{" "}
            </h3>
            <p>N2級</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０１９"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">IELTS</h3>
            <p>6点</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０１９"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              第13回日本語弁論大会名護市{" "}
            </h3>
            <p>特別賞</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０２０"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">TOEIC</h3>
            <p>895</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０２１"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              Google IT Support Certificate
            </h3>
            <p>合格</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０２１"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              AZ-900: Microsoft Azure Fundamentals
            </h3>
            <p>合格</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０２１"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              Google IT Automation with Python Professional Certificate
            </h3>
            <p>合格</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０２２"
          iconStyle={{ background: "rgb(20, 57, 103)", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">
              AZ-104: Microsoft Azure Administrator
            </h3>
            <p>合格</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="２０２３"
          iconStyle={{ background: "#e9d35b", color: "white" }}
          icon={<VerifiedIcon />}
        >
          <div className="vertical-timeline-text-section">
            <h3 className="vertical-timeline-element--title">日本語能力試験</h3>
            <p>N1級</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
