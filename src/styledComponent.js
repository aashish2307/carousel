import styled from "styled-components";

export const CarouselBtn = styled.button`
  align-items: center;
  background: 0;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => (props.right ? "-10rem" : "")};
  left: ${(props) => (props.left ? "-10rem" : "")};
`;
export const CarouselList = styled.ul`
  height: 100%;
  left: 50%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  transform: translateX(-50%);
  width: 330rem;
`;
export const CarouselContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
export const Icon = styled.i`
  border: solid black;
  border-width: 0 0.4rem 0.4rem 0;
  height: 3rem;
  padding: 3px;
  width: 3rem;
  z-index: 10;
  transform: ${(props) => (props.left ? "rotate(135deg)" : "rotate(-45deg)")};
`;
export const Carousel = styled.div`
  margin-top: 10%;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
  width: 80%;
  left: 50%;
  // To see
  transform: translateX(-50%);
  height: 40rem;
  position: relative;
  width: 90rem;
`;
export const CarouselItem = styled.li`
  display: inline-block;
  height: 30rem;
  margin: 0;
  padding: 1rem;
  position: absolute;
  transition: all 0.3s;
  width: 30rem;
`;
export const CarouselBody = styled.div`
  height: 10%;
  position: absolute;
  text-align: center;
  width: 100%;
`;
export const H4 = styled.h4`
  margin: 0.7rem 0 0;
  text-transform: uppercase;
`;
export const P = styled.p`
  font-size: 1.3rem;
  margin: 0.7rem 0 0;
`;
export const CarouselImage = styled.div`
  cursor: zoom-in;
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
export const Image = styled.img`
  height: 100%;
  object-fit: contain;
  transition: all 0.5s ease;
  width: 100%;

  &:hover {
    transform: scale(1.3);
  }
`;
