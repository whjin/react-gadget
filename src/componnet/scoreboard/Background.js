export default function Background ({ position }) {
  return (
    <div style={{
      position: 'absolute',
      transform: `transition(${position.x}px),${position.y}px`,
      width: 200,
      height: 200,
      backgroundColor: 'rgba(200,200,0,0.2)'
    }}></div>
  );
}