import { PLAYLIST_NAME, CURATOR } from '../constants';

function Title() {
  return (
    <>
      <h1>{PLAYLIST_NAME}</h1>
      <p>Curated by {CURATOR}</p>
    </>
  );
}

export default Title;