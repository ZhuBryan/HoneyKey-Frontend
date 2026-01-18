export function HoneycombBackground() {
  // Generate unique hexagon clusters with variations
  const clusters = [
    // Top left cluster
    {
      x: '5%',
      y: '8%',
      hexagons: [
        { rotation: 15, opacity: 0.15, size: 50, offsetX: 0, offsetY: 0 },
        { rotation: -10, opacity: 0.12, size: 42, offsetX: 55, offsetY: 12 },
        { rotation: 25, opacity: 0.13, size: 46, offsetX: 25, offsetY: 60 },
        { rotation: 5, opacity: 0.11, size: 38, offsetX: 75, offsetY: 65 },
      ]
    },
    // Top right cluster
    {
      x: '88%',
      y: '12%',
      hexagons: [
        { rotation: -20, opacity: 0.14, size: 52, offsetX: 0, offsetY: 0 },
        { rotation: 30, opacity: 0.12, size: 44, offsetX: -48, offsetY: 18 },
        { rotation: 10, opacity: 0.16, size: 48, offsetX: -18, offsetY: -52 },
        { rotation: -15, opacity: 0.11, size: 40, offsetX: 42, offsetY: 58 },
      ]
    },
    // Middle left cluster
    {
      x: '3%',
      y: '45%',
      hexagons: [
        { rotation: 35, opacity: 0.13, size: 46, offsetX: 0, offsetY: 0 },
        { rotation: -5, opacity: 0.15, size: 50, offsetX: 58, offsetY: -22 },
        { rotation: 20, opacity: 0.11, size: 40, offsetX: 28, offsetY: 52 },
        { rotation: -25, opacity: 0.14, size: 45, offsetX: 85, offsetY: 35 },
      ]
    },
    // Middle right cluster
    {
      x: '90%',
      y: '55%',
      hexagons: [
        { rotation: -30, opacity: 0.15, size: 48, offsetX: 0, offsetY: 0 },
        { rotation: 15, opacity: 0.12, size: 42, offsetX: -52, offsetY: 24 },
        { rotation: -10, opacity: 0.16, size: 51, offsetX: -24, offsetY: -48 },
        { rotation: 25, opacity: 0.11, size: 38, offsetX: 35, offsetY: 62 },
      ]
    },
    // Bottom left cluster
    {
      x: '8%',
      y: '82%',
      hexagons: [
        { rotation: 10, opacity: 0.16, size: 47, offsetX: 0, offsetY: 0 },
        { rotation: -20, opacity: 0.13, size: 44, offsetX: 48, offsetY: -18 },
        { rotation: 30, opacity: 0.14, size: 50, offsetX: 18, offsetY: -62 },
        { rotation: 5, opacity: 0.11, size: 40, offsetX: 68, offsetY: -40 },
      ]
    },
    // Bottom right cluster
    {
      x: '85%',
      y: '85%',
      hexagons: [
        { rotation: -15, opacity: 0.14, size: 45, offsetX: 0, offsetY: 0 },
        { rotation: 20, opacity: 0.16, size: 50, offsetX: -58, offsetY: -12 },
        { rotation: -5, opacity: 0.12, size: 41, offsetX: -28, offsetY: 52 },
        { rotation: 35, opacity: 0.11, size: 46, offsetX: -78, offsetY: 24 },
      ]
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {clusters.map((cluster, clusterIdx) => (
        <div
          key={clusterIdx}
          className="absolute"
          style={{
            left: cluster.x,
            top: cluster.y,
          }}
        >
          {cluster.hexagons.map((hex, hexIdx) => (
            <svg
              key={hexIdx}
              width={hex.size}
              height={hex.size}
              viewBox="0 0 100 100"
              className="absolute"
              style={{
                transform: `translate(${hex.offsetX}px, ${hex.offsetY}px) rotate(${hex.rotation}deg)`,
                opacity: hex.opacity,
              }}
            >
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="#C77A2E"
                stroke="#B86A1F"
                strokeWidth="1.5"
              />
            </svg>
          ))}
        </div>
      ))}
    </div>
  );
}