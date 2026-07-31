import './SongList.css';

import SongOne from './SongOne';
import SongTwo from './SongTwo';
import SongThree from './SongThree';
import Divider from '../Divider';

function SongList() {
  return (
    <main className="song-list">
      <SongOne />
      <Divider />
      <SongTwo />
      <Divider />
      <SongThree />
    </main>
  );
}

export default SongList;