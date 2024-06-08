import { ReactNode, CSSProperties, RefObject } from "react"

export type ComponentBasicProps = {
  children: React.ReactNode,
  className?: string,
}

export type CarouselButtonProps = {
  children: ReactNode,
  onClick?: () => void,
  className?: string,
  disable?: boolean,
}

export type SlidesContainerProps = {
  children: ReactNode,
  animation?: boolean,
  width?: number,
  positionX?: number,
}

export type SlideProps = {
  children: ReactNode,
  spaceBetween?:  number,
  width: number,
}

export type SlidesWrapperProps = ComponentBasicProps & {
  slidesWrapperRef: RefObject<HTMLDivElement>,
}