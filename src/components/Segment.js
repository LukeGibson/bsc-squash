const Segment = ({segmentIndex, title}) => {
  const segmentStyleType = segmentIndex%2 === 0 ? 'segment-even' : 'segment-odd';

  return (
    <div className={`segment ${segmentStyleType}`}>
      <div className='container'>
        <h2>{title}</h2>
        <br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsum aut unde explicabo deleniti amet eum quisquam? Non, unde eligendi laborum, qui repellendus ad, at ullam fuga explicabo placeat accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique vitae numquam pariatur nostrum ad. Ab temporibus nemo veniam quia iste. Voluptatibus pariatur, odit accusantium voluptatum debitis officiis reprehenderit tempore!</p>
      </div>
    </div>
  );
}
 
export default Segment;