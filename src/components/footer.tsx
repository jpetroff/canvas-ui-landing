import React from 'react'
import CanvasLogo from '../assets/images/canvas-logo.svg?react'

const Footer = () => {
	return (
		<div className={`w-full h-[160px] mt-[170px] mobile:mt-14 flex flex-col items-center justify-center`}>
			<div className={`flex flex-col gap-6 items-center`}>
				<CanvasLogo className='text-zinc-750  mobile:w-2/3 opacity-50' />
				<span className={`text-zinc-750 opacity-90 typo-base font-medium`}>© 2024–present</span>
			</div>			
		</div>
	)
}

export default Footer
