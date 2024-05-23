import { ResourceChildrenProps } from "@/lib";

export const TestChildA1 = (props: ResourceChildrenProps) => {
  // console.log(props, "props");
  const { containerWrapper: ContainerWrapper } = props;
  return (
    <ContainerWrapper>
      TestChildA1 ContainerWrapper
      <button>123</button>
    </ContainerWrapper>
  );
};

export const TestChildC4 = (props: ResourceChildrenProps) => {
  // console.log(props, "props");
  const { containerWrapper: ContainerWrapper } = props;
  return (
    <ContainerWrapper title="TestChildC4">
      <h1>TestChildC4</h1>
      <h1>TestChildC4</h1>
      <h1>TestChildC4</h1>
      <h1>TestChildC4</h1>
      <h1>TestChildC4</h1>
      <h1>TestChildC4</h1>
      <h1>TestChildC4</h1>
      <button>123</button>
    </ContainerWrapper>
  );
};
export const TestChildB1 = (props: ResourceChildrenProps) => {
  const { containerWrapper: ContainerWrapper } = props;
  return <ContainerWrapper>TestChildB1 ContainerWrapper</ContainerWrapper>;
};
export const TestChildC1 = (props: ResourceChildrenProps) => {
  console.log(props, "TestChildC1 props");
  const { containerWrapper: ContainerWrapper } = props;
  return <ContainerWrapper>TestChildC1 ContainerWrapper</ContainerWrapper>;
};
export const TestChildB2 = (props: ResourceChildrenProps) => {
  return <div>TestChildB2</div>;
};
