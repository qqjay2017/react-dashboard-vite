import { ResourceChildrenProps } from "@/lib";

export const TestChildA1 = (props: ResourceChildrenProps) => {
  console.log(props, "props");
  const { containerWrapper: ContainerWrapper } = props;
  return <ContainerWrapper>TestChildA1 ContainerWrapper</ContainerWrapper>;
};
