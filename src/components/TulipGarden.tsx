import Tulip from './Tulip';

const TulipGarden = () => {
  const tulips = [
    { delay: 200, left: '5%', height: '120px', color: 'pink' as const },
    { delay: 400, left: '10%', height: '140px', color: 'red' as const },
    { delay: 100, left: '15%', height: '100px', color: 'light' as const },
    { delay: 600, left: '20%', height: '130px', color: 'pink' as const },
    { delay: 300, left: '25%', height: '110px', color: 'red' as const },
    { delay: 500, left: '30%', height: '145px', color: 'light' as const },
    { delay: 200, left: '35%', height: '125px', color: 'pink' as const },
    { delay: 700, left: '40%', height: '135px', color: 'red' as const },
    { delay: 400, left: '45%', height: '115px', color: 'light' as const },
    { delay: 150, left: '50%', height: '140px', color: 'pink' as const },
    { delay: 550, left: '55%', height: '120px', color: 'red' as const },
    { delay: 350, left: '60%', height: '130px', color: 'light' as const },
    { delay: 250, left: '65%', height: '145px', color: 'pink' as const },
    { delay: 650, left: '70%', height: '110px', color: 'red' as const },
    { delay: 450, left: '75%', height: '125px', color: 'light' as const },
    { delay: 300, left: '80%', height: '135px', color: 'pink' as const },
    { delay: 500, left: '85%', height: '115px', color: 'red' as const },
    { delay: 100, left: '90%', height: '140px', color: 'light' as const },
    { delay: 600, left: '95%', height: '120px', color: 'pink' as const },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
      {tulips.map((tulip, index) => (
        <Tulip key={index} {...tulip} />
      ))}
    </div>
  );
};

export default TulipGarden;
