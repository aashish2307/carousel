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
  Select,
  CategoriesWrapper,
  H2,
} from "./styledComponent";
import { sleep, onlyUnique } from "./utils";

const createItem = (position, idx, items) => {
  const slideWidth = 30;
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    data: items[idx],
  };
  return item;
};

const CarouselSlideItem = ({ pos, idx, items }) => {
  const item = createItem(pos, idx, items);

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

function App() {
  const _items = data;
  const keys = Array.from(Array(_items.length).keys());
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(false);
  const bigLength = items.length;
  const categories = _items.map((item) => item.category).filter(onlyUnique);

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const onCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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
    <React.Fragment>
      <CategoriesWrapper>
        <H2>Select Categories</H2>
        <Select onChange={onCategoryChange} value={selectedCategory}>
          <option>All Category</option>
          {categories.map((category, key) => (
            <option key={key}>{category}</option>
          ))}
        </Select>
      </CategoriesWrapper>
      <Carousel>
        <CarouselBtn left={true} onClick={() => prevClick()}>
          <Icon left={true}></Icon>
        </CarouselBtn>
        <CarouselContainer>
          <CarouselList>
            {items.map((pos, i) => (
              <CarouselSlideItem key={i} idx={i} pos={pos} items={_items} />
            ))}
          </CarouselList>
        </CarouselContainer>
        <CarouselBtn right={true} onClick={() => nextClick()}>
          <Icon right={true}></Icon>
        </CarouselBtn>
      </Carousel>
    </React.Fragment>
  );
}

export default App;
