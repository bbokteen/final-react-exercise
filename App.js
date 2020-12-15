// 6a
import { useState } from 'react'
// 2a
import MCUShows from './mcu-shows/MCUShows'
// 5a
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'May 2021',
  hawkeye: 'Fall of  2021'
 };
// 6b
 const avengers = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Hawkeye'
 ];
function App() {
  // 6c
  const [index, setIndex] = useState(0);
  // 6f
  const randomIndex = () => {
    const newIndex =  Math.floor(Math.random() * 5);
    setIndex(newIndex);
  }
  return (
    <div>
      {/* 2b */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c & 5b */}
      <MCUShows dates={releaseDates} randomIndex={randomIndex} />
      {/* 6d */}
      <h1>{avengers[index]}</h1>
    </div>
  );
}
export default App;
