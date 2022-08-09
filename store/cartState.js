import { atom } from "recoil";
import { useRecoilState } from "recoil";

const cartState = atom({
  key: "cartState",
  default: {}, //this is 'cart' default value
});

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  return [cart, setCart];
};
