import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MTB</span>
        <span className="headerTitleLg">Rumors</span>
      </div>
      <img
        className="headerImg"
        src="https://c8.alamy.com/comp/2EBYHDK/britain-soccer-football-manchester-united-v-manchester-city-premier-league-old-trafford-10916-manchester-uniteds-luke-shaw-in-action-with-manchester-citys-raheem-sterling-action-images-via-reuters-carl-recine-livepic-editorial-use-only-no-use-with-unauthorized-audio-video-data-fixture-lists-clubleague-logos-or-live-services-online-in-match-use-limited-to-45-images-no-video-emulation-no-use-in-betting-games-or-single-clubleagueplayer-publications-please-contact-your-account-representative-for-further-details-2EBYHDK.jpg"
        alt="img"
      />
    </div>
  );
}

export default Header;
