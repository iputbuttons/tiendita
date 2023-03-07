import { Dropdown } from '@nextui-org/react'
import { FC } from 'react'
import { CTCategories } from './categories.types'

export const Categories: FC<CTCategories> = ({
  data,
  defaultValue,
  value,
  onCategory,
}) => (
  <Dropdown>
    <Dropdown.Button flat color='primary'>
      {value}
    </Dropdown.Button>
    <Dropdown.Menu onAction={onCategory}>
      {[...data, defaultValue]
        .sort()
        .filter((category) => category !== value)
        .map((category) => (
          <Dropdown.Item key={category}>{category}</Dropdown.Item>
        ))}
    </Dropdown.Menu>
  </Dropdown>
)
