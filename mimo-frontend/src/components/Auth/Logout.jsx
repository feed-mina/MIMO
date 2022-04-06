import React from "react";
import { authService } from "../../fbase";

function Logout() {
  const onLogoutClick = () => authService.signOut();

  return (
    <div>
      <button onClick={onLogoutClick}></button>
    </div>
  );
}

export default Logout;
