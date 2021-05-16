export const dataTestIdPrefix = (componentName: string): ((testId: string) => string) => {
  return (testId: string): string => `${componentName}-${testId}`
}
