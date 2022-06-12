import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  HStack,
  Progress,
  CircularProgress,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { GoalListItem } from "../components/goals/GoalListItem";
import { GoalModal } from "../components/goals/GoalModal";

dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export interface SubGoal {
  id: number;
  label: string;
  completed: boolean;
}

export interface Goal {
  id: number;
  label: string;
  subGoals: SubGoal[];
}

export const Home = () => {
  let meridiem = dayjs().format("A");
  const date = dayjs().format("dddd, Do MMMM YYYY");
  console.log(date);
  let name = "Jess";
  const [goals, setGoals] = useState([
    {
      id: 1,
      label: "Wash Hair",
      points: 1,
      subGoals: [{ id: 1, label: "Wash Hair", completed: false }],
    },
    {
      id: 2,
      label: "Mop Floor",
      points: 2,
      subGoals: [
        { id: 1, label: "Prep Mop", completed: false },
        { id: 2, label: "Mop Floor", completed: false },
      ],
    },
    {
      id: 3,
      label: "Rebuild Dashboard",
      points: 4,
      subGoals: [
        { id: 1, label: "Template with Hardcoded Data", completed: false },
        { id: 2, label: "Custom UI Design", completed: false },
        { id: 3, label: "Functionality", completed: false },
      ],
    },
    {
      id: 4,
      label: "Water Plants",
      points: 1,
      subGoals: [{ id: 1, label: "Water Plants", completed: false }],
    },
    {
      id: 5,
      label: "Groom Louis",
      points: 2,
      subGoals: [
        { id: 1, label: "Brush Coat", completed: false },
        { id: 2, label: "Wash Floof", completed: false },
        { id: 3, label: "Trim Nails", completed: false },
      ],
    },
  ]);

  const [selectedGoal, setSelectedGoal] = useState({
    id: 1,
    label: "",
    subGoals: [{ id: 1, label: "", completed: false }],
  });
  const [openGoalModal, setOpenGoalModal] = useState(false);

  const onGoalListItemClick = (goal: Goal) => {
    setSelectedGoal(goal);
    setOpenGoalModal(true);
  };

  const onGoalComplete = (goalId: number, subGoalId: number) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id === goalId) {
          goal.subGoals.map((subGoal) => {
            if (subGoal.id === subGoalId) {
              return { ...subGoal, completed: !subGoal.completed };
            }
            return subGoal;
          });
        }
        return goal;
      })
    );
  };

  return (
    <>
      <Grid templateColumns="repeat(10, 1fr)" gap="5" m="5" pl="10">
        <GridItem colSpan={7}>
          <Heading as="h3" size="md">
            {date}
          </Heading>
          <Heading>
            Good {meridiem === "AM" ? "Morning" : "Evening"}, {name}
          </Heading>
          <HStack my="3" gap="3">
            <IconButton
              bg="brand.lightMid"
              size="lg"
              aria-label="Finance Dashboard"
              icon={<SearchIcon />}
            />
            <IconButton
              bg="brand.lightMid"
              size="lg"
              aria-label="Note Dashboard"
              icon={<SearchIcon />}
            />
            <IconButton
              bg="brand.lightMid"
              size="lg"
              aria-label="Goal Dashboard"
              icon={<SearchIcon />}
            />
            <IconButton
              bg="brand.lightMid"
              size="lg"
              aria-label="Wellness Dashboard"
              icon={<SearchIcon />}
            />
          </HStack>
          <Box bg="brand.lightMid" p="3" rounded="15">
            <HStack>
              <Text>$180</Text>
              <hr />
              <Text>$300</Text>
              <hr />
              <Text>$120</Text>
            </HStack>
            <Progress value={80} rounded="15" colorScheme="red" />
            <HStack>
              <HStack>
                <CircularProgress value={80} />
                <Text>Holiday</Text>
              </HStack>
              <HStack>
                <CircularProgress value={80} />
                <Text>New Phone</Text>
              </HStack>
              <HStack>
                <CircularProgress value={80} />
                <Text>Home Deposit</Text>
              </HStack>
            </HStack>
          </Box>
          <Grid templateColumns="repeat(5, 1fr)" gap="5">
            <GridItem colSpan={2}>
              <Progress rounded="15" colorScheme="red" value={80} />
            </GridItem>
            <GridItem colSpan={3}>
              <Progress rounded="15" colorScheme="red" value={80} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={3}>
          
        </GridItem>
      </Grid>

      {openGoalModal && (
        <GoalModal
          isOpen={openGoalModal}
          onClose={() => setOpenGoalModal(false)}
          goal={selectedGoal}
          completeGoal={onGoalComplete}
        />
      )}
    </>
  );
};
