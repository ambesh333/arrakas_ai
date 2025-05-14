import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileTabs from '@/components/profile/ProfileTabs';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-transparent py-8 px-2">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Profile;