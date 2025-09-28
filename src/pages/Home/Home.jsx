import React, { useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'   

const Home = () => {
  const navigate = useNavigate();                 
  const HERO_YT_ID = '-G9BqkgZXRA'         

  const [showInfo, setShowInfo] = useState(false);  

  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            Adapted from Masashi Kishimoto's long-running manga, this sprightly,
            kick-butt anime series about a boy and his spirit demon became a global phenomenon.
          </p>

          <div className="hero-btns">

            <button
              className='btn'
              onClick={() => navigate(`/player/youtube-${HERO_YT_ID}`)}
            >
              <img src={play_icon} alt="" />Play
            </button>

            <button
              className='btn dark-btn'
              onClick={() => setShowInfo(v => !v)}           
              aria-expanded={showInfo}
              aria-controls="hero-moreinfo"
            >
              <img src={info_icon} alt="" />
              {showInfo ? 'Hide Info' : 'More Info'}
            </button>
          </div>

          {showInfo && (
            <div id="hero-moreinfo" className="hero-moreinfo">
              <h3>About Naruto</h3>
              <p>
                Naruto Uzumaki dreams of becoming the Hokage — the strongest ninja and leader of his village.
                With an ancient Nine-Tails spirit sealed inside him, he trains, bonds with teammates Sasuke and Sakura,
                and faces rival clans and rogue shinobi.
              </p>
              <ul>
                <li><strong>Creator:</strong> Masashi Kishimoto</li>
                <li><strong>Genres:</strong> Action · Adventure · Shōnen</li>
                <li><strong>Watch for:</strong> iconic battles, heartfelt friendships, epic training arcs</li>
              </ul>
            </div>
          )}

          <TitleCards/>
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
