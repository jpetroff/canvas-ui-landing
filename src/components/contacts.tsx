import * as React from 'react'
import GithubLogo from '../assets/images/github-logo.svg?react'
import LinkedinLogo from '../assets/images/linkedin-logo.svg?react'
import KofiLogo from '../assets/images/ko-fi-logo.svg?react'
import AvatarUri from '../assets/images/avatar.png'

type TLinkPromo = {children: React.ReactNode, href: string, title?: string, className?: string}

const LinkPromo : React.FC<TLinkPromo> = ({children, href, title, className}) => {
	return (
		<a 
			className={`${className || ''} flex flex-col gap-2 border-b border-zinc-600 py-4 text-zinc-250 hover:text-zinc-50 hover:border-zinc-400 bg-[radial-gradient(276.58%_100%_at_50.39%_0%,_rgb(36,_36,_41)_0%,_rgba(75,_75,_82,_0.16)_100%)]`} 
			href={href} title={`${title || ''}`} 
			style={ {backdropFilter: 'blur(10px)'} }
		>
			{children}
		</a>
	)
}


const Contacts = () => {
	return (
		<div className={`w-[960px] flex flex-row mt-[192px] gap-24`}>

			<div className={`flex-grow`}>
				<div className={`typo-h-base text-zinc-250`}>
					If you <strong className='text-zinc-50 font-medium'>find Canvas UI useful</strong> for your work<br/>or&nbsp;would like to <strong className='text-zinc-50 font-medium'>contribute</strong> to&nbsp;the&nbsp;roadmap<br />reach me out
				</div>
				<div className={`flex flex-row gap-4 mt-6`}>
					<LinkPromo href="#" className={`typo-sm font-medium flex flex-grow-0 items-center w-20`} >
						<div className={`flex flex-col gap-1 items-center`}>
							<img width={42} height={42} src={AvatarUri} />
							<span>email</span>
						</div>
					</LinkPromo>
					<LinkPromo href="#" className={`typo-sm font-medium flex flex-grow-0 items-center w-20`} >
						<div className={`flex flex-col gap-1 items-center`}>
							<GithubLogo width={42} height={42} />
							<span>github</span>
						</div>
					</LinkPromo>
					<LinkPromo href="#" className={`typo-sm font-medium flex flex-grow-0 items-center w-20`} >
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
					<LinkPromo href="#" className={`text-zinc-250 typo-sm font-medium flex flex-grow-0 items-center w-20`} >
						<div className={`flex flex-col gap-1 items-center`}>
							<KofiLogo width={42} height={42} />
							<span>ko-fi</span>
						</div>
					</LinkPromo>
				</div>
			</div>
		</div>
	)
}

export default Contacts
