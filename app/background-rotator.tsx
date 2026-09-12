const backgrounds = [
  "/images/user-dotonbori-night.jpg",
  "/images/user-namba-station.jpg",
  "/images/user-osaka-station.jpg",
  "/images/user-umeda-sunset.jpg",
];

export default function BackgroundRotator() {
  return (
    <div className="site-background-rotator" aria-hidden="true">
      {backgrounds.map((src) => (
        <div
          key={src}
          className="site-background-rotator__layer"
          style={{
            backgroundImage: `linear-gradient(108deg, rgba(4, 8, 15, 0.62), rgba(4, 8, 15, 0.20) 52%, rgba(4, 8, 15, 0.46)), url('${src}')`,
          }}
        />
      ))}
    </div>
  );
}
