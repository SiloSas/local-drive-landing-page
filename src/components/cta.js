import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Essayez Local drive"
      description="Profitez de 15 jours d'essai gratuit, puis du tarif réduit 'premiers utilisateurs' à 19.90€ par mois. (pas de carte bancaire demandée)"
    />
    <Button href={'https://seller.local-drive.shop/signIn'}>Je commence mon essai gratuit</Button>
  </div>
)

export default CallToAction
