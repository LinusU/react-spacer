import { ReactNode, StatelessComponent } from 'react'

declare interface SpacerProps {
  width?: string
  height?: string
  grow?: string | number
  shrink?: string | number
  children?: ReactNode
}

declare const Spacer: StatelessComponent<SpacerProps>

export = Spacer
