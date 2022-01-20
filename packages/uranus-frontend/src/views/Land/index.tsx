import React from 'react'
import styled from 'styled-components'
import Toolbar from 'components/Toolbar'
import UranusIntro from './UranusIntro'


const PageWrapper = styled.div`
	margin-left:250px;
	padding:10px;
	background: ${({ theme }) => theme.isDark
            ? "linear-gradient(180deg, rgba(8, 15, 53, 0), rgba(0, 0, 10, 0.9)), linear-gradient(333deg, rgba(153, 207, 255, 0.2), rgba(180, 255, 217, 0.08)), radial-gradient(circle at 77% 89%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 50%), radial-gradient(circle at 15% 95%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 43%), radial-gradient(circle at 65% 23%, rgba(137, 151, 119, 0.4), rgba(137, 151, 119, 0) 70%), radial-gradient(circle at 10% 0%, rgba(187, 211, 204, 0.33), rgba(187,211,204,0) 35%), radial-gradient(circle at 11% 100%, rgba(131, 165, 203, 0.3), rgba(131, 165, 203, 0) 30%)"
            : "linear-gradient(180deg, #AFCDE9 1%, #F7FBE7 100%)"};
  	background-color:${({ theme }) => theme.isDark
            ? "#080f35"
            : "#AFCDE9"};
`


const Land = () => {
	return (
		<>
			<PageWrapper>
				<Toolbar />
				<UranusIntro />
			</ PageWrapper>
		</>
	)
}

export default Land