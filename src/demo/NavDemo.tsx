import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/ui'
import React from 'react'
import '../lib/globals.css'
export const NavDemo = () => {
  return (
    <NavigationMenu value='1'>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
        <div style={{
   margin:'0 16px'
          }}>111111111111</div>
        </NavigationMenuTrigger>
        <NavigationMenuContent style={{
            width:'40px'
        }}>
          <div style={{
           border:'1px solid red',
           width:'30px'
          }}>NavigationMenuContent111111111</div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem value='1'>
        <NavigationMenuTrigger>
        <div style={{
            margin:'0 16px'
          }}>222222222</div>
        </NavigationMenuTrigger>
        <NavigationMenuContent >
          <div  style={{
           border:'1px solid red',
           width:'108px'
          }}>NavigationMenuContent2222222</div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem value='2'>
        <NavigationMenuTrigger>
        <div style={{
            margin:'0 16px'
          }}>3333333</div>
        </NavigationMenuTrigger>
        <NavigationMenuContent >
          <div  style={{
           border:'1px solid red',
           width:'108px'
          }}>NavigationMenuContent333333333</div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem value='3'>
        <NavigationMenuTrigger>
        <div style={{
            margin:'0 16px'
          }}>44444444444</div>
        </NavigationMenuTrigger>
        <NavigationMenuContent >
          <div  style={{
           border:'1px solid red',
           width:'108px'
          }}>NavigationMenuContent444444444</div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  
  )
}
