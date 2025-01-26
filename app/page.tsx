
import { Card } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (<>
    <Card.Root className="bg-accent">
      <Card.Header></Card.Header>
      <Card.Body />
      <Card.Footer />
    </Card.Root>
    </>
  );
}
