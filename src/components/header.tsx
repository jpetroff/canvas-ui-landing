import * as React from 'react'
import ReactLogo from '../assets/images/react-logo.svg?react'
import HeaderBgUrl from '../assets/images/hero-bg.svg'
import CanvasLogo from '../assets/images/canvas-logo.svg?react'
import GithubLogo from '../assets/images/github-logo.svg?react'
import HandRose from '../assets/images/openhand-rose.svg?react'
import ResizeWestBlue from '../assets/images/resizeeastwest-blue.svg?react'

const Header: React.FunctionComponent<{}> = () => {

	const gradBorder = `after:content-[' '] after:absolute after:-m-[1px] after:z-[-1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:rounded-[inherit] bg-clip-padding border border-[transparent]`
	const mobileRing = `mobile:border-zinc-600`

	return <div className='flex flex-grow'>

		<div className='flex flex-col flex-grow-0 flex-shrink-0 px-[96px] box-content pt-[256px] w-[960px] mobile:w-full mobile:px-0 mobile:pt-6 gap-[31px] mobile:gap-5'>

			<div 
				className={`bg-auto mobile:bg-[length:960px_682px] bg-no-repeat bg-center w-[1440px] h-[1024px] mobile:w-full mobile:h-[682px] max-w-none absolute top-0 left-[50%] translate-x-[-50%] -z-[1] pointer-events-none`}
				style={ {backgroundImage: `url('${HeaderBgUrl}')`} }
			></div>

			<div className={`flex flex-row mobile:overflow-hidden flex-grow flex-shrink-0 justify-center items-center mobile:justify-start h-[33px] rounded-full bg-zinc-800 
				relative ${gradBorder} after:bg-[linear-gradient(135deg,_#484861_0%,_#414147_80.55%,_#59434E_100%)]
				typo-base box-border font-medium -mr-1 mobile:after:content-none ${mobileRing}`}>
				<div className={`flex flex-row flex-shrink-0 running-string gap-2`}>
					<span >React-based</span>
					<ReactLogo className='w-[24px] h-[22px] text-zinc-400' />
					<span >open source design and development framework</span>
				</div>
			</div>

			<div className={`flex flex-row mobile:flex-col flex-grow gap-[30px]`}>

				<div className={`flex flex-col 
					justify-center items-center flex-grow h-[192px] mobile:h-auto mobile:py-7 bg-zinc-800 box-content rounded-2xl 
					${gradBorder} after:bg-[linear-gradient(22deg,_#484861_0%,_theme(colors.zinc-600)_100%)]
					relative mobile:after:content-none ${mobileRing}`}>
					<CanvasLogo className='mobile:w-[80%]' />
					<div data-top-handle className='absolute bg-zinc-500 opacity-50 rounded-full -top-2 left-1/2 -translate-x-1/2 w-10 h-1'></div>
					<div data-bottom-handle className='absolute bg-zinc-500 opacity-50 rounded-full -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1'></div>
					<div data-left-handle className='absolute bg-zinc-500 opacity-50 rounded-full -left-2 top-1/2 -translate-y-1/2 h-10 w-1'></div>
					<div data-right-handle className='absolute bg-zinc-500 opacity-50 rounded-full -right-2 top-1/2 -translate-y-1/2 h-10 w-1'></div>
					<HandRose className='absolute -right-3 -bottom-3' />
					<ResizeWestBlue className='absolute -left-[22px] top-1/2 -translate-y-1/2' />
				</div>

				<div className={`flex flex-col justify-center 
					items-center w-[385px] mobile:w-full h-[192px] mobile:h-auto mobile:py-8 bg-zinc-800 box-content 
					${gradBorder} after:bg-[linear-gradient(22deg,_#59434E_0%,_#4b4b52_100%);] m-[-1px]
					rounded-2xl relative mobile:after:content-none ${mobileRing}`}>
					<span className='typo-h-base px-1 text-center text-zinc-100'>
						Transform large clunky linear forms into&nbsp;adjustable and self-explanatory experience
					</span>
				</div>
			</div>

			<div className='flex flex-row mobile:flex-col self-end w-[384px] mobile:w-full gap-4'>
				<a href="https://github.com/jpetroff/canvas-ui-demo" target='_blank' className="flex flex-row items-center bg-zinc-800 ring-zinc-600 ring-opacity-70 ring-1 box-border rounded-2xl pl-1.5 pr-5 h-8 gap-3 hover:ring-zinc-300 transition-all text-zinc-300 hover:text-zinc-250">
					<GithubLogo />
					<span className="typo-base text-zinc-50 font-medium mobile:flex-grow mobile:text-center mobile:-ml-4">Demo repo</span>
				</a>
				<div className="flex flex-row flex-grow items-center justify-center px-4 bg-zinc-800 ring-zinc-600 ring-opacity-90 ring-1 box-border rounded-2xl h-8">
					<span className="typo-base text-zinc-300 font-medium">More links coming soon!</span>
				</div>
			</div>

		</div>

	</div>
}

export default Header