"use client";

import React, { JSX, ReactNode } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  BoxProps,
  FlexProps,
  Link,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { CloseButton } from "./ui/close-button";
import Image from "next/image";
import DashboardContents from "./dashboardcontents";
import { GrDatabase } from "react-icons/gr"

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: LinkItemProps[] = [
  { name: "Home", icon: FiHome, href: "dashboard" },
  { name: "Statistics", icon: FiTrendingUp, href: "statistics" },
  { name: "Add Data", icon: GrDatabase, href: "data" },
  { name: "Profile Settings", icon: FiSettings, href: "settings"}
];

export default function SimpleSidebar({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {}

function SidebarContent({ ...rest }: SidebarProps) {
  return (
    <Box
      className="bg-accent"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="/WalthamChamberLogo.png" alt="Logo" width={200} height={200}/>
        <CloseButton display={{ base: "flex", md: "none" }} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={"" + link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  href: string;
}

function NavItem({ icon, children, href, ...rest }: NavItemProps) {
  return (
    <Link href={href} _focus={{ boxShadow: "none" }} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{ color: "white" }}
        {...rest}
      >
        <Icon mr="4" fontSize="16" _groupHover={{ color: "white" }} as={icon} />
        {children}
      </Flex>
    </Link>
  );
}
