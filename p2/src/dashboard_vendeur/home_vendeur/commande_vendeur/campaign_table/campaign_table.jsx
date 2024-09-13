import React from "react";
import '../campaign_table/campaign_table.css';
import FilterBar from '../filter_bar/filter_bar';
import CampaignRow from '../campaign_row/campaign_row';

const CampaignTable = () => {
    const campaigns = [
        {
          name: "Bawin Elvira",
          status: "Non Actif",
          date: "le 11 Septembbre 2024 à 11h45",
          budget: "360 000fr",
          allocation: "340 000fr",
          impressions: "client satisfait",
          timeline: "Livraison terminé",
          influencers: ["influencer1.jpg", "influencer2.jpg", "influencer3.jpg"]
        },
        {
            name: "Allontcho Abbé",
            status: "Non Actif",
            date: "le 10 Septembre 2024 à 10h35",
            budget: "60 00fr",
            allocation: "55 000fr",
            impressions: "client non satisfait",
            timeline: "Livraison terminé",
            influencers: ["influencer1.jpg", "influencer2.jpg", "influencer3.jpg"]
          },
          {
              name: "Akivili Yann Alex",
              status: "Active",
              date: "Aujourd'hui, le 14 Septembre 2024 à 07h12",
              budget: "1 000 000",
              allocation: "970 000",
              impressions: "Avis non enregistré",
              timeline: "En cours de Livraison",
              influencers: ["influencer1.jpg", "influencer2.jpg", "influencer3.jpg"]
            },
            {
                name: "Boris Fulgence",
                status: "Non Actif",
                date: "le 10 Septembre 2024 à 10h35",
                budget: "250 000fr",
                allocation: "245 000fr",
                impressions: "Client Satisfait",
                timeline: "Livraison terminé",
                influencers: ["influencer1.jpg", "influencer2.jpg", "influencer3.jpg"]
              },
              {
                  name: "Arnaud Junior",
                  status: "Non Actif",
                  date: "le 2 Septembre 2024",
                  budget: "2 000 000fr",
                  allocation: "1 990 000fr",
                  impressions: "Client Satisfait",
                  timeline: "Livraison terminé",
                  influencers: ["influencer1.jpg", "influencer2.jpg", "influencer3.jpg"]
                },
        // Ajoutez d'autres campagnes ici
      ];

    return (
        <div className="container">
            <table className="campaign-table">
                <thead>
                    <tr>
                        <th>Nom utilisateur</th>
                        <th>Prix de la commande</th>
                        <th>Revenue</th>
                        <th>Impressions</th>
                        <th>Temps de Livraison</th>
                        <th>Etat de la commande</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign, index) => (
                        <CampaignRow key={index} campaign={campaign} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CampaignTable;