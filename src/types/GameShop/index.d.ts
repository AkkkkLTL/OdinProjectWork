/**
 * Common Interfaces
 */

declare namespace GameShop {
  // Option List Item
  export interface Option {
    id: string,
    name: string,
    icon?: JSX.Element,
    slug?: string,
  }

  // Game List Item
  export interface BasicGame {
    id: number,
    name: string,
    background_image: string,  // game's cover
    parent_platforms: ParentPlatform[],  // game's platforms
    isInCart?: boolean,     // whether in cart
    price?: number,
  }

  // Game Detail
  export interface GameDetail extends BasicGame {
    description_raw: string,
    genres?: Genre[],
    publishers?: Publisher[],
    developers?: Developer[],
    released?: string,
    website?: string,
  }

  // Other Attribute
  interface BasicAttribute {
    id: number,
    name: string,
    slug?: string,
  }

  export interface ScreenShot {
    id: number | string,
    image: string,
  }

  export interface ParentPlatform  {
    platform: BasicAttribute,
  }

  export type Developer = BasicAttribute;

  export type Publisher = BasicAttribute;

  export type Genre = BasicAttribute;
}
