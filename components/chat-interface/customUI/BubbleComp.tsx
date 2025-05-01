import { memo, useEffect, useState } from 'react';

interface BubbleChartProps {
    contractAddress: string;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ contractAddress }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-96 relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
      <div className="flex w-full h-full min-w-[700px]  min-h-[400px] flex-col">
         <iframe src="https://app.bubblemaps.io/bsc/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95" />
      </div>
    </div>
  );
};

export default memo(BubbleChart);