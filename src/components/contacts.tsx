import * as React from 'react'
import GithubLogo from '../assets/images/github-logo.svg?react'
import LinkedinLogo from '../assets/images/linkedin-logo.svg?react'
import KofiLogo from '../assets/images/ko-fi-logo.svg?react'
import AvatarUri from '../assets/images/avatar.png'
import { Button, Dialog } from '@ariakit/react'
import './contacts.css'

type TLinkPromo = {children: React.ReactNode, href: string, title?: string, className?: string} & React.HTMLProps<HTMLAnchorElement>

const LinkPromo : React.FC<TLinkPromo> = (props) => {
	const {children, href, title, className, ...intrinsicProps} = props 
	return (
		<a 
			className={`${className || ''} flex flex-col gap-2 border-none border-zinc-600 py-4 text-zinc-250 hover:text-zinc-50 hover:border-zinc-400 bg-[radial-gradient(94%_64%_at_0%_0%,_rgba(75,_75,_82,_0.12)_0%,_rgba(36,_36,_41,_0)_100%)] hover:bg-[radial-gradient(118%_82%_at_0%_0%,_rgba(75,_75,_82,_0.24)_0%,_rgba(36,_36,_41,_0)_100%)] transition-all`} 
			href={href} title={`${title || ''}`} 
			style={ {backdropFilter: 'blur(10px)'} }
			target={ href[0] == '#' ? '' : '_blank'}
			{...intrinsicProps}
		>
			{children}
		</a>
	)
}


const Contacts = () => {
	const [openDialog, setOpenDialog] = React.useState(window.location.hash == '#donate')

	return (
		<div className={`w-[960px] mobile:w-full flex flex-row mobile:flex-col mt-[192px] mobile:mt-8 gap-24 mobile:gap-16`}>

			<div className={`flex-grow`}>
				<div className={`typo-h-base text-zinc-250`}>
					If you <strong className='text-zinc-50 font-medium'>find Canvas UI useful</strong> for&nbsp;your&nbsp;work or&nbsp;would like to&nbsp;<strong className='text-zinc-50 font-medium'>contribute</strong> to&nbsp;the&nbsp;roadmap<br />reach me out
				</div>
				<div className={`flex flex-row gap-4 mt-6`}>
					<LinkPromo href="mailto:petrov.eugene.a@gmail.com" className={`typo-sm font-medium flex flex-grow-0 items-center w-20`} >
						<div className={`flex flex-col gap-1 items-center`}>
							<img width={42} height={42} src={AvatarUri} />
							<span>email</span>
						</div>
					</LinkPromo>
					<LinkPromo href="https://github.com/jpetroff/canvas-ui-demo" className={`typo-sm font-medium flex flex-grow-0 items-center w-20`} >
						<div className={`flex flex-col gap-1 items-center`}>
							<GithubLogo width={42} height={42} />
							<span>github</span>
						</div>
					</LinkPromo>
					<LinkPromo href="https://www.linkedin.com/in/petroveugene/" className={`typo-sm font-medium flex flex-grow-0 items-center w-20`} >
						<div className={`flex flex-col gap-1 items-center`}>
							<LinkedinLogo width={42} height={42} />
							<span>linkedin</span>
						</div>
					</LinkPromo>
				</div>
			</div>

			<div className={`flex-grow`}>
				<div className={`typo-h-base`}>
					Donate<br/>to&nbsp;support<br/>the&nbsp;project
				</div>
				<div className={`flex flex-row gap-4 mt-6`}>
					<LinkPromo href="#donate" onClick={() => setOpenDialog(true)} className={`text-zinc-250 typo-sm font-medium flex flex-grow-0 items-center w-20`} >
						<div className={`flex flex-col gap-1 items-center`}>
							<KofiLogo width={42} height={42} />
							<span>ko-fi</span>
						</div>
					</LinkPromo>
				</div>
			</div>

			<Dialog
				open={openDialog}
				onClose={() => { window.location.hash = ''; setOpenDialog(false); } }
				className='dialog dialog-donation'
			>
				<iframe id='kofiframe' src='https://ko-fi.com/eugenepetrov/?hidefeed=true&widget=true&embed=true&preview=true' 
					style={ {border: 'none', width: '100%', padding: '4px', background: '#f9f9f9'} } 
					height='712' 
					title='eugenepetrov' 
				/>
				<Button onClick={() => { window.location.hash = ''; setOpenDialog(false); } }>Close</Button>
			</Dialog>
		</div>
	)
}

export default Contacts
