import {
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalContent,
  ModalOverlay,
  VStack,
  Checkbox,
  Text,
} from "@chakra-ui/react";

export interface SubGoal {
  label: string;
  completed: boolean;
  id: number;
}

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  goal: {
    id: number;
    label: string;
    subGoals: SubGoal[];
  };
  completeGoal: (goalId: number, subGoalId: number) => void;
}

export const GoalModal = (props: Props) => {
  const { isOpen, onClose, goal, completeGoal } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{goal.label}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            {goal.subGoals.map((subGoal) => {
              return (
                <Checkbox
                  isChecked={subGoal.completed}
                  onChange={() => completeGoal(goal.id, subGoal.id)}
                >
                  {subGoal.label}
                </Checkbox>
              );
            })}
          </VStack>
        </ModalBody>

        <ModalFooter>
         <Button>Complete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
