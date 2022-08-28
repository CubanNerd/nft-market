import React from 'react';

export default function TokenTraits() {
    return(
        <div className="metadata_traits">
            <div className="token__traitsH">
                <h5 className='headingv2'>traits</h5>
                <div className="traits__counter">4</div>
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
        </div>                            
    );
}