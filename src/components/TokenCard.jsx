import React from 'react';
import TokenTraits from './TokenTraits';
import TokenImg from '../assets/images/alpha1.png';
import EtherscanToken from "../assets/images/etherscan.svg";
import Ipfs from "../assets/images/eye.svg";
import EthereumLogo from "../assets/images/ethereum.svg";


export default function TokenCard() {
    return(
        <div className="token__container">
            <div className="token__image">
                <img src={TokenImg} alt="Token Image" />
            </div>
            
            <div className="token__info">
                <div className="token__info__element">
                    <div className="token__name">
                        <h1>α1</h1>
                    </div>
                    <div className="token__description">
                        <p>A patch of beautiful oversized red flowers deep inside a subterranean cave.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="token__metadata">
                        <TokenTraits />
                        <div className="token__details">
                            <div className="token_detailElement">
                                <img src={EtherscanToken} alt="View on Etherscan" className='token__icons'/>
                                 View on Etherscan
                            </div>
                            <div className="token_detailElement">
                                <img src={Ipfs} alt="Open Original on ipfs" className='token__icons'/> 
                                 open original on ipfs
                            </div>
                            <div className="token_detailElement">
                            <img src={EthereumLogo} alt="Ethereum Erc 271" className='token__icons'/> 
                                 ethereum – erc-721
                            </div>
                            <div className="divider"></div>
                            <div className="token_detailElement">refresh</div>

                        </div>
                    </div>
                </div>

                <div className="token__info__element">
                    <h5>Current Owner</h5>
                    <small>0x11f84d5dc8455b091d28567bea3c486311b7a9a6</small>
                    <div className="divider"></div>
                    <div className="token__actions">
                        <small>share and refresh</small>
                    </div>
                    <div className="token__price">
                        <div className='trait__name'>
                            price
                        </div>
                        <div className="token__eth">
                            0.1 eth
                        </div>
                        <div className="token__fiat">
                            $111.11
                        </div>
                    </div>
                    <div className="token__value">
                        <div className="token__price"></div>
                        <div className="token__auction"></div>
                    </div>
                    <button className="token__btn">buy now for 0.1 eth</button>
                    <button className="token__btn">place a bid</button>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
}