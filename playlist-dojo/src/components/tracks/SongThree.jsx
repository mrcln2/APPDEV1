function SongThree() {
  const title = 'Multo';
  const artist = 'Cup of Joe';
  const isAvailable = true;

  return (
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>
        {isAvailable ? 'Available to listen' : 'Not available'}
      </p>
    </div>
  );
}

export default SongThree;