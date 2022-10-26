import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useRedirect from 'hooks/useRedirect.jsx';

const UserPanel = () => {
  const blockName = 'user-panel';
  const { loggedUserId } = useSelector((store) => store.user);

  useRedirect({ path: '/', shouldRedirect: !loggedUserId });

  return (
    <div className={blockName}>
      <div className={`${blockName}__action-toggler-wrapper`}>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="data" className={`${blockName}__action-tile-link`}>
            Moje dane
          </Link>
        </div>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="history" className={`${blockName}__action-tile-link`}>
            Historia
          </Link>
        </div>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="change-password" className={`${blockName}__action-tile-link`}>
            Zmień hasło
          </Link>
        </div>
      </div>
      <div className={`${blockName}__action-wrapper`}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserPanel;