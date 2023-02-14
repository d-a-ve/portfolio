import React from "react";
import Button from "../../utils/Button";
import SectionIntro from "../../utils/SectionIntro";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../../myData";
import "./Services.css";

export default function Services() {
  const serviceList = services.map((service) => (
    <ServiceCard key={service.id} title={service.title} text={service.text} />
  ));

  return (
    <section className="section" id="services">
      <div className="services-container grid">
        <SectionIntro>What I can do for you</SectionIntro>

        <div className="services-data">
          <h2>My Services</h2>
          <div className="services-data-details">{serviceList}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button link={"#"} linkText={"Contact Me"} />
        </div>
      </div>
    </section>
  );
}
