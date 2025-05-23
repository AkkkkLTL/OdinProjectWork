import { MODULEENUM } from "./enum";

/**
 * 个人信息
 */
interface IPersonal {
  /**
   * 姓名
   */
  fullName: string;
  /**
   * 出生日期
   */
  birthDate: string;
  /**
   * 性别
   */
  gender: string;
  /**
   * 头像
   */
  avatar: boolean;
  /**
   * 邮箱
   */
  email: string;
  /**
   * 电话
   */
  phoneNumber: string;
  /**
   * 民族
   */
  nation: string;
  /**
   * 籍贯
   */
  hometown: string;
  /**
   * 现居地
   */
  address: string;
  /**
   * 开始工作时间
   */
  startWorkDate: string;
  /**
   * 政治面貌
   */
  politicalStatus: string;
  /**
   * 身高
   */
  height: string;
  /**
   * 体重
   */
  weight: string;
}
export type Personal = Partial<IPersonal>;


/**
 * 模块通用属性
 */
export interface Section {
  /**
   * 唯一标识，用于区分模块中不同单项
   */
  id: string;
  /**
   * 是否折叠
   */
  isCollapsed: boolean,
  /**
   * 是否在简历中隐藏
   */
  isHidden: boolean,
}

export interface Education extends Section {
  schoolName?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}

export interface Experience extends Section {
  companyName?: string;
  positionTitle?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
}

export type Sections = {
  [MODULEENUM.EDUCATION]?: Education[];
  [MODULEENUM.EXPERIENCE]?: Experience[];
};
export type SectionItem = Education | Experience;