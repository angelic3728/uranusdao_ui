import React from 'react'
import styled from 'styled-components'
import Toolbar from 'components/Toolbar'
import UranusIntro from './UranusIntro'


const PageWrapper = styled.div`
	margin-left:250px;
	padding:10px;
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