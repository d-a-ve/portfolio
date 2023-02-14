type ServiceCardPropType = {
  title: string;
  text: React.ReactNode;
};

export default function ServiceCard({ title, text }: ServiceCardPropType) {
  return (
    <div className="service">
      <div className="service-details">
        <h3 className="service-heading">{title}</h3>

        <p className="service-data">{text}</p>
      </div>
    </div>
  );
}
