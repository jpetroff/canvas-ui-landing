import * as React from 'react'

// backdrop-filter: blur(4px);
// box-shadow: inset 0 0 12px 0 rgba(114,_114,_122,_0.12) ;
// background: var(--colors-zinc-750), radial-gradient(49.02% 125.31% at 11.73% 0%, rgb(65, 65, 71) 10.000000149011612%, rgb(55, 55, 61) 100%);

const Video = () => {
	const [tab, setTab] = React.useState(0)

	return (
		<div className={`w-[960px] m-[188px] items-center`}>
			<style>{`[data-selected]{box-shadow: inset 0 0 12px 0 rgba(114,114,122,0.12);background-image: radial-gradient(49% 125% at 12% 0%, rgb(65, 65, 71) 10%, rgb(55, 55, 61) 100%);}`}</style>
			<h3 className={`flex flex-row gap-4 items-center`}>
				<i className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-800)_0%,_theme(colors.zinc-500)_100%)]' />
				<span className={`typo-h-base text-zinc-100`}>Some practical examples</span>
				<b className='flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-500)_0%,_theme(colors.zinc-800)_100%)]' />
			</h3>

			<div data-section-radio className={`flex flex-row gap-4 mt-8 justify-center`}>
				<div 
					data-selected={ tab == 0 ? '' : void 0 } 
					className={`flex typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50`}
					onClick={() => setTab(0)}
				>
					AI tools
				</div>
				<div 
					data-selected={ tab == 1 ? '' : void 0 } 
					className={`flex typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50`}
					onClick={() => setTab(1)}
				>
					Automation scenarios
				</div>
				<div 
					data-selected={ tab == 2 ? '' : void 0 }
					className={`flex typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50`}
					onClick={() => setTab(2)}
				>
					Conversational flows
				</div>
			</div>

		</div>
	)
}

export default Video
