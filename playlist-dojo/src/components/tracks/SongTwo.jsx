function SongTwo() {
  const title = 'Who Knows';
  const artist = 'Daniel Caesar';

  const description = `${title} by ${artist}`;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SongTwo;