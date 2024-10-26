import React from 'react';

const CircleOverlay = () => {
  const styles = {
    item: {
      boxShadow: 'inset var(--itemWidthMinus) var(--itemWidthMinus) 0 white, inset var(--itemWidth) var(--itemWidthMinus) 0 green, inset var(--itemWidthMinus) var(--itemWidth) 0 blue, inset var(--itemWidth) var(--itemWidth) 0 yellow, 0 0 20px silver',
      transition: 'box-shadow ease-in-out .6s, color ease-in-out .5s',
      width: 'var(--itemWidth)',
      height: 'var(--itemWidth)',
      borderRadius: '50%',
      textAlign: 'center',
      background: 'center/80% no-repeat',
      cursor: 'pointer',
      display: 'grid',
      color: 'white', 
      fontSize: 'calc(var(--itemWidth) / 7)',
      placeItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    itemHover: {
      boxShadow: 'inset 0 0 0 transparent, inset 0 0 0 transparent, inset 0 0 0 transparent, inset 0 0 0 transparent, 0 0 20px silver',
      color: 'transparent',
    },
    section: {
      '--itemWidth': 'min(300px, 30vw)',
      '--itemWidthMinus': 'calc(-1 * var(--itemWidth))',
      height: 'max-content',
      width: 'max-content',
      display: 'grid',
      gridTemplateRows: 'repeat(2, max-content)',
      gridTemplateColumns: 'repeat(3, calc(3vw + var(--itemWidth)))',
      gap: '2rem',
      placeItems: 'center',
      textAlign: 'center',
    },
    span: {
      width: '80%',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '0 10px',
      fontSize: '2.5rem',
      zIndex: 2,
      color: 'black', 
    },
    title: {
      marginTop: '10px',
      fontSize: '1.2rem',
      color: 'white', 
      textAlign: 'center',
    },
    h3: {
      gridRow: '1 / 2',
      gridColumn: '1 / 4',
      height: '60px',
      width: '100%',
      textAlign: 'center',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: '500',
      color: 'white', 
    },
    wrapper: {
      display: 'grid',
      height: '70vh',
      placeItems: 'center',
      margin: '0',
      padding: '0',
      width: '100%',
      textAlign: 'center',
      backgroundColor: '#27272A', 
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
  };

  const newspapers = [
    {
      name: "֎",
      logo: "/ai.png",
      title: "Artificial Intelligence"
    },
    {
      name: "</>",
      logo: "/webdev.jpg",
      title: "Web Development"
    },
    {
      name: "☏",
      logo: "/appdev.jpeg",
      title: "App Development"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <section style={styles.section}>
          <h3 style={styles.h3}>Domains Worked On</h3>

          {newspapers.map((paper, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div
                style={{
                  ...styles.item,
                  ...(hoveredIndex === index && styles.itemHover),
                  backgroundImage: `url(${paper.logo})`
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span style={styles.span}>{paper.name}</span>
              </div>
              <div style={styles.title}>{paper.title}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CircleOverlay;
