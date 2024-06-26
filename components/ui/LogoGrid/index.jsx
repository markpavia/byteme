import Image from 'next/image'
import kryzl from '../../../public/logos/kryzl.png'
import lydiajose from '../../../public/logos/lydiajose.png'
import purplehearts from '../../../public/logos/purplehearts.png'
import luxe from '../../../public/logos/luxe.png'
import cialor from '../../../public/logos/cialor.png'

const logos = [
    {
        src: luxe,
        alt: "luxe"
    },
    {
        src: cialor,
        alt: "cialor"
    },
    {
        src: purplehearts,
        alt: "purplehearst"
    },
    {
        src: kryzl,
        alt: "kryzl"
    },
    {
        src: lydiajose,
        alt: "lydiajose"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                OUR CLIENTS
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} className="w-36" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid