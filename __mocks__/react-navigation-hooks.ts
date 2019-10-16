const navigate = jest.fn();

const useNavigation = () => {
  return {
    navigate,
  };
};

type useNavigationParamProps = {
  value: string;
  default?: string;
};

const useNavigationParam = (props: useNavigationParamProps) => {
  return props.value;
};

export { useNavigation, useNavigationParam, navigate };
