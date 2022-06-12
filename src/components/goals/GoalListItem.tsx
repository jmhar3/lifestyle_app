import { Text, Button, Spacer, Center } from "@chakra-ui/react";

export interface Props {
  label: string;
  storyPoint: number;
  openGoal: () => void;
}

export const GoalListItem = (props: Props) => {
  const { label, storyPoint, openGoal } = props;
  let completed = false;

  return (
    <Button bg="brand.lightMid" onClick={openGoal} isFullWidth>
      <Text color={completed ? "brand.strong" : "brand.dark"}>{label}</Text>
      <Spacer />
      <Center bg="brand.light" w="6" h="6" rounded="100%">
        <Text p="0">{storyPoint}</Text>
      </Center>
    </Button>
  );
};
