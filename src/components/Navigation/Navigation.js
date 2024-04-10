import { useAuth } from 'hooks';
import { AuthMenu } from './AuthMenu';
import { UserMenu } from './UserMenu';

export const Navigation = ({ isOpen }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <UserMenu isOpen={isOpen} /> : <AuthMenu isOpen={isOpen} />}
    </>
  );
};
