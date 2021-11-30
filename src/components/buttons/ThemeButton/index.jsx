import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from 'store/theme/actions'

const ThemeButton = () => {
  const theme = useSelector(state => state.themeReducer.theme.palette.mode)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleTheme())
  }
  return (
    <Button 
      variant='contained' 
      color="secondary"
      onClick={handleClick}
    >
      {theme}
    </Button>
  )
}
    
export default ThemeButton
