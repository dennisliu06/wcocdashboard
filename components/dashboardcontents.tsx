import { Box, Card, Flex, Grid } from "@chakra-ui/react";
import Link from "next/link";

export default function DashboardContents() {
  const Events = [
    {
      name: "Multi-Chamber Networking Social at The Great American Beer Hall",
      date: "Februrary 11th, 2025",
      time: "5 - 8pm",
      href: "/event1",
      registered: 200,
    },
    {
      name: "Women In Business - The Guest Speaker is: YOU!",
      date: "February 12, 2025",
      time: "12 - 1:30pm",
      href: "/event2",
      registered: 120,
    },
    {
      name: "Ribbon Cutting at Escapology",
      date: "February 13, 2025",
      time: "2 - 4pm",
      href: "/event3",
      registered: 140,
    },
  ];

  return (
    <>
      <Flex gap="12" direction="column" className="m-10">
        <Box>
          <header className="font-bold font-sans text-5xl">Events</header>
        </Box>
        <div className="w-full h-5 bg-gray-300"></div>
        <Grid templateColumns="repeat(4, 1fr)" gap="6">
          {Events.map((event, index) => (
            <Link href={event.href} key={index} >
              <Card.Root width="320px" className="bg-white hover:bg-blue-100" color="black" >
                <Card.Body gap="2">
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Description>{event.date}</Card.Description>
                  <Card.Description>
                    {event.time}
                  </Card.Description>
                  <Card.Description>{"Registered:  " + event.registered}</Card.Description>
                </Card.Body>
                <Card.Footer> </Card.Footer>
              </Card.Root>
            </Link>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
