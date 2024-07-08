import * as React from 'react'

import ResizeFeatureUri from '@/assets/images/resize-feature.png'
import ResizeFeatureUri2x from '@/assets/images/resize-feature@2x.png'

import ExtraLayersUri from '@/assets/images/extra-layers-feature.png'
import ExtraLayersUri2x from '@/assets/images/extra-layers-feature@2x.png'

import ControlMovementUri from '@/assets/images/control-movement-feature.png'
import ControlMovementUri2x from '@/assets/images/control-movement-feature@2x.png'

import ZoomFeatureUri from '@/assets/images/zoom-feature.png'
import ZoomFeatureUri2x from '@/assets/images/zoom-feature@2x.png'

import ConnectionsFeatureUri from '@/assets/images/connections-feature.png'
import ConnectionsFeatureUri2x from '@/assets/images/connections-feature@2x.png'

const FeaturesBlock = () => {
	return (
		<div className={`w-[960px] mobile:w-full grid grid-cols-2 mobile:grid-cols-1 grid-rows-[repeat(4,_172px)] mobile:grid-rows-none p-4 mobile:p-0 rounded-3xl ring-1 mobile:ring-0 ring-zinc-700 mt-[114px] mobile:mt-20 gap-4`}>
			
			<div className={`flex flex-col justify-between row-span-2 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`}>

				<img className='w-[360px] min-w-[360px]'
					src={ResizeFeatureUri} alt="Let users move, resize, rearrange" 
					srcSet={`${ResizeFeatureUri}, ${ResizeFeatureUri2x} 2x`} />

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Let users move, resize, rearrange</span>
					<span className={`typo-sm text-zinc-250`}>All necessary items’ positions can be defined by users keeping necessary ones always at hand</span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-2 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`}>

				<img 
					src={ExtraLayersUri} className={`w-[244px] -ml-1.5 -mt-1.5`}
					alt="Let users move, resize, rearrange" 
					srcSet={`${ExtraLayersUri}, ${ExtraLayersUri2x} 2x`} />

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Add extra layers for collaboration</span>
					<span className={`typo-sm text-zinc-250`}>Notes, comments and what not. Remember that onboarding is&nbsp;also&nbsp;collaboration between your team and users </span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-2 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`}>

				<img 
					src={ControlMovementUri} className={`w-[185px]`}
					alt="Let users move, resize, rearrange" 
					srcSet={`${ControlMovementUri}, ${ControlMovementUri2x} 2x`} />

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Full control over movement</span>
					<span className={`typo-sm text-zinc-250`}>Define degrees of freedom: sticky items, free positioning, drop&nbsp;zones, CSS grids</span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-1 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`}>

				<img 
					src={ZoomFeatureUri} className={`w-[226px] -ml-1.5`}
					alt="Let users move, resize, rearrange" 
					srcSet={`${ZoomFeatureUri}, ${ZoomFeatureUri2x} 2x`} />

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Zoom out for bigger picture</span>
				</div>
			</div>

			<div className={`flex flex-col justify-between row-span-1 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`}>

				<img 
					src={ConnectionsFeatureUri} className={`w-[300px] -ml-8`}
					alt="Let users move, resize, rearrange" 
					srcSet={`${ConnectionsFeatureUri}, ${ConnectionsFeatureUri2x} 2x`} />

				<div className={`flex flex-col gap-3`}>
					<span className={`typo-h-base text-zinc-100`}>Connections and&nbsp;dependencies</span>
				</div>
			</div>

		</div>
	)
}

export default FeaturesBlock
