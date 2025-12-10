import useInView from "./useInView";
import HowItWorksCard from "./HowItWorksCard";

function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`how section ${inView ? "section-visible" : ""}`}
      id="how-it-works"
    >
      <div className="how-inner">
        <h2 className="section-title how-title-color">How Saned Works</h2>

        <div className="how-grid">
          <HowItWorksCard
            step="1"
            title="Sign up & set your profile"
            description="Create your account and choose whether you want to request services, offer services, or both."
            delay={0}
          />
          <HowItWorksCard
            step="2"
            title="Post or discover services"
            description="Create a service request or browse offers by category, location, price, and rating."
            delay={150}
          />
          <HowItWorksCard
            step="3"
            title="Chat, confirm & rate"
            description="Agree on details inside Saned, complete the task, and rate each other to build trust."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
