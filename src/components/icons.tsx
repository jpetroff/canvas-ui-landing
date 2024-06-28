import * as React from 'react'
import ReactLogo from '../assets/images/react-logo.svg'

const Icons = {
	ReactLogo: (props: React.HTMLProps<SVGElement>) => {
		return <ReactLogo {...props} />
	}
}

export default Icons