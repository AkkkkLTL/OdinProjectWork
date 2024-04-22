import { SiderBarStyle } from "../../styles/dashboard/style";

export default function SiderBar() {
  return (
    <SiderBarStyle>
      <div className="head">
        <img src="./src/assets/icons/view-dashboard.svg" />
        <div>Dashboard</div>
      </div>
      <div className="function">
        <div className="item">
          <img src="./src/assets/icons/home.svg"/>
          <div>Home</div>
        </div>
        <div className="item">
          <img src="./src/assets/icons/card-account-details-outline.svg"/>
          <div>Profile</div>
        </div>
        <div className="item">
          <img src="./src/assets/icons/message-reply.svg"/>
          <div>Messages</div>
        </div >
        <div className="item">
          <img src="./src/assets/icons/history.svg"/>
          <div>History</div>
        </div>
        <div className="item">
          <img src="./src/assets/icons/calendar-check-outline.svg" />
          <div>Tasks</div>
        </div>
        <div className="item">
          <img src="./src/assets/icons/account-multiple.svg"/>
          <div>Communities</div>
        </div>
      </div>
      <div className="setting">
        <div className="item">
          <img src="./src/assets/icons/cog.svg"/>
          <div>Settings</div>
        </div>
        <div className="item">
          <img src="./src/assets/icons/help-box-outline.svg"/>
          <div>Support</div>
        </div>
        <div className="item">
          <img src="./src/assets/icons/security.svg"/>
          <div>Privacy</div>
        </div>
      </div>
    </SiderBarStyle>
  );
}