import useInView from "./useInView";

function Hero() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      id="home"
      className={`hero section ${inView ? "section-visible" : ""}`}
    >
      <div className="hero-inner">
        <div className="hero-left">
          {/* ONLY the paragraph text under the title in the design */}
          <p className="hero-subtitle">
            Be a client when you need help, or a provider when you want to earn —{" "}
            Saned makes it effortless to switch roles anytime.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-hero hero-btn">Find Help</button>
            <button className="btn btn-hero-outline hero-btn">
              Start Offering Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
