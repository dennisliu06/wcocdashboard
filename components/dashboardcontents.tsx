import { Box, Flex } from "@chakra-ui/react";

export default function DashboardContents() {
    return(
        <>
        <Flex gap="12" direction="column" className="m-10">
            <Box><header className="font-bold font-sans text-5xl">Events</header></ Box>
            <div className="w-full h-5 bg-gray-300" ></div>
            <div>hello</div>
        </Flex>
        </>
    )
}