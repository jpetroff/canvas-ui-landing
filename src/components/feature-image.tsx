import * as React from 'react'
import LinearFormSvg from '@/assets/images/linear-form-feature.svg?react'
import CanvasFormSvg from '@/assets/images/canvas-feature.svg?react'
import CanvasBadgeSvg from '@/assets/images/canvas-badge.svg?react'
import LineRightSvg from '@/assets/images/line-right.svg?react'
import Scroller from '@/components/scroller'

const FeatureImage: React.FunctionComponent<{}> = () => {

	return (
		<div className={`flex flex-row gap-4 items-start w-[960px] mt-[192px] mobile:w-full mobile:-mx-6 mobile:mt-10 `}>
		<Scroller>
			<div className={`flex flex-row gap-4 items-start mobile:h-[380px]`}>
				<LinearFormSvg className='-mt-4 flex-shrink-0 mobile:w-[163px]' />

				<div className={`flex flex-col flex-grow mt-11 gap-5`}>
					<p className={`m-0 p-0 typo-base text-zinc-100 font-medium`}>
						Split your lengthy&nbsp;form into&nbsp;manageable chunks
					</p>
					<p className={`m-0 p-0 typo-base text-zinc-100 items-center font-medium`}>
						Put it inside&nbsp;<CanvasBadgeSvg className='inline-block -mt-[2px]' />
						component on&nbsp;a&nbsp;page
					</p>
					<LineRightSvg className='text-zinc-600 mobile:w-[120px]' />
				</div>

				<CanvasFormSvg className='flex-shrink-0 mobile:w-[327px]' />
			</div>
		</Scroller>
		</div>
	)
}

export default FeatureImage