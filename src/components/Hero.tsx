/*
 * Components
 */
import { ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg: gap-10">
        <div>
          <div className="flex items-center gap-3 pb-4">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpeg"
                width={40}
                height={40}
                alt="avatar-1"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping "></span>
              </span>
              Open for new Opportunities
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-h-[20ch] lg:max-w-[15h] mt-5mb-8 lg:mb-10 ">
            Skilled React Developer with experience in backend and automation
            technologies.
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="https://drive.usercontent.google.com/download?id=1C1NIq0LSwi2hj-Ld6C8bHCOVOXEykBhR"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
