import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return ( 
        <Container>
            <div className="w-full h-full p-8">
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                    <Skeleton className="aspect-[9/16] m-2 rounded-xl"/>
                </div>
            </div>
        </Container>
     );
}
 
export default Loading;