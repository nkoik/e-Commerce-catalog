export type BaseLabelProps = {
  forId: string
}

export type BaseInputProps = {
  modelValue: string | number
  error: boolean
}

export type BaseButtonProps = {
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size: 'sm' | 'md' | 'lg'
  disabled: boolean
  round: boolean
  loading: boolean
}

export type BaseStepsProps = {
  steps: Array<{
    title: string
    step: number
  }>
  currentStep: number
}

export type BaseSelectProps = {
  modelValue: string
  error: boolean
  options:
    | Array<{
        value: string
        label: string
      }>
    | []
  selected: string
}
