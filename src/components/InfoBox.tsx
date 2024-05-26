import { type ReactNode } from 'react'
interface hintBoxProp{
    mode: "hint" ;
    children: ReactNode
}
interface warningBoxprop{
    mode:  "Warning";
    severity: "low" | "medium" | "high"
    children: ReactNode

}
type inforBoxProp = hintBoxProp | warningBoxprop

const InfoBox = (props: inforBoxProp) => {
    if (props.mode === "hint"){
        const {children} = props
        return (
            <aside className='infobox infobox-hint'>
              <p>{children}</p>
            </aside>
          )
    } if (props.mode === "Warning") {
        const {severity, children} = props
        return (
            <aside className={`infobox infobox-warning warning--${severity}`}>
              <h1>  Warnng</h1>
              <p>{children}</p>
            </aside>
          )
    }
  
}

export default InfoBox
