/// <reference types="vite/client" />

declare module '*.svg?react' {
	import * as React from 'react';

	export const ReactComponent: React.FunctionComponent<React.SVGProps<
		SVGSVGElement
	> & { title?: string }>;

	// const src: string;
	export default ReactComponent;
}