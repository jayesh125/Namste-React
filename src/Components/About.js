import { useState } from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const [show, setShow] = useState(null);

  const handleToggle = (index) => {
    setShow((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-[80%] justify-self-center">
      <h1 className="m-10 text-2xl font-gilroy font-bold">About Us (Lifting Up State)</h1>
      <div className="m-10 border">
        {Array.from({ length: 5 }).map((_, index) => (
          <AboutCard
            key={index}
            title={`Card ${index + 1}`}
            isOpen={show === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
