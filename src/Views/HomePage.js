import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { connectProvider } from '../Actions/web3Wrapper';
import HeaderComponent from '../Components/HeaderComponent';
import FlashLoanComponent from '../Components/FlashLoanComponent';

function HomePage() {

  const dispatch = useDispatch()
  const web3 = useSelector(state => state.web3Wrapper.web3)
  const isNetworkSupported = useSelector(state => state.web3Wrapper.isNetworkSupported)
  const supportedNetwork = useSelector(state => state.web3Wrapper.supportedNetwork)

  const sendTX = () => {
    let amount = web3.utils.toWei("1", "ether");
    web3.eth.sendTransaction({ from:"0xA5403cECD0F4Ffd25B5b86BCF1d2b8FD5CF7474d", to:"0xA5403cECD0F4Ffd25B5b86BCF1d2b8FD5CF7474d", value:amount });
  }

  let mainContent = (
    <div className="body">
      <FlashLoanComponent />
    </div>
  );

  if (!isNetworkSupported) {
    mainContent = (
    <div className="network-not-supported-body"><h1>Please switch to {supportedNetwork}</h1></div>
    );
  }

  return (
    <div className="home-page">
      <HeaderComponent />
      {mainContent}
    </div>
  );
}

export default HomePage;
