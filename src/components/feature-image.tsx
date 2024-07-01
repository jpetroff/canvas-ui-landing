import * as React from 'react'
import LinearFormSvg from '@/assets/images/linear-form-feature.svg?react'
import CanvasFormSvg from '@/assets/images/canvas-feature.svg?react'
import CanvasBadgeSvg from '@/assets/images/canvas-badge.svg?react'
import LineRightSvg from '@/assets/images/line-right.svg?react'

const FeatureImage: React.FunctionComponent<{}> = () => {

	return <div className={`flex flex-row gap-4 items-start w-[960px] mt-[192px]`}>

		<LinearFormSvg className='-mt-4 flex-shrink-0' />

		<div className={`flex flex-col flex-grow mt-11 gap-5`}>
			<p className={`m-0 p-0 typo-base text-zinc-100`}>
				Split your lengthy form into&nbsp;manageable chunks
			</p>
			<p className={`m-0 p-0 typo-base text-zinc-100 items-center`}>
				Put it inside&nbsp;<CanvasBadgeSvg className='inline-block -mt-[2px]' />
				component on a page
			</p>
			<LineRightSvg className='text-zinc-600' />
		</div>

		<CanvasFormSvg className='flex-shrink-0' />
	</div>
}

export default FeatureImage