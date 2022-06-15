import React from "react";
import {
  Box,
  useBoolean,
  Link,
  Container,
  VStack,
  Heading,
  Image,
} from "@chakra-ui/react";

import home from "../../images/world.png";
import newRecord from "../../images/book.png";
import goal from "../../images/to-do.png";
import note from "../../images/notes.png";
import finance from "../../images/box.png";

export const Nav = () => {
  const [homeLabel, setHomeLabel] = useBoolean(false);
  const [trackers, setTrackers] = useBoolean(false);
  const [newGoalLabel, setNewGoalLabel] = useBoolean(false);
  const [newNoteLabel, setNewNoteLabel] = useBoolean(false);
  const [newTransactionLabel, setNewTransactionLabel] = useBoolean(false);

  const showLabels =
    homeLabel || newGoalLabel || newNoteLabel || newTransactionLabel;

  if (localStorage.getItem("jwt")) {
    return (
      <Box>
        <Box onMouseLeave={setTrackers.off}>
          <Link href="/" className="menu-icon">
            <Image
              src={home}
              alt="home"
              onMouseOver={setHomeLabel.on}
              onMouseLeave={setHomeLabel.off}
            />
          </Link>
        </Box>
        <Container>
          <Heading visibility={homeLabel ? "visible" : "hidden"}>
            DreamJournal
          </Heading>
        </Container>
      </Box>
    );
  }

  return (
    <Box position="fixed" top="0" left="0">
      <Box bgColor="brand.mid" w="20" h="100vh">
        <Box onMouseLeave={setTrackers.off} gap="3" p="3">
          <Link href="/" w="fit-content">
            <Image
              src={home}
              alt="home"
              onMouseOver={setHomeLabel.on}
              onMouseLeave={setHomeLabel.off}
            />
          </Link>
          <Container
            onMouseOver={setTrackers.on}
            opacity={trackers ? "0.8" : "1"}
          >
            <Image src={newRecord} alt="new record" />
          </Container>
          <Link
            href="/goals/new"
            visibility={trackers ? "visible" : "hidden"}
            onMouseOver={setNewGoalLabel.on}
            onMouseLeave={setNewGoalLabel.off}
          >
            <Image src={goal} alt="goals" />
          </Link>
          <Link
            href="/notes/new"
            visibility={trackers ? "visible" : "hidden"}
            onMouseOver={setNewNoteLabel.on}
            onMouseLeave={setNewNoteLabel.off}
          >
            <Image src={note} alt="notes" />
          </Link>
          <Link
            href="/transactions/new"
            visibility={trackers ? "visible" : "hidden"}
            onMouseOver={setNewTransactionLabel.on}
            onMouseLeave={setNewTransactionLabel.off}
          >
            <Image src={finance} alt="transactions" />
          </Link>
        </Box>
      </Box>
      <VStack display={showLabels ? "flex" : "none"}>
        <Heading visibility={homeLabel ? "visible" : "hidden"}>Home</Heading>
        <Heading visibility={"hidden"}>New Record</Heading>
        <Heading visibility={newGoalLabel ? "visible" : "hidden"}>
          New Goal
        </Heading>
        <Heading visibility={newNoteLabel ? "visible" : "hidden"}>
          New Note
        </Heading>
        <Heading visibility={newTransactionLabel ? "visible" : "hidden"}>
          New Transaction
        </Heading>
      </VStack>
    </Box>
  );
};
