import React, { useRef } from "react";
import "./Spotify.css";

const Spotify = () => {
  const containerRef = useRef(null);

  const handleImageLoad = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="spotify-container" ref={containerRef}>
      <div>
        <img
          onLoad={handleImageLoad}
          width="875px"
          src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=31ear2ooejwizlhlrvhnkeuqfviy"
          alt="Data Card for Spotify"
        />
      </div>
      <div>
        <table>
          <tr>
            <td>
              <img
                onLoad={handleImageLoad}
                alt="Spotify"
                height="400px"
                src="https://spotify-github-profile.kittinanx.com/api/view?uid=31ear2ooejwizlhlrvhnkeuqfviy&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false"
              />
            </td>
            <td>
              <img
                onLoad={handleImageLoad}
                alt="Spotify list"
                height="400px"
                src="https://spotify-recently-played.jeffreyca.workers.dev/svg?user=31ear2ooejwizlhlrvhnkeuqfviy&amp;count=10&amp;width=540&amp;radius=40&amp;unique=1&amp;duration=1&amp;album=1&amp;footer=wave"
              />
            </td> 
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Spotify;
