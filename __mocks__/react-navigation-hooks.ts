const useNavigation = () => {
  return {
    navigate: jest.fn(),
  };
};

type useNavigationParamProps = {
  value: string;
  default?: string;
};

const useNavigationParam = (props: useNavigationParamProps) => {
  return props.value;
};

export { useNavigation, useNavigationParam };
