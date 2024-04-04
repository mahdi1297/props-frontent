import { Card } from "UI/components/card";
import "./style.scss";
import { ProfileSidebar } from "features/profile/sidebar";

export const Profile = () => {
  return (
    <div className="container">
      <div className="page__wrapper profile__page-wrapper w-100">
        <div className="w-100 d-flex align-items-start justify-between gap-24">
          <div className="__sidebar">
            <ProfileSidebar />
          </div>
          <div className="main__field">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
