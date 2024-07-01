import * as React from 'react'
import ResizeFeatureSvg from '@/assets/images/resize-feature.svg?react'
import ExtraLayersFeatureSvg from '@/assets/images/extra-layers-feature.svg?react'

const FeaturesBlock = () => {
	return (
		<div className={`w-[960px] grid grid-cols-2 grid-rows-[repeat(4,_172px)] p-4 rounded-2xl ring-1 ring-zinc-700 mt-[114px] gap-4 `}>
			
			<div className={`flex flex-col justify-between row-span-2 px-8 py-6 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)]`}>

				<ResizeFeatureSvg className='flex-grow-0' />

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Let users move, resize, rearrange</span>
					<span className={`typo-sm text-zinc-250`}>All necessary items’ positions can be defined by users keeping necessary ones always at hand</span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-2 px-8 py-6 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)]`}>

				<ExtraLayersFeatureSvg className='flex-grow-0' />

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Add extra layers for collaboration</span>
					<span className={`typo-sm text-zinc-250`}>Notes, comments and what not. Remember that onboarding is&nbsp;also&nbsp;collaboration between your team and users </span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-2 px-8 py-6 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)]`}>

				<div className='flex-grow-0'>&nbsp;</div>

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Full control over movement</span>
					<span className={`typo-sm text-zinc-250`}>Define degrees of freedom: sticky items, free positioning, drop&nbsp;zones, CSS grids</span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-1 px-8 py-6 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)]`}>

				<div className='flex-grow-0'>&nbsp;</div>

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Zoom out for bigger picture</span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-1 px-8 py-6 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)]`}>

				<div className='flex-grow-0'>&nbsp;</div>

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Visualize connections</span>
				</div>
			</div>

		</div>
	)
}

export default FeaturesBlock
