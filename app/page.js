import Enterus from "./component/enterus";
import Hero from "./component/hero";
import Service from "./component/service";
import Summarize from "./component/summarize";

export default function page() {
  return (
    <div>
      <Hero />
      <Service />
      <Summarize />
      <Enterus />
    </div>
  );
}
