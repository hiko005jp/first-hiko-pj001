import Image from "next/image"
import cube from "images/cube.jpg"

type HeroType = {
    title: string,
    subtitle:string,
    imageOn:boolean
}

const flexNormal = "flex flex-col"
const flexBig = "md:flex md:flex-row md:justify-between"
const flexSideBig = " md:text-left"
const flexSideNomal = flexNormal + " items-center text-center " +  flexBig + " " + flexSideBig



export default function Hero({title, subtitle, imageOn=false}:HeroType){
    return (
        <div className={flexSideNomal}>
            <div className="pt-12 pb-10">
                <h1 className="text-9xl font-black tracking-widest">{title}</h1>
                <p className="text-sm">{subtitle}</p>
            </div>
                {imageOn && (
                    <figure className="w-full lg:w-[1152px] md:w-1/2">
                        <Image 
                            src={cube} 
                            alt="" 
                            layout="responsive"
                            priority
                            placeholder="blur"
                            />
                    </figure>
                    )
            }
        </div>
        )
}