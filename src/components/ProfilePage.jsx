import { useParams } from 'react-router-dom';
import FriendProfile from './friends';
import NotFound from './NotFound';

const ProfilePage = ({ friendsData, loading, onBack, onInteraction }) => {
  const { id } = useParams();
  const friendId = parseInt(id, 10);
  const friend = friendsData.find(f => f.id === friendId);

  if (!friend) {
    return <NotFound />;
  }

  return (
    <FriendProfile
      friend={friend}
      loading={loading}
      onBack={onBack}
      onInteraction={(type) => onInteraction(friendId, type)}
    />
  );
};

export default ProfilePage;