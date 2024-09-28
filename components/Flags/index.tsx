// Third-party dependencies
import { Accordion, AccordionItem } from "@nextui-org/accordion";

// Current project dependencies

export default function Flags({ flags }: { flags: Flag[]; isGreen: boolean }) {
  return (
    <Accordion selectionMode="multiple">
      {flags.map((flag, index) => (
        <AccordionItem key={index} title={flag.title}>
          {flag.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
