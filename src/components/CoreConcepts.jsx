import CoreConcept from "./CoreConcept";
import Section from "./Section";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conseptItem) => (
          <CoreConcept key={conseptItem.title} {...conseptItem} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}
