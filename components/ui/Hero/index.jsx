import NavLink from "../NavLink"
import Image from 'next/image';
import logoFull from '../../../public/logo-full.png'

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <div className="mb-20 sm:mb-12">
                    <Image src={logoFull} alt="ByteMe Logo" />
                </div>
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Build and scale your next business idea faster
                </h1>
                <p className="max-w-xl mx-auto">
                    ByteMe is making it simple for you to build and grow your web applications, or any business idea.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-green-600 hover:bg-green-700 active:bg-green-800"
                    >
                        Start building
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero