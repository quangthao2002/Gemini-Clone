import { useContext, useState } from "react";
import { assets } from "./../../assets/assets";
import "./SideBar.css";
import { Context } from "../../context/Context";
const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    await onSent(prompt);
  };

  return (
    <div>
      <div className="sidebar">
        <div className="top">
          <img
            className="menu"
            src={assets.menu_icon}
            alt=""
            onClick={() => {
              setExtended((pre) => !pre);
            }}
          />
          <div
            className="new-chat"
            onClick={() => {
              newChat();
            }}
          >
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <div className="recent-title">Recent</div>
              {prevPrompts.map((item, index) => {
                return (
                  <div
                    className="recent-entry"
                    key={index}
                    onClick={() => loadPrompt(item)}
                  >
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>History</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
