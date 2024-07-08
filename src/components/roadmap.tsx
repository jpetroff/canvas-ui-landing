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
				<div className={`absolute -left-[13px] bg-zinc-800 ring-4 ring-zinc-800 ${className || ''} mobile:-top-1.5 mobile:left-3 mobile:bottom-auto`}>
					<DesignOutlineSvg />
				</div>
			);

		case 'dev':
			return (
				<div className={`absolute bg-zinc-800 ring-4 ring-zinc-800 ${className || ''} mobile:-top-1.5 mobile:left-4 mobile:bottom-auto`}>
					<DevOutlineSvg />
				</div>
			);

		case 'both': 
			return (
				<div className={`absolute bg-zinc-800 ring-4 ring-zinc-800 flex flex-row ${className || ''} mobile:-top-1.5 mobile:left-0 mobile:bottom-auto`}>
					<DevOutlineSvg />
					<DesignOutlineSvg className='-ml-[13px]' />
				</div>
			);
	}
}

const Roadmap = () => {
	return (<>

		<div className={`flex flex-col items-center mt-[192px] mobile:mt-20`}>
			<span className={`flex gap-2 flex-row mobile:flex-wrap mobile:items-center mobile:gap-0 items-baseline text-h-base mobile:text-h-base-mobile mobile:leading-8 leading-[2.625rem] text-zinc-250 font-light`}>
				<CanvasLogoSvg className='text-zinc-50 -mt-px mobile:py-2 mobile:box-content mobile:h-4 mobile:w-[117px] h-[19px] w-[140px]' />&nbsp;aims to provide both
			</span>
			<span className={`flex gap-1 flex-row mobile:flex-wrap mobile:gap-0 items-center mobile:justify-center text-h-base mobile:text-h-base-mobile mobile:leading-8 leading-[2.625rem] text-zinc-250 font-light`}>
				<div className={`flex flex-row gap-2 mobile:gap-0.5`}>
					<DevFillSvg className='mobile:h-8' /><span className={`font-medium text-zinc-50`}>developer components</span>
				</div>
				&nbsp;and&nbsp;
				<div className={`flex flex-row gap-2 mobile:gap-0.5`}>
					<DesignFillSvg className='mobile:h-8' /><span className={`font-medium text-zinc-50`}>design documentation</span>
				</div>
			</span>
			<span className={`flex gap-2 flex-row items-center text-h-base mobile:text-h-base-mobile mobile:leading-8 leading-[2.625rem] text-zinc-250 font-light mobile:text-center`}>
				to better&nbsp;fit your design&nbsp;and development&nbsp;processes
			</span>
		</div>
		
		<h3 className={`flex flex-row flex-grow gap-4 items-center w-[960px] mobile:w-full mt-[194px] mobile:mt-20`}>
			<i className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-800)_0%,_theme(colors.zinc-500)_100%)]' />
			<span className={`typo-h-base text-zinc-50`}>
				Roadmap
			</span>
			<b className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-500)_0%,_theme(colors.zinc-800)_100%)]' />
		</h3>
		<p className='text-center text-zinc-250 typo-base mt-4 font-medium'>
			Check here how you can contribute to the project and when to expect beta test
		</p>

		<div className={`w-[960px] mobile:w-full mobile:relative grid grid-flow-row gap-0 grid-cols-8 mobile:grid-cols-1 mt-20 mobile:mt-12`}>

			<div className={`relative col-span-2 self-end col-start-1 mobile:col-start-1 mobile:row-start-1 mobile:pl-20 mobile:mb-16`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-emerald-800'>DONE</Badge>
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
					Prototype and demo stand with&nbsp;examples 
				</p>
				<RoadmapChip type='both' className='-bottom-[45px]' />
			</div>

			<div className={`relative col-span-2 self-end col-start-5 mobile:col-start-1 mobile:row-start-3 mobile:pl-20 mobile:mb-16`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-sky-700 '>TODO</Badge>
					<Badge className='bg-[linear-gradient(144deg,_#4338ca_0%,_#d97706_100%)]'>ßETA</Badge>
					development
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
				Testing coverage, code&nbsp;refactoring for production
				</p>
				<RoadmapChip type='dev' className='-bottom-[45px]' />
			</div>

			<div className={`relative col-span-2 self-start col-start-3 row-start-3 mobile:col-start-1 mobile:row-start-2 mobile:pl-20 mobile:mb-16`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-sky-700'>TODO</Badge>
					design
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
					Collecting design use cases, prototype tests
				</p>
				<RoadmapChip type='design' className='-top-[49px]' />
			</div>

			<div className={`relative col-span-2 self-start col-start-7 row-start-3 mobile:col-start-1 mobile:row-start-4 mobile:pl-20 mobile:mb-16`}>
				<div className={`flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `}>
					<Badge className='bg-sky-700'>TODO</Badge>
					design
				</div>
				<p className={`typo-base text-zinc-50 mt-2`}>
					Early adopters testing and design refinement
				</p>
				<RoadmapChip type='design' className='-top-[49px]' />
			</div>

			<div 
				className={`
					row-start-2 col-span-full h-[29px] items-center flex flex-row pt-4 pb-5 flex-shrink-0 box-content 
					relative z-[-1] mobile:absolute mobile:top-0 mobile:bottom-0 mobile:left-[34px] mobile:w-1 mobile:h-auto
					mobile:items-start mobile:p-0 mobile:col-span-1 mobile:row-auto
				`}
			>
				<i className={`h-px bg-zinc-500 w-full block mobile:h-full mobile:w-px mobile:bg-[linear-gradient(0deg,_theme(colors.zinc-500/0)_0%,_theme(colors.zinc-500/1)_32px,_theme(colors.zinc-500/1)_100%)] mobile:bg-zinc-800`}></i>
				<img src={`${EndArrowUri}`} alt="end arrow" width="15" height="13" className='absolute right-0 mobile:hidden' />
			</div>

		</div>		
	</>)
}

export default Roadmap
