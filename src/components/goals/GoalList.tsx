import { Box, Heading, Progress, VStack } from "@chakra-ui/react";
import { GoalListItem } from "./GoalListItem";

export interface Props {
 goals: any;
 onGoalListItemClick: any;
}

export const GoalList = (props: Props) => {
 const {goals, onGoalListItemClick} = props;

  return (
    <Box>
      <Heading as="h3" size="lg">
        Todays Focus
      </Heading>
      {/* progress bar with min and max goals */}
      <Progress rounded="15" colorScheme="red" value={80} my="3" />
      <VStack spacing={3}>
        {goals.map((goal: any) => (
          <GoalListItem
            label={goal.label}
            storyPoint={goal.points}
            openGoal={() => onGoalListItemClick(goal)}
          />
        ))}
      </VStack>
    </Box>
  );
};
