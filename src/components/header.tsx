"use client" 
import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "./primary-input"
import { CartIcon } from "./cart-icon"

const sairaStencilOne = Saira_Stencil_One({
 weight: ['400'],
 subsets: ['latin']
})

const TagHeader = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px 160px;
`

const Logo = styled.a`
 color: var(--logo-color);
 font-weight: 400;
 font-size: 40px;
 line-height: 150%;
`

export function Header() {
 return (
   <TagHeader>
    <Logo className={sairaStencilOne.className}>Caputeeno</Logo>
    <div>
     <PrimaryInputWithSearchIcon placeholder="Procura algo específico?"/>
    </div>
    <CartIcon />
  </TagHeader>
 )
}