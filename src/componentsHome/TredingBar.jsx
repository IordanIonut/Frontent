import React from "react";
import FeatureCard from "../components/feature-card";
import FilreCard from "../components/filre-card";
import Music from "../components/music";
import Music1 from "../components/music1";
import Home from "../views/home";
import '../views/home.css'

const TredingBar = (props)=>{
    return(
      <section className="home-treding"style={{display: 'flex'}}>
      <span className="home-text47 text">
        <span>Trending Now</span>
        <br></br>
      </span>
      <div className="home-share5 posibili buttonChange">
        <button className="home-button29 button">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="home-icon084"
          >
            <path d="M877.714 128v640c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-306.857l-438.857 135.429v405.143c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-552.571c0-24 16-45.143 38.857-52.571l475.429-146.286c5.143-1.714 10.286-2.286 16-2.286 30.286 0 54.857 24.571 54.857 54.857z"></path>
          </svg>
        </button>
      </div>
      <div className="home-play-list09 posibili buttonChange">
        <svg viewBox="0 0 1024 1024" className="home-icon086">
          <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
        </svg>
      </div>
      <div className="home-like4 posibili buttonChange">
        <svg viewBox="0 0 1024 1024" className="home-icon088">
          <path d="M384 426l298 172-298 170v-342zM896 854v-512h-768v512h768zM896 256q36 0 61 25t25 61v512q0 34-26 59t-60 25h-768q-34 0-60-25t-26-59v-512q0-36 25-61t61-25h324l-140-140 30-30 170 170 170-170 30 30-140 140h324z"></path>
        </svg>
      </div>
      <div className="home-list5 music-list">
        <Music rootClassName="music-root-class-name20"></Music>
        <Music rootClassName="music-root-class-name20"></Music>
        <Music rootClassName="music-root-class-name20"></Music>
        <Music rootClassName="music-root-class-name20"></Music>
        <Music rootClassName="music-root-class-name20"></Music>
        <Music rootClassName="music-root-class-name20"></Music>
      </div>
      <span className="home-text50 text">
        <span>Treding Gen</span>
        <br></br>
        <br></br>
      </span>
      <div className="home-card7 music-card">
        <FilreCard rootClassName="filre-card-root-class-name7"></FilreCard>
        <FilreCard rootClassName="filre-card-root-class-name7"></FilreCard>
        <FilreCard rootClassName="filre-card-root-class-name7"></FilreCard>
        <FilreCard rootClassName="filre-card-root-class-name7"></FilreCard>
        <FilreCard rootClassName="filre-card-root-class-name7"></FilreCard>
      </div>
    </section>
    )
}
export default TredingBar