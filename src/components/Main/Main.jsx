import "./Main.css";
import { assets } from "./../../assets/assets";
import { useContext } from "react";
import { Context } from "./../../context/Context";
const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <div className="title">
          <p>Gemini</p>
          <img src={assets.down_icon} alt="" />
        </div>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Thao</span>
              </p>
              <p>How can I help you to day?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <>
              <div className="result-title">
                <img src={assets.user_icon} alt="User" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && input !== "") {
                  onSent();
                }
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="input-icon">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                hidden={input === ""}
                onClick={() => {
                  onSent();
                }}
                src={assets.send_icon}
                alt="Send"
              />
            </div>
          </div>
          <div className="bottom-nav">
            <p>
              Gemini có thể đưa ra thông tin không chính xác, kể cả thông tin về
              con người, vì vậy, hãy xác minh các câu trả lời của Gemini.
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638545885608700595-3134131404&p=privacy_notice&rd=1#privacy_notice">
                <span>Quyền riêng tư của bạn và Các ứng dụng Gemini</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
