import ReactPageScroller from "react-page-scroller";
import style from "./Main.module.css";
import { useState } from "react";
import FoodCard from "./component/FoodCard";
import axios from "axios";
import baechu from "./img/baechu.png";
import bell from "./img/bell.png";
import { tSTypeLiteral } from "@babel/types";

export default function Main() {
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (e) => {
    window.scrollTo(0, document.body.scrollHeight);
    axios
      .post("url", {
        userInput: "",
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const tlist = [1, 1, 1];
  return (
    <>
      {/* <ReactPageScroller transitionTimingFunction={"cubic-bezier(0.5,0,0.5,1)"}> */}
      <section id={`${style.mainSection}`} className={`${style.fullpage}`}>
        <div>
          <p className={`${style.mainMent}`}>먹고싶은 음식의</p>
          <p className={`${style.mainMent}`}>특징을 입력하면</p>
          <p className={`${style.mainMent}`}>배달음식을</p>
          <p className={`${style.mainMent}`}>추천해드립니다</p>
        </div>
        <img src={baechu} alt="baechu" />
      </section>
      <section id={`${style.inputSection}`} className={`${style.fullpage}`}>
        <form className={`${style.featureForm}`}>
          <div className={`${style.inputArea}`}>
            <input
              type="text"
              spellCheck={false}
              placeholder="매콤한 거"
              className={`${style.input}`}
            />
            <span className={`${style.ment}`}>먹고싶어요</span>
          </div>
          <div className={style.submitBox} onClick={onSubmit}>
            <p className={style.submitMent}>주문!</p>
            <img src={bell} alt="bell" className={style.bell} />
          </div>
          {/* <input
            type="button"
            value="확인하기!"
            className={`${style.submit}`}
            onClick={onSubmit}
          /> */}
        </form>
      </section>
      {isSubmit || (
        <section id={style.resultSection} className={`${style.fullpage}`}>
          <div className={`${style.resultContainer}`}>
            <div className={`${style.mentBox}`}>
              <img className={`${style.mascot}`} src={baechu} alt="배추" />
              <p className={style.rSecMent}>추천합니다!</p>
            </div>
            <div className={`${style.cardBox}`}>
              {tlist.map((t, i) => (
                <FoodCard key={i} />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* </ReactPageScroller> */}
    </>
  );
}
