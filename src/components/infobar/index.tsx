import { Book, Headphones, Search } from 'lucide-react'
import { Input } from '../ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className='flex flex-row justify-end gap-6 items-center 
    px-4 w-full dark:bg-black'>
      <span className='flex items-center bg-muted px-4 rounded-full'>
        <Search/>
        <Input placeholder="Pesquisar" className="border-none bg-transparent"/>
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones/>
          </TooltipTrigger>
          <TooltipContent>
            <p>Suporte</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book/>
          </TooltipTrigger>
          <TooltipContent>
            <p>Guia</p>
          </TooltipContent>

        </Tooltip>

      </TooltipProvider>
      <UserButton/>
    </div>
  )
}

export default InfoBar