import batman from "../images/batman.jpg";
function Hero() {
  return (
    <section className="h-[580px] bg-batman">
      <img src={batman} className="h-full w-full object-cover" alt="" />
    </section>
  );
}

export default Hero;
