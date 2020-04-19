import React from "react"

import feature from "../images/feature.png"
import place from "../images/boutique.png"
import products from "../images/fruits.jpg"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Créez votre service de drive"
      description="Proposer ce nouveau service à vos clients en seulement quelques minutes."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Indiquez les lieux de retrait des commandes</h3>
        <p style={{ color: COLORS.gray }}>
          Indiquer votre présence sur des marchés ou créez des lieux de retrait (boutiques physiques ou lieux éphémères)
        </p>
      </div>
      <div>
        <img src={place} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
     <div>
        <img src={products} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Ajoutez vos produits</h3>
        <p style={{ color: COLORS.gray }}>
          Listez les produits que vos clients peuvent commander en drive.
        </p>
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Attendez vos commandes !</h3>
        <p style={{ color: COLORS.gray }}>
          Vos clients peuvent dès à présent passer les commandes, vous les recevraient dans votre espace personnel.
        </p>
      </div>
        <div>
            <img src={feature} alt="a blank card floating over colorful graphics" />
        </div>
    </content>
  </div>
)

export default Content
