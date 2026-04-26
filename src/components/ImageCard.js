function ImageCard({ image }) {
  return (
    <div className="card">
      <img src={image.src} alt={image.title} />
      <h3>{image.title}</h3>
    </div>
  );
}

export default ImageCard;