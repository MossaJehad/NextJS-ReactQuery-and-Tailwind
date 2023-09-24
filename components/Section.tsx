import Container from '@/components/ui/container'
import { Button } from './ui/button'
import { Popcorn } from 'lucide-react'


export default function Home() {
  
  return (
    <Container>
      <div className="space-y-10 pb-2">
        <div className='p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden'>
          <div style={{backgroundImage:`url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7991579.jpg&fm=jpg)`}} className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                <div className='drop-shadow-xl font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg'>
                    Featured Movies
                    <Button size='lg' className='w-full py-6 text-xl'>
                        <Popcorn className='mr-2' />
                        Watch Now
                    </Button>
                </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        </div>
      </div>
    </Container>
  )
}