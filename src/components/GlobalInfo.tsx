import styled from "@emotion/styled";

interface Props {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const Wrapper = styled.div`
  text-align: center;
`;

const GlobalInfo: React.FunctionComponent<Props> = ({
  newConfirmed,
  newDeaths,
  newRecovered,
}) => {
  return (
    <Wrapper>
      <h1>Global Covid-19 data</h1>
      <h3>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}</h3>
      <h3>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h3>
      <h3>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h3>
    </Wrapper>
  );
};

export default GlobalInfo;
