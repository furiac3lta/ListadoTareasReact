import { Container as ContainerContent } from 'semantic-ui-react';

export default function Container({children}) {
  return (
    <div>
      <ContainerContent text>{children}</ContainerContent>
    </div>
  )
}
