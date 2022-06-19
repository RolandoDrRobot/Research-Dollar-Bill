import React from 'react';
import metamaskIcon from '../../assets/img/metamask.png';
import newsIcon from '../../assets/img/newsIcon.png';
import marketIcon from '../../assets/img/marketIcon.png';
import logoutWalletIcon from '../../assets/img/off.png';
import Loading from '../../components/Loading/index';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../config/connector';

import './main.css';

function Header() {

  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { active, activate, deactivate } = useWeb3React();

  async function connect() {
    setIsLoading(true);
    try {
      await activate(injected);
      localStorage.setItem('isWalletConnected', 'true');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  async function disconnect() {
    setIsLoading(true);
    try {
      await deactivate();
      localStorage.setItem('isWalletConnected', 'false');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  return (
    <>{(active)
        ? <div className="header d-flex justify-content-between">
            <div className="wallet-info d-flex justify-content-between">
              <div className="wallet-logout d-flex align-items-center" onClick={disconnect}>
                <span className="status connected"></span>
                <img src={logoutWalletIcon} alt="" />
              </div>
            </div>
            <div className="side-options d-flex align-items-center justify-content-end">
              <Link to="/market" className="button market-icon">
                <img src={marketIcon} alt="" />
              </Link>
              <Link to="/news" className="button news-icon">
                <img src={newsIcon} alt="" />
              </Link>
            </div>
          </div>
        : isLoading === true 
        ? <Loading /> 
        : <button className="main-button d-flex align-items-center justify-content-center m-0" onClick={connect}>
            <img src={metamaskIcon} alt="" />
            Connect your wallet
          </button>
      }
      
    </>
  )
}

export default Header;
