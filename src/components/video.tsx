import * as React from 'react'
import Scroller from './scroller'
import { Dialog } from '@ariakit/react'

import LLMVideoUri from '@/assets/video/canvas-ui-llm.mp4'
import ChatVideoUri from '@/assets/video/canvas-ui-chat.mp4'
import AutoVideoUri from '@/assets/video/canvas-ui-automation.mp4'
import LLMVideoThumb from '@/assets/images/canvas-ui-llm-thumb.jpg'
import ChatVideoThumb from '@/assets/images/canvas-ui-chat-thumb.jpg'
import AutoVideoThumb from '@/assets/images/canvas-ui-automation-thumb.jpg'
import PlayCircleSvg from '@/assets/images/play_circle.svg?react'

type TVideoThumbnail = {
	className?: string,
	image: string,
	children?: React.ReactNode,
	onClick: React.MouseEventHandler<HTMLDivElement>
}

const VideoThumbnail : React.FunctionComponent<TVideoThumbnail> = (
	{className, image, children, onClick}
) => {
	return (
		<div 
			className={`${className || ''} relative w-full flex flex-row justify-center items-center aspect-video bg-zinc-900 rounded-lg cursor-pointer text-indigo-50/60 hover:text-indigo-50/[0.96]`} 
			onClick={onClick} 
		>
			<div className={`w-full aspect-video rounded-lg overflow-hidden hover:scale-[1.01] absolute top-0 left-0 bg-zinc-900 transition-transform z-0`}>
				<img src={image} className='w-full aspect-video opacity-45' />
			</div>
			<PlayCircleSvg className={`w-24 h-24 z-10 relative pointer-events-none transition-colors`} />
			{children}
		</div>
	)
}

const Video = () => {
	const [tab, setTab] = React.useState(0)
	const [openDialog, setOpenDialog] = React.useState(false)
	const videoTag = React.useRef<HTMLVideoElement>(null)

	return (
		<div className={`w-[960px] mobile:w-full mt-[188px] mobile:mt-20 items-center flex flex-col gap-10`}>
			<style>{`[data-selected]{box-shadow: inset 0 0 12px 0 rgba(114,114,122,0.12);background-image: radial-gradient(49% 125% at 12% 0%, rgb(65, 65, 71) 10%, rgb(55, 55, 61) 100%);}`}</style>
			<h3 className={`flex flex-row gap-4 items-center w-full`}>
				<i className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-800)_0%,_theme(colors.zinc-500)_100%)]' />
				<span className={`typo-h-base text-zinc-100`}>Example demos</span>
				<b className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-500)_0%,_theme(colors.zinc-800)_100%)]' />
			</h3>

			<Scroller>
			<div data-section-radio className={`flex flex-row gap-4 mobile:gap-2 justify-center mobile:justify-normal mobile:w-auto mobile:pb-6`}>
				<div 
					data-selected={ tab == 0 ? '' : void 0 } 
					className={`flex flex-shrink-0 typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50`}
					onClick={() => setTab(0)}
				>
					AI tools
				</div>
				<div 
					data-selected={ tab == 1 ? '' : void 0 }
					className={`flex flex-shrink-0 typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50`}
					onClick={() => setTab(1)}
				>
					Conversational flows
				</div>
				<div 
					data-selected={ tab == 2 ? '' : void 0 } 
					className={`flex flex-shrink-0 typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50`}
					onClick={() => setTab(2)}
				>
					Automation scenarios
				</div>
			</div>
			</Scroller>

			<div className={`w-full max-w-3xl aspect-video rounded-lg shadow-2xl shadow-zinc-950/80 bg-[#13121B] cursor-pointer transition-colors`}>
				<VideoThumbnail image={LLMVideoThumb} onClick={() => setOpenDialog(true)} className={`${tab == 0 ? '' : 'hidden'}`} />

				<VideoThumbnail image={ChatVideoThumb} onClick={() => setOpenDialog(true)} className={`${tab == 1 ? '' : 'hidden'}`} />

				<VideoThumbnail image={AutoVideoThumb} onClick={() => setOpenDialog(true)} className={`${tab == 2 ? '' : 'hidden'}`} />
			</div>

			<Dialog
				open={openDialog}
				onClose={() => { setOpenDialog(false); videoTag.current && videoTag.current.pause() } }
				className='dialog bg-transparent w-auto p-0 aspect-video outline-none'
			>
				{tab == 0 && <video ref={videoTag} className='w-full aspect-video outline-none' controls autoPlay><source src={LLMVideoUri} type="video/mp4" /></video>}
				{tab == 1 && <video ref={videoTag} className='w-full aspect-video outline-none' controls autoPlay><source src={ChatVideoUri} type="video/mp4" /></video>}
				{tab == 2 && <video ref={videoTag} className='w-full aspect-video outline-none' controls autoPlay><source src={AutoVideoUri} type="video/mp4" /></video>}
			</Dialog>
		</div>
	)
}

export default Video
