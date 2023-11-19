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
}

export type BaseStepsProps = {
  steps: Array<{
    title: string
    step: number
  }>
  currentStep: number
}
