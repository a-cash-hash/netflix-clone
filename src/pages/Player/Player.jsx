import React, { useEffect, useState } from 'react'
import './Player.css'
import black_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });


  const isYouTube = id?.startsWith('youtube-');
  const youtubeId = isYouTube ? id.replace('youtube-', '') : null;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',

      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTk1YmE0ZTU4Y2NlM2NhNzliYWVhMjQ2NTRkNWMyMCIsIm5iZiI6MTc1Njc2NjU3OC41NzQwMDAxLCJzdWIiOiI2OGI2MjE3MjVkNGIyNmQ5NWQxNTg3MTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2Paq-vg2swcQbZtAhjoclY9Sk7PMrGtQuYtOojJSdfc'
    }
  };

  useEffect(() => {

    if (!isYouTube && id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => {
          const list = res.results || [];

          const first = list.find(
            v => v.site === 'YouTube' && (v.type === 'Trailer' || v.type === 'Teaser')
          ) || list[0];
          if (first) {
            setApiData(first);
          }
        })
        .catch(err => console.error(err));
    }
  }, [id, isYouTube]); 

  return (
    <div className='player'>
      <img
        src={black_arrow_icon}
        alt=""
        onClick={() => navigate(-1)}
        style={{ cursor: 'pointer' }}
      />
      <iframe
  width="90%"
  height="90%"
  src={
    isYouTube
      ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`
      : (apiData.key
          ? `https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=1&rel=0&modestbranding=1`
          : '')
  }
  title="trailer"
  frameBorder="0"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
  playsInline
/>


      {!isYouTube && (
        <div className="player-info">
          <p>{apiData.published_at?.slice(0, 10) || ""}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      )}
    </div>
  )
}

export default Player
