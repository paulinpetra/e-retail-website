export default function Hero() {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
