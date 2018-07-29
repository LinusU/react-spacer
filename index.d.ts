import { ReactNode, StatelessComponent } from 'react'

declare interface SpacerProps {
  width?: string | number
  height?: string | number
  grow?: string | number
  shrink?: string | number
  children?: ReactNode
}

declare const Spacer: StatelessComponent<SpacerProps>

export = Spacer
