  import useInView from "./useInView";

  function HowItWorksCard({ step, title, description, delay = 0 }) {
    const [ref, inView] = useInView();

    return (
      <div
        ref={ref}
        className={`how-card ${inView ? "how-card-visible" : ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="how-card-step">{step}</div>
        <h3 className="how-card-title">{title}</h3>
        <p className="how-card-text">{description}</p>
      </div>
    );
  }

  export default HowItWorksCard;
