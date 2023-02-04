import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
  const { justify = 'between' } = props
  return (
    <Flex
      justify={justify}
      direction='row'
      {...props}
    ></Flex>
  )
}
