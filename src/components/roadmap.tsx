import * as React from 'react'
import CanvasLogoSvg from '@/assets/images/canvas-logo.svg?react'
import DevFillSvg from '@/assets/images/dev-full-chip.svg?react'
import DevOutlineSvg from '@/assets/images/dev-outline-chip.svg?react'
import DesignFillSvg from '@/assets/images/design-full-chip.svg?react'
import DesignOutlineSvg from '@/assets/images/design-outline-chip.svg?react'
import EndArrowUri from '@/assets/images/end-arrow.png'

type TBadge = {children: React.ReactNode, className?: string}

const Badge : React.FC<TBadge> = ( {children, className} ) => {
	return (
		<div className={`${className || ''} px-1.5 pt-px text-[0.625rem] leading-4 font-medium tracking-wider text-zinc-50 rounded inline-block`}>
			{children}
		</div>
	)
}

type TRoadmapChip = {type: 'dev' | 'design' | 'both', className?: string}

const RoadmapChip : React.FC<TRoadmapChip> = ({type, className}) => {
	switch(type) {

		case 'design': 
		default: 
			return (
				<div className={`absolute  -left-[13px] bg-zinc-800 ring-4 ring-zinc-800 ${className || ''}`}>
					<DesignOutlineSvg />
				</div>
			);

		case 'dev':
			return (
				<div className={`absolute bg-zinc-800 ring-4 ring-zinc-800 ${className || ''}`}>
					<DevOutlineSvg />
				</div>
			);

		case 'both': 
			return (
				<div className={`absolute bg-zinc-800 ring-4 ring-zinc-800 flex flex-row ${className || ''}`}>
					<DevOutlineSvg />
					<DesignOutlineSvg className='-ml-[13px]' />
				</div>
			);
	}
}

const Roadmap = () => {
	return (<>

		<div className={`flex flex-col items-center`}>
			<span className={`flex gap-2 flex-row items-baseline text-h-base leading-[2.625rem] text-zinc-250 font-light`}>
				<CanvasLogoSvg height={20} width={140} className='text-zinc-50 -mt-px' /> aims to provide both
			</span>
			<span className={`flex gap-1 flex-row items-center text-h-base leading-[2.625rem] text-zinc-250 font-light`}>
				<DevFillSvg />
				<span className={`font-medium text-zinc-50`}>developer components</span>
				&nbsp;and&nbsp;
				<DesignFillSvg />
				<span className={`font-medium text-zinc-50`}>design documentation</span>
			</span>
			<span className={`flex gap-2 flex-row items-center text-h-base leading-[2.625rem] text-zinc-250 font-light`}>
				to seamlessly integrate into&nbsp;your design&nbsp;system and&nbsp;process
			</span>
		</div>
		
		<h3 className={`flex flex-row flex-grow gap-4 items-center w-[960px] mt-[194px]`}>
			<i className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-800)_0%,_theme(colors.zinc-500)_100%)]' />
			<span className={`typo-h-base text-zinc-50`}>
				Roadmap
			</span>
			<b className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-500)_0%,_theme(colors.zinc-800)_100%)]' />
		</h3>
		<p className='text-center text-zinc-250 typo-base mt-4 font-medium'>
			Check here how you can contribute to the project and when to expect beta test
		</p>

		<div className={`w-[960px] grid grid-flow-row gap-0 grid-cols-8 mt-20`}>

			<div className={`relative col-span-2 self-end col-start-1`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-emerald-800'>DONE</Badge>
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
					Prototype and demo stand with&nbsp;examples 
				</p>
				<RoadmapChip type='both' className='-bottom-[45px]' />
			</div>

			<div className={`relative col-span-2 self-end col-start-5`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-cyan-800 '>TODO</Badge>
					<Badge className='bg-cyan-800  bg-[linear-gradient(144deg,_#4338ca_0%,_#d97706_100%)]'>ßETA</Badge>
					development
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
				Testing coverage, code&nbsp;refactoring to&nbsp;meet React standards
				</p>
				<RoadmapChip type='dev' className='-bottom-[45px]' />
			</div>

			<div className={`relative col-span-2 self-start col-start-3 row-start-3`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-cyan-800 '>TODO</Badge>
					design
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
					Collect more practical examples and requests that would shape requirements
				</p>
				<RoadmapChip type='design' className='-top-[49px]' />
			</div>

			<div className={`relative col-span-2 self-start col-start-7 row-start-3`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-cyan-800 '>TODO</Badge>
					design
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
					User testing and design refinement
				</p>
				<RoadmapChip type='design' className='-top-[49px]' />
			</div>

			<div className={`row-start-2 col-span-full h-[29px] items-center flex flex-row pt-4 pb-5 flex-shrink-0 box-content relative z-[-1]`}>
				<i className={`h-px bg-zinc-500 w-full block`}></i>
				<img src={`${EndArrowUri}`} alt="end arrow" width="15" height="13" className='absolute right-0' />
			</div>

		</div>		
	</>)
}

export default Roadmap
