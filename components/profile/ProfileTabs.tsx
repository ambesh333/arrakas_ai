// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import TokensSection from './TokensSection';
// import HistorySection from './HistorySection';
import NoiseWrapper from '../ui/noise-wrapper';

const ProfileTabs = () => {
  return (
          <NoiseWrapper 
      className='rounded-2xl'
      opacity={0.1}
    >
    <div className="w-full min-h-[520px] max-w-5xl mx-auto bg-zinc-900/70 rounded-2xl p-5 shadow-xl flex flex-col justify-center items-center">
    <TokensSection />
    {/* <Tabs defaultValue="tokens" className="w-full">
      <TabsList className="mx-auto mb-4 flex justify-center bg-zinc-900/80 p-2 rounded-xl gap-4 text-lg min-h-[56px]">
        <TabsTrigger value="tokens" className="px-5 py-3 text-xl">Tokens</TabsTrigger>
        <TabsTrigger value="history" className="px-5 py-3 text-xl">History</TabsTrigger>
      </TabsList>

     
        <TabsContent value="tokens" className="w-full h-full">
          <TokensSection />
        </TabsContent>
        <TabsContent value="history" className="w-full h-full">
          <HistorySection />
        </TabsContent>
    </Tabs> */}
      </div>
      </NoiseWrapper>
  );
};

export default ProfileTabs; 