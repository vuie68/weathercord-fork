import UserIndicatorClient from "./UserIndicatorClient";
import UserIndicatorSmall from "./UserIndicatorSmall";

const UserIndicator = (props: Record<string, any> & {
  avatar: string,
  canEdit: boolean,
  displayName: string,
  splash?: string,
  username: string
}) => {
  return (
    <UserIndicatorClient>
      <UserIndicatorSmall {...props} />
    </UserIndicatorClient>
  );
};

export default UserIndicator;
