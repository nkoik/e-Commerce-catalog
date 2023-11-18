import { Router_Name } from '@/enums/router'
import { findMinMaxFromObjectArray } from '@/helpers/calculations'
import type { RouteStepMeta } from '@/types/router/types'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export function useNavigationBetweenSteps() {
  const router = useRouter()
  const routeSteps = computed(() => {
    let steps: Array<RouteStepMeta & { name: string }> = []
    const routeFound = router.currentRoute.value.matched.find(
      (route) => route.name === Router_Name.Home
    )
    if (routeFound) {
      steps = routeFound.children.map((childRoute) => ({
        ...childRoute.meta,
        name: childRoute.name
      }))
    }
    return steps
  })
  const currentRouteStep = computed(
    () => router.currentRoute.value.meta.step as number
  )

  const minMaxRouteStep = computed(() => {
    return findMinMaxFromObjectArray(routeSteps.value, 'step')
  })

  function handleNavigateToStep(stepTo: number): void {
    const findStep = routeSteps.value.find(({ step }) => step === stepTo)
    if (findStep) {
      router.push({ name: findStep.name })
    }
  }
  return {
    routeSteps,
    currentRouteStep,
    minStep: minMaxRouteStep.value[0],
    maxStep: minMaxRouteStep.value[1],
    handleNavigateToStep
  }
}
