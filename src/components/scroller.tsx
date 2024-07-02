import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

type TScroller = {
	children?: React.ReactNode
}

const Scroller : React.FC<TScroller> = (
	{children}
) => (
  <ScrollArea.Root className="flex flex-col flex-grow w-full overflow-hidden" type="auto">
    <ScrollArea.Viewport className="w-full h-auto">
      {children}
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      className="flex rounded-full select-none touch-none p-0 bg-zinc-950/30 transition-colors duration-[160ms] ease-out hover:bg-zinc-700/30 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-0.5"
      orientation="horizontal"
    >
      <ScrollArea.Thumb className="flex-1 bg-zinc-600 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className="bg-zinc-300" />
  </ScrollArea.Root>
);

export default Scroller