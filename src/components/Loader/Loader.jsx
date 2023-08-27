import { Bars } from 'react-loader-spinner';
import { Container } from './Loader.style';

export const Loader = () => {
  return (
    <Container>
      <Bars
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};
