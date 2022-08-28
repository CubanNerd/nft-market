import React from 'react';
import Footer from './Footer';
import TokenImg from '../assets/images/alpha1.png'

export default function TokenCard() {
    return(
        <div className="token__container">
            <div className="token__image">
                <img src={TokenImg} alt="Token Image" />
            </div>
            
            <div className="token__info">
                <div className="token__metadata">
                    <div className="token__name">
                        <h1>α1</h1>
                    </div>
                    <div className="token__description">
                        <p>A patch of beautiful oversized red flowers deep inside a subterranean cave.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="token__metadata">
                        <div className="token__traitsH">
                            <h5 className='headingv2'>traits</h5>
                            <div className="trains__counter">4</div>
                        </div>
                        <div className="token__traits">
                            <div className="token__trait">
                                <div className="trait__name">Author</div>
                                <div className="trait__description">Cuban Nerd</div>
                                <div className="trait__rarity">100% rarity</div>
                            </div>
                            <div className="token__trait">
                                <div className="trait__name">series</div>
                                <div className="trait__description">Natur Dreamscapes</div>
                                <div className="trait__rarity">100% rarity</div>
                            </div>
                            <div className="token__trait">
                                <div className="trait__name">flora</div>
                                <div className="trait__description">red flower</div>
                                <div className="trait__rarity">100% rarity</div>
                            </div>
                            <div className="token__trait">
                                <div className="trait__name">background</div>
                                <div className="trait__description">Cave</div>
                                <div className="trait__rarity">50% rarity</div>
                            </div>
                        </div>
                        <div className="token__details">
                            <div className="token_detailElement">View on Etherscan</div>
                            <div className="token_detailElement">open original on ipfs</div>
                            <div className="token_detailElement">ethereum – erc-721</div>
                            <div className="divider"></div>
                            <div className="token_detailElement">refresh</div>

                        </div>
                    </div>
                </div>

                <div className="token__transactionInfo">
                    <h4>Current Owner</h4>
                    <p>0x11f84d5dc8455b091d28567bea3c486311b7a9a6</p>
                    <div className="divider"></div>
                    <div className="token__actions">
                        <small>share and refresh</small>
                    </div>
                    <div className="token__value">
                        <div className="token__price"></div>
                        <div className="token__auction"></div>
                    </div>
                    <button className="token__btn">buy now for 0.1 eth</button>
                    <button className="token__btn">place a bid</button>
                </div>
            </div>
        </div>
    );
}