import React from "react";
import "./styles.css";
import data from "./data.json";
import {
  CarouselBtn,
  CarouselList,
  CarouselContainer,
  Icon,
  Carousel,
  CarouselItem,
  CarouselBody,
  H4,
  P,
  CarouselImage,
  Image,
} from "./styledComponent";
import { sleep } from "./utils";

const slideWidth = 30;

const _items = data;
const length = _items.length;

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    data: _items[idx],
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      item.styles = { ...item.styles };
      break;
    default:
      item.styles = { ...item.styles };
      // item.styles = { ...item.styles, opacity: 0 }
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx }) => {
  const item = createItem(pos, idx);

  return (
    <CarouselItem style={item.styles}>
      <CarouselImage>
        <Image src={item.data.image} alt={item.data.name}></Image>
      </CarouselImage>
      <CarouselBody>
        <H4>Name: {item.data.name}</H4>
        <P>Price: {item.data.price}</P>
        <P>Category: {item.data.category}</P>
      </CarouselBody>
    </CarouselItem>
  );
};

const keys = Array.from(Array(_items.length).keys());

function App() {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  return (
    <Carousel>
      <CarouselBtn left={true} onClick={() => prevClick()}>
        <Icon left={true}></Icon>
      </CarouselBtn>
      <CarouselContainer>
        <CarouselList>
          {items.map((pos, i) => (
            <CarouselSlideItem key={i} idx={i} pos={pos} />
          ))}
        </CarouselList>
      </CarouselContainer>
      <CarouselBtn right={true} onClick={() => nextClick()}>
        <Icon right={true}></Icon>
      </CarouselBtn>
    </Carousel>
  );
}

export default App;
