import React from "react";
import { useState } from "react";
import '../campaign_row/campaign_row.css';
import Influence from '../influence/influence';

const CampaignRow = ({ campaign }) => {

    return (
        <tr>
            <td>
                <div className="campaign-info">
                    <span className="icon campaign-icon-a"></span>
                    <div>
                        <span className="campaign-name">{campaign.name}</span>
                        <span className={`status ${campaign.status.toLowerCase()}`}>
                            {campaign.status}
                        </span>
                        <span className="date">{campaign.date}</span>
                    </div>
                </div>
            </td>
            <td>{campaign.budget}</td>
            <td>{campaign.allocation}</td>
            <td>{campaign.impressions}</td>
            <td>{campaign.timeline}</td>
            <td>
            <Influence influencers={campaign.influencers} />
            </td>
        </tr>
    );
}

export default CampaignRow;