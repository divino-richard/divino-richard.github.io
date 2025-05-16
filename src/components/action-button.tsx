import { DetailedHTMLProps, PropsWithChildren } from "react"

type Props = PropsWithChildren & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function ActionButton({children, ...props}: Props) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}
