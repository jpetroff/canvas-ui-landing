import * as React from 'react'
import ReactLogo from '../assets/images/react-logo.svg?react'
import HeaderBgUrl from '../assets/images/hero-bg.svg'
import CanvasLogo from '../assets/images/canvas-logo.svg?react'
import GithubLogo from '../assets/images/github-logo.svg?react'
import HandRose from '../assets/images/openhand-rose.svg?react'
import ResizeWestBlue from '../assets/images/resizeeastwest-blue.svg?react'

const Header: React.FunctionComponent<{}> = () => {

	return <div className='flex flex-grow'>

		<div className='flex flex-col flex-grow-0 flex-shrink-0 px-[96px] box-content pt-[256px] w-[960px] gap-[31px]'>

			<img src={HeaderBgUrl} className='w-[1440px] h-[1024px] absolute top-0 left-[50%] translate-x-[-50%] -z-[1] pointer-events-none' />

			<div className='flex flex-row flex-grow flex-shrink-0 justify-center items-center gap-2 py-1.5 rounded-full bg-zinc-800 ring-zinc-500 ring-1 typo-base box-border'>
				<span>React-based</span>
				<ReactLogo className='w-[24px] h-[22px] text-zinc-400' />
				<span>open source design and development framework</span>
			</div>

			<div className={`flex flex-row flex-grow gap-[30px]`}>

				<div className='flex flex-col justify-center items-center flex-grow h-[192px] bg-zinc-800 ring-zinc-500 ring-1 box-border rounded-2xl relative'>
					<CanvasLogo />
					<div data-top-handle className='absolute bg-zinc-500 opacity-50 rounded-full -top-2 left-1/2 -translate-x-1/2 w-10 h-1'></div>
					<div data-bottom-handle className='absolute bg-zinc-500 opacity-50 rounded-full -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1'></div>
					<div data-left-handle className='absolute bg-zinc-500 opacity-50 rounded-full -left-2 top-1/2 -translate-y-1/2 h-10 w-1'></div>
					<div data-right-handle className='absolute bg-zinc-500 opacity-50 rounded-full -right-2 top-1/2 -translate-y-1/2 h-10 w-1'></div>
					<HandRose className='absolute -right-3 -bottom-3' />
					<ResizeWestBlue className='absolute -left-[22px] top-1/2 -translate-y-1/2' />
				</div>

				<div className='flex flex-col justify-center items-center w-[384px] h-[192px] bg-zinc-800 ring-zinc-500 ring-1 box-border rounded-2xl'>
					<span className='typo-h-base px-1 text-center text-zinc-100'>
						Transform large clunky linear forms into&nbsp;adjustable and self-explanatory experience
					</span>
				</div>
			</div>

			<div className='flex flex-row self-end  w-[384px] gap-4'>
					<a href="#" className="flex flex-row items-center bg-zinc-800 ring-zinc-500 ring-1 box-border rounded-2xl pl-1 pr-5 h-8 gap-3">
						<GithubLogo className='text-zinc-300' />
						<span className="typo-base text-zinc-50">Demo repo</span>
					</a>
					<div className="flex flex-row flex-grow items-center justify-center px-4 bg-zinc-800 ring-zinc-500 ring-1 box-border rounded-2xl h-8">
						<span className="typo-base text-zinc-300">More links coming soon!</span>
					</div>
				</div>

		</div>

	</div>
}

export default Header