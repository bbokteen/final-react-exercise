// 1a
import './MCUShows.css'
// 1b
const MCUShows = ({ dates, randomIndex }) => {
  // 6f
  const getAvenger = () => randomIndex();
  // 1c
  return (
    // 4a
    <div className='MCUShows'>
      {/* 3a */}
      <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
      <h2>Upcoming MCU Show Release Dates</h2>
      <p>WandaVision: {dates.wandaVision}</p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
      <p>Loki: {dates.loki}</p>
      <p>Hawkeye: {dates.hawkeye}</p>
      {/* 6e */}
      <button onClick={getAvenger}>RANDOM AVENGER</button>
    </div>
  );
}
// 1d
export default MCUShows;