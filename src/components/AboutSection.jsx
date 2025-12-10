import useInView from "./useInView";

function AboutSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`about section ${inView ? "section-visible" : ""}`}
      id="about"
    >
      <div className="about-inner">
        <h2 className="section-title">About Saned</h2>

        {/* text block */}
        <div className="about-body">
          <p>
            Saned is an innovative local service platform designed to seamlessly
            connect people who need a service with individuals who can provide
            that service.
          </p>
          <p>
            Built to support communities, Saned makes it easy for users to request
            help, offer their skills, and interact through a trusted and
            streamlined system.
          </p>
          <p>
            With Saned, users can browse or create service requests, communicate
            securely, view profiles and ratings, and complete tasks efficiently —
            all within one intuitive platform.
          </p>
          <p>
            Whether it’s home repairs, tutoring, daily assistance, or specialized
            skills, Saned empowers people to support one another while enabling
            service providers to grow and showcase their expertise.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
