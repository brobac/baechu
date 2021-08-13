import ReactPageScroller from "react-page-scroller";
import IntroduceSection from "./component/IntroduceSection";
import UserInputSection from "./component/UserInputSection";
import ResultSection from "./component/ResultSection";
import style from "./Main.module.css";
export default function Main() {
  return (
    <>
      <ReactPageScroller transitionTimingFunction={"cubic-bezier(0.5,0,0.5,1)"}>
        <section className={`${style.fullpage}`}>1</section>
        <section id={`${style.inputSection}`} className={`${style.fullpage}`}>
          <form>
            <div className={`${style.inputArea}`}>
              <input
                type="text"
                spellCheck={false}
                placeholder="매콤한 거"
                className={`${style.input}`}
              />
              <span className={`${style.ment}`}>먹고싶어요</span>
            </div>
            <input
              type="submit"
              value="확인하기!"
              className={`${style.submit}`}
            />
          </form>
        </section>
        <section></section>
      </ReactPageScroller>
    </>
  );
}
