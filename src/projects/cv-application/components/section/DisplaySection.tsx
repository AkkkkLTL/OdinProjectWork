import { ReactNode } from "react"
import { Section } from "../../types/entries"

interface IProps<T extends Section> {
  array:T[],
  InfoComponent: ({data}:{data:T}) => ReactNode,
  title:string,
}

export default function DisplaySection<T extends Section>({
  array,
  InfoComponent,
  title,
}:IProps<T>) {
  return (
    <>
      {/* 只要有一项数据设置为显示，就展示对应标题 */}
      {!array.every((item) => (item as any).isHidden) && (
        <h3 className="header-text">{title}</h3>
      )}
      {/* 根据显隐设置来展示数据项 */}
      {array.map((info) => !(info as any).isHidden && <InfoComponent data={info} key={info.id} />)}
    </>
  )
}